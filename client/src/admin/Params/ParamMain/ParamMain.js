import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import styles from "../Params.module.css";
import axios from "../../../axios";

const ParamMain = () => {
    const [params,setParams] = useState([])

    useEffect( () => {
        axios.get("/api/get_param/get_param_admin").then(res => setParams(res.data.data))
    },[])
    console.log(params)
    return(
        <div>
            <h2>Параметры</h2>
            <div>
                <Link to="addnew">Добавить новый параметр</Link>
            </div>
            <div>
                {
                    params.map(param => (
                        <div className={styles.param_elem}>
                            <Link to={`${param.id}`}>{param.name}</Link>
                            <p>Тип поля: {param.type_input}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ParamMain;