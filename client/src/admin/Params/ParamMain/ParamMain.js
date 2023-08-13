import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import styles from "../Params.module.css";
import axios from "../../../axios";
import ModalComponent from "../../../components/UI/Modal/Modal";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";

const ParamMain = () => {
    const [params,setParams] = useState([])
    const [types,setTypes] = useState([])
    const [category,setCategory] = useState([])
    const [modal,setModal] = useState(false)
    const [name,setName] = useState("")

    useEffect( () => {
        axios.get("/api/get_param/get_param_admin").then(res => {
            setParams(res.data.data.params)
            setTypes(res.data.data.types)
            setCategory(res.data.data.category)
        })
    },[])
    console.log(types)
    return(
        <div>
            <h2>Параметры</h2>
            <div onClick={() => setModal(true)}>
                Добавить новый параметр
            </div>
            <div>
                {
                    params.map(param => (
                        <div className={styles.param_elem} key={param.id}>
                            <Link to={`${param.id}`}>{param.name}</Link>
                            <div>
                                <p>Тип поля: {param.type_input}</p>
                                <p>Категория: {param.category_name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ModalComponent modal={modal} setModal={setModal}>
                {/*<input type="text" placeholder="Название"/>*/}
                {/*<select name="" id="">*/}
                {/*    <option value="">select</option>*/}
                {/*    <option value="">checkbox</option>*/}
                {/*    <option value="">text</option>*/}
                {/*</select>*/}
                {/*<select name="" id="">*/}
                {/*    <option value="">Препараты</option>*/}
                {/*    <option value="">Дополнительная информация</option>*/}
                {/*    <option value="">Контактная информация</option>*/}
                {/*</select>*/}
                <form action="">
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
                        // onChange={}
                        required={true}
                    />
                    <Select
                        placeholder="Категория"
                        options={category}
                        // onChange={}
                        required={true}
                    />
                    <Button className={`col-md-3 ${styles.submit_btn}`} type="submit" bsstyle="primary">Добавить</Button>
                </form>
            </ModalComponent>
        </div>
    )
}
export default ParamMain;