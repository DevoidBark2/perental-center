import React, {useState} from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {
    const [auth,setAuth] = useState(true)

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.header_link}>Добавить пациента</Link>
            <Link to="/param" className={styles.header_link}>Параметры</Link>
            <Link to="/users" className={styles.header_link}>Список пациентов</Link>
            <Link to="generate_doc" className={styles.header_link}>Генерация документа</Link>
            {
                auth ? <Link to="/profile" className={styles.header_link}>Профиль</Link> : <div>Sign in</div>
            }
        </div>
    );
}

export default Header;