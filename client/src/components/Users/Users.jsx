import React, {useEffect, useState} from "react";
import styles from "./User.module.css";
import axios from "../../axios";
import User from "./User/User";
import ReactPaginate from "react-paginate";

function Users (){
    const [users,setUsers] = useState([]);
    const [loadUsersData,setLoadUsersData] = useState(true)
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        axios.get('api/users').then(res => setUsers(res.data.data)).finally(() => setLoadUsersData(false))
    },[])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(users.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(users.length / itemsPerPage));
    },[itemOffset, itemsPerPage, users,users.length])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % users.length;
        setItemOffset(newOffset);
    };


    return <div className={styles.users_block}>
        <div className={styles.title_block}>
            <h2>Список пациентов</h2>
            <h3>Всего пациентов: {users.length}</h3>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={styles.pagination}
                pageLinkClassName={styles.page_num}
                previousLinkClassName={styles.page_num}
                nextLinkClassName={styles.page_num}
                activeLinkClassName={styles.active}
            />
        </div>
        {loadUsersData ? (
            <div>Loading...</div>
        ) : (
            <>
                {users && users.length ? (
                    <div>
                        {currentItems.map((user) => (
                           <User key={user.id} user={user}/>
                        ))}
                    </div>
                ) : (
                    <div>Пациентов нет</div>
                )}
            </>
        )}
    </div>
}

export default Users;