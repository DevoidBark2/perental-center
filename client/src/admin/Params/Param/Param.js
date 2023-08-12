import React, {useEffect, useState} from "react";
import styles from "./Param.module.css"
import {useParams} from "react-router-dom";
import axios from "../../../axios";

const Param = () => {
    const { id } = useParams();
    const [param,setParam] = useState([])
    const [loadParamData,setLoadParamData] = useState(true)
    function getUserData() {
        axios.get(`/api/get_param/get_param_admin/${id}`).then(res => setParam(res.data.data)).finally(() => setLoadParamData(false))
    }

    console.log(param)
    useEffect(() => {
        getUserData()
    }, [id]);

    if (loadParamData) {
        return <div>Loading...</div>
    }
    return(
        <div>
            {param.values_param.map(elem => (
                <p>{elem.name}</p>
            ))}
        </div>
    );
}

export default Param;