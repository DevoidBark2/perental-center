import React from "react";
import {Link} from "react-router-dom";
import styles from "./AdminHeader.module.css"

const AdminHeader = () => {
    return(
        <div className={styles.admin_header}>
            <Link to={'/admin'} className={styles.admin_link}>Админ-панель</Link>

        </div>

    )
}

export default AdminHeader