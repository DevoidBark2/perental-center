import React, {useEffect, useState} from "react";
import styles from "./User.module.css";
import axios from "../../axios";
import User from "./User/User";

function Users (){
    const [users,setUsers] = useState([]);
    const [loadUsersData,setloadUsersData] = useState(true)
    useEffect(() => {
        axios.get('/users').then(res => setUsers(res.data.data)).finally(() => setloadUsersData(false))
    },[])


    return <div>
        <h2>Список пациентов</h2>
        {loadUsersData ? (
            <div>Loading...</div>
        ) : (
            <>
                {users && users.length ? (
                    <div>
                        {users.map((user) => (
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