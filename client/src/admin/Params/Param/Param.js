import React, {useEffect, useState} from "react";
import styles from "./Param.module.css"
import {Link, useLocation, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "../../../axios";

const Param = () => {
    const { id } = useParams();
    const [param,setParam] = useState([])
    const [loadParamData,setLoadParamData] = useState(true)
    const navigate = useLocation()
    function getParamData() {
        axios.get(`/api/get_param/get_param_admin/${id}`).then(res => setParam(res.data.data)).finally(() => setLoadParamData(false))
    }

    console.log(param)
    useEffect(() => {
        getParamData()
    }, []);

    if (loadParamData) {
        return <div>Loading...</div>
    }
    return(
        <div>
            {/*<nav aria-label="breadcrumb">*/}
            {/*    <ol className="breadcrumb">*/}
            {/*        <li className="breadcrumb-item"><Link to="/param">Параметры</Link></li>*/}
            {/*        <li className="breadcrumb-item active " aria-current="page"></li>*/}
            {/*    </ol>*/}
            {/*</nav>*/}
            {/*<div>*/}
            {/*    <Link to="">Добавить новое значение</Link>*/}
            {/*</div>*/}
            {param.values_param.map(elem => (
                <div className={styles.param_info}>{elem.name}</div>
            ))}
        </div>
    );
}

export default Param;