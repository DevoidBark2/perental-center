import React, {useEffect, useState} from "react";
import styles from "./AddUser.module.css";
import Select from "react-select";
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";
import axios from "../../axios";

function AddUser () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [antibiotiki,setAntibiotiki] = useState([]);
    const [vipisan,setVipisan] = useState([]);
    const [postupil,setPostupil] = useState([]);
    const [perevod,setPerevod] = useState([]);
    const [bmp,setBmp] = useState([]);
    const [immunoglobulins,setImmunoglobulins] = useState([]);
    const [propiska,setPropiska] = useState([]);
    const [vosrPriPost,setVosrPriPostp] = useState([]);
    const [massPriRogd,setMassPriRogd] = useState([]);
    const [srokGist,setSrokGist] = useState([]);
    const [diseases,setDiseases] = useState([]);

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        axios.get('/get_data')
            .then(res => {
                const data = res.data;
                if (data.antibiotiki) {
                    setAntibiotiki(data.antibiotiki);
                }
                if (data.perevod) {
                    setPerevod(data.perevod);
                }
                if (data.postupil) {
                    setPostupil(data.postupil);
                }
                if (data.vipisan) {
                    setVipisan(data.vipisan);
                }
                if(data.bmp){
                    setBmp(data.bmp);
                }
                if(data.immunoglobulins){
                    setImmunoglobulins(data.immunoglobulins);
                }
                if(data.propiska){
                    setPropiska(data.propiska);
                }
                if(data.vosrt_pri_postup){
                    setVosrPriPostp(data.vosrt_pri_postup);
                }
                if(data.mass_pri_rogd){
                    setMassPriRogd(data.mass_pri_rogd);
                }
                if(data.srok_gist){
                    setSrokGist(data.srok_gist);
                }
                if(data.diseases){
                    setDiseases(data.diseases);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/', JSON.stringify({
                first_name: firstName,
                second_name: lastName
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error('Failed to add user.');
            }
            alert('User successfully added.');
        } catch (error) {
            console.error('Error while adding user: ', error);
            alert('An error occurred while trying to add the user.');
        }
    };

    console.log(isChecked);
    return (
        <div className={styles.add_user_block}>
            <form onSubmit={handleSubmit} className="row">
                <div className={`col-md-6 ${styles.contact_block}`}>
                    <h3>Контактная информация</h3>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="к/д..."
                            aria-label="k/d"
                            aria-describedby="basic-addon1"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Имя.."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Фамилия..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Отчество.."
                            aria-label="lastname"
                            aria-describedby="basic-addon1"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </InputGroup>
                    <Select options={vipisan} placeholder="Выписан домой..."/>
                    <Select options={postupil} placeholder="Откуда поступил..."/>
                    <Select options={perevod} placeholder="Переведен в ОРИТН..."/>
                </div>
                <div className="col-md-6">
                    <h3>Препараты</h3>
                    <Select name="bmp" options={bmp} placeholder="БМП..."/>
                    <Select name="antibiotikis" isMulti={true} options={antibiotiki} placeholder="Антибиотики..."/>
                    <Select name="immunoglobulins" isMulti={true} options={immunoglobulins} placeholder="Иммуноглобулины..."/>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="linia" onChange={handleCheckboxChange} checked={isChecked}/>
                        <label className="form-check-label" htmlFor="linia">Линия</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="bsj" onChange={handleCheckboxChange} checked={isChecked}/>
                        <label className="form-check-label" htmlFor="bsj">БЦЖ</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <h3>Дополнительная информация</h3>
                    <Select options={propiska} placeholder="Прописка..."/>
                    <Select options={vosrPriPost} placeholder="Возраст при поступлении..."/>
                    <Select options={massPriRogd} placeholder="Масса при рождении..."/>
                    <Select options={srokGist} placeholder="Срок гистации..."/>
                    <Select options={diseases} placeholder="Основное заболевание..."/>
                    <Select isMulti={true} options={diseases} placeholder="Сопуствующие заболевания..."/>
                </div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

export default AddUser;