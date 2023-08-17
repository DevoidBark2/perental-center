import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import styles from "../Params.module.css";
import axios from "../../../axios";
import ModalComponent from "../../../components/UI/Modal/Modal";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import {toast, ToastContainer} from "react-toastify";

const ParamMain = () => {
    const [params,setParams] = useState([])
    const [types,setTypes] = useState([])
    const [category,setCategory] = useState([])
    const [modal,setModal] = useState(false)

    const [name,setName] = useState("")
    const [typesValue,setTypesValue] = useState("")
    const [categoryValue,setCategoryValue] = useState("")
    function getParam(){
        axios.get("/api/get_param/get_param_admin").then(res => {
            setParams(res.data.data.params)
            setTypes(res.data.data.types)
            setCategory(res.data.data.category)
        })
    }
    useEffect( () => {
        getParam()
    },[])

    const getTypeValue = () =>{
        return types.find(c => c.value === typesValue)
    }
    const onChangeTypesValue = (newValue) =>{
        setTypesValue(newValue.value)
    }
    const getCategoryValue = () =>{
        return category.find(c => c.value === categoryValue)
    }
    const onChangeCategoryValue = (newValue) =>{
        setCategoryValue(newValue.value)
    }

    const handleFormParam = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/get_param/create_new_param',{
                name:name,
                type: typesValue,
                category: categoryValue
            })
            setModal(false)
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
            getParam()
        }catch (e){
            console.log(e)
        }
    }
    return(
        <div>
            <ToastContainer />
            <div className={styles.params_block}>
                <div>
                    <h2>Параметры</h2>
                    <p className={styles.add_new_param} onClick={() => setModal(true)}>
                        Добавить новый параметр
                    </p>
                    <div className={styles.params_items}>
                        {
                            params ? params.map(param => (
                                <div className={styles.param_elem} key={param.id}>
                                    {/*<Form.Check aria-label="option 1" />*/}
                                    <Link to={`${param.id}`}>{param.name}</Link>
                                    <div>
                                        <p>Тип поля: {param.type}</p>
                                        <p>Категория: {param.category_name}</p>
                                    </div>
                                </div>
                            )) : <h3>Параметров нет</h3>
                        }
                    </div>
                </div>
                <div className={styles.filters_block}>
                    <h4 className="text-center">Фильтры</h4>

                </div>
            </div>
            <ModalComponent modal={modal} setModal={setModal}>
                <h3>Добавление нового параметра</h3>
                <div className={styles.modal_form}>
                    <form onSubmit={handleFormParam}>
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
                        <Select
                            placeholder="Тип поля"
                            options={types}
                            value={getTypeValue()}
                            onChange={onChangeTypesValue}
                            required={true}
                        />
                        <Select
                            placeholder="Категория"
                            options={category}
                            value={getCategoryValue()}
                            onChange={onChangeCategoryValue}
                            required={true}
                        />
                        <Button className={`col-md-3 ${styles.submit_btn}`} type="submit" bsstyle="primary">Добавить</Button>
                    </form>
                </div>
            </ModalComponent>
        </div>
    )
}
export default ParamMain;