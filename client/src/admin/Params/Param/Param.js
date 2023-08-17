import React, {useEffect, useState} from "react";
import styles from "./Param.module.css"
import {Link, useLocation, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "../../../axios";
import ModalComponent from "../../../components/UI/Modal/Modal";
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import {toast, ToastContainer} from "react-toastify";

const Param = () => {
    const { id } = useParams();
    const [param,setParam] = useState([])
    const [loadParamData,setLoadParamData] = useState(true)
    const [modal,setModal] = useState(false)
    const [name,setName] = useState("")
    const navigate = useLocation()
    function getParamData() {
        axios.get(`/api/get_param/get_param_admin/${id}`).then(res => setParam(res.data.data)).finally(() => setLoadParamData(false))
    }

    console.log(param)
    useEffect(() => {
        getParamData()
    }, []);

    const handleAddNewValueParam = async (event) => {
        event.preventDefault()
        try {
            console.log(id)
            const response = await axios.post('/api/get_param/create_new_value_param',{
                name:name,
                params_id: id
            })
            setModal(false)
            console.log(response.data.data.success)
            if(response.data.data.success){
                toast.success(response.data.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else{
                toast.error(response.data.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            getParamData()
        }catch (e){
            console.log(e)
        }
    }
    if (loadParamData) {
        return <div>Loading...</div>
    }
    console.log(param.values_param)
    return(
        <div>
            <ToastContainer/>
            <p className={styles.add_new_param} onClick={() => setModal(true)}>
                Добавить новый параметр
            </p>
            {
                param.values_param.length ? param.values_param.map(elem => (
                <div className={styles.param_info}>{elem.name}</div>
                ))
                    :
                    <p>Значения параметра отсутствуют,<span style={{color:"blue"}} onClick={() => setModal(true)}>добавьте первый.</span></p>
            }
            <ModalComponent modal={modal} setModal={setModal}>
                <h3>Добавление нового значения</h3>
                <form onSubmit={handleAddNewValueParam}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Название"
                            aria-label="Название"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required={true}
                        />
                    </InputGroup>
                    <Button className={`col-md-3 ${styles.submit_btn}`} type="submit" bsstyle="primary">Добавить</Button>
                </form>
            </ModalComponent>
        </div>
    );
}

export default Param;