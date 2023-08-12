import React from "react";
import styles from "./Main.module.css";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import AdminApp from "../AdminApp/AdminApp";
import Params from "../Params/Params";
import Param from "../Params/Param/Param";

function Main() {
    const location = useLocation()
    return (
        <div className={styles.admin_block}>
            <nav className={styles.header}>
                <img src="/images/logo.png" alt=""/>
                <Link to="" className={location.pathname === "/admin" ? styles["active-header-link"] : styles["header-link"]}>Главная</Link>
                <Link to="param"  className={location.pathname === "/admin/param" ? styles["active-header-link"] : styles["header-link"]}>Параметры</Link>
                <Link to="row"  className={location.pathname === "/admin/row" ? styles["active-header-link"] : styles["header-link"]}>Посмотреть пациентов</Link>
            </nav>
            <div className={styles.admin_content}>
                <Routes>
                    <Route path="/" element={<AdminApp/>} />
                    <Route path="param/*" element={<Params/>} />
                    <Route path="param/:id" element={<Param/>} />
                    <Route path="row" element={<div>Row</div>} />
                    {/*<Route path="/*" element={<div>Хуета</div>} />*/}
                    {/*<Route path="/addnew" element={<div>New Param</div>} />*/}
                </Routes>
            </div>
        </div>
    )
}

export default Main;