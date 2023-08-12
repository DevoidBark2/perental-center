import React, {useContext, useEffect, useState} from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

function Header() {
    const [auth,setAuth] = useState(false)
    const [nav,setNav] = useState(false)
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(token) {
            setAuth(true)
        }
        else{
            setAuth(false)
        }
    },[])
    return (
        <div>
            <div className={nav ? [styles.header,styles.headerActive].join('') : styles.header}>

                <Link to="/" className={styles.header_link}>Добавить пациента</Link>
                <Link to="/param" className={styles.header_link}>Параметры</Link>
                <Link to="/users" className={styles.header_link}>Список пациентов</Link>
                <Link to="generate_doc" className={styles.header_link}>Генерация документа</Link>
                <Link to="/profile" className={styles.header_link}>Профиль</Link>
                {/*{auth && <Link to="/admin" className={styles.header_link}>Админ панель</Link> }*/}
            </div>
            <div onClick={() => setNav(!nav)} className={styles.mobile}>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>
        </div>
    );
}

export default Header;