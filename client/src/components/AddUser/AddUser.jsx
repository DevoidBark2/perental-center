import React, {useEffect, useState} from "react";
import styles from "./AddUser.module.css";
import Select from "react-select";
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";
import axios from "../../axios";
import Button from "react-bootstrap/Button";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddUser () {
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

    const [kd,setKd] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [surname, setSurName] = useState('');
    const [antibiotikValue, setAntibiotikValue] = useState('');
    const [immunoglobValue, setImmunoglobValue] = useState('');
    const [subDiseasesValue, setSubDiseasesValue] = useState('');

    const [isBsjChecked, setIsBsjChecked] = useState(false);
    const [audioscrinningChecked,setAudioscrinningChecked] = useState(false)
    const [fkuChecked,setFkuChecked] = useState(false)
    const [sosPriPostChecked,setSosPriPostChecked] = useState(false)
    const [perefKateterChecked,setPerefKateterChecked] = useState(false)
    const [liniaChecked,setLiniaChecked] = useState(false)
    const [aminovenChecked,setAminovenChecked] = useState(false)
    const [lipofundinChecked,setLipofundinChecked] = useState(false)
    const [grudVskarChecked,setGrudVskarChecked] = useState(false)
    const [smechVskarChecked,setSmechVskarChecked] = useState(false)
    const [isskusVskarChecked,setIsskusVskarChecked] = useState(false)

    const [vipisanValue, setVipisanValue] = useState("");
    const [postupilValue, setPostupilValue] = useState("");
    const [perevodValue, setPerevodValue] = useState("");
    const [bmpValue, setBmpValue] = useState("");
    const [propiskaValue, setPropiskaValue] = useState('');
    const [vosrPriPostupValue, setVosrPriPostupValue] = useState('');
    const [massPriRogValue, setMassPriRogValue] = useState('');
    const [srokGistValue, setSrokGistValue] = useState('');
    const [diseasesValue, setDiseasesValue] = useState("");


    useEffect(() => {
        axios.get('api/get_data')
            .then(res => {
                const data = res.data;
                //console.log(data)
                setAntibiotiki(data[0].value);
                setPerevod(data[1].value);
                setPostupil(data[2].value);
                setVipisan(data[3].value);
                setBmp(data[4].value);
                setImmunoglobulins(data[5].value);
                setPropiska(data[6].value);
                setVosrPriPostp(data[7].value);
                setMassPriRogd(data[8].value);
                setSrokGist(data[9].value);
                setDiseases(data[10].value);
            })
            .catch(err => console.error(err));
        console.log(propiska)
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/users', JSON.stringify({
                k_d: kd,
                first_name: firstName,
                sur_name: surname,
                last_name:lastName,
                vipisan:vipisanValue,
                postupil:postupilValue,
                perevod:perevodValue,
                bsj:isBsjChecked ? 'Да' : 'Нет',
                audioscrinning: audioscrinningChecked ? 'Да' : 'Нет',
                fku : fkuChecked ? 'Да' : 'Нет',
                sosPriPost: sosPriPostChecked ? 'Тяжелое' : 'Среднее',
                perefKateter : perefKateterChecked ? 'Да' : 'Нет',
                linia: liniaChecked ? 'Да' : 'Нет',
                aminoven : aminovenChecked ? 'Да' : 'Нет',
                lipofundin : lipofundinChecked ? 'Да' : 'Нет',
                grudVskar : grudVskarChecked ? 'Да' : 'Нет',
                smechVskar : smechVskarChecked ? 'Да' : 'Нет',
                isskusVskar : isskusVskarChecked ? 'Да' : 'Нет',
                immunoglobulin:immunoglobValue,
                antibiotiki:antibiotikValue,
                bmp:bmpValue,
                propiska: propiskaValue,
                vosrPriPost: vosrPriPostupValue,
                massPriRog : massPriRogValue,
                srokGist: srokGistValue,
                main_diseases:diseasesValue,
                sub_diseases:subDiseasesValue

            }), {
                headers: { 'Content-Type': 'application/json' }
            });
            setKd('')
            setFirstName('')
            setLastName('')
            setSurName('')
            setVipisanValue("")
            setPostupilValue("")
            setPerevodValue("")
            setIsBsjChecked(false)
            setAudioscrinningChecked(false)
            setFkuChecked(false)
            setSosPriPostChecked(false)
            setPerefKateterChecked(false)
            setLiniaChecked(false)
            setAminovenChecked(false)
            setLipofundinChecked(false)
            setGrudVskarChecked(false)
            setSmechVskarChecked(false)
            setIsskusVskarChecked(false)
            setImmunoglobValue('')
            setAntibiotikValue('')
            setBmpValue("")
            setPropiskaValue('')
            setVosrPriPostupValue('')
            setMassPriRogValue('')
            setSrokGistValue('')
            setDiseasesValue("")
            setSubDiseasesValue('')
            console.log(vipisanValue)
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error('Error while adding user: ', error);
            toast.error('An error occurred while trying to add the user.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const getVipsianValue = () =>{
        return vipisan.find(c => c.value === vipisanValue)
    }
    const onChangeVipisanValue = (newValue) =>{
        setVipisanValue(newValue.value)
    }
    const getPustupilValue = () =>{
        return postupil.find(c => c.value === postupilValue)
    }
    const onChangePostupilValue = (newValue) =>{
        setPostupilValue(newValue.value)
    }
    const getPerevodValue = () =>{
        return postupil.find(c => c.value === perevodValue)
    }
    const onChangePerevodValue = (newValue) =>{
        setPerevodValue(newValue.value)
    }

    const getAntibiotikvalue = () =>{
        return antibiotiki.filter(option => antibiotikValue.indexOf(option.value) >= 0);
    }
    const onChangeAntibiotikValue = (newValue) =>{
        setAntibiotikValue(newValue.map(v => v.value))
    }

    const getImmunoglobValue = () =>{
        return immunoglobulins.filter(option => immunoglobValue.indexOf(option.value) >= 0)
    }
    const onChangeImmunoglobValue = (newValue) =>{
        setImmunoglobValue(newValue.map(v => v.value))
    }

    const getBmpValue = () =>{
        return bmp.find(c => c.value === bmpValue)
    }
    const onChangeBmpValue = (newValue) =>{
        setBmpValue(newValue.value)
    }

    const getPropiskaValue = () =>{
        return propiska.find(c => c.value === propiskaValue)
    }
    const onChangePropiskaValue = (newValue) =>{
        setPropiskaValue(newValue.value)
    }

    const getVosrPriPostupValue = () =>{
        return vosrPriPost.find(c => c.value === vosrPriPostupValue)
    }
    const onChangeVosrPriPostupValue = (newValue) =>{
        setVosrPriPostupValue(newValue.value)
    }
    const getMassPriRogValue = () =>{
        return massPriRogd.find(c => c.value === massPriRogValue)
    }
    const onChangeMassPriRogValue = (newValue) =>{
        setMassPriRogValue(newValue.value)
    }
    const getSrokGistValue = () =>{
        return srokGist.find(c => c.value === srokGistValue)
    }
    const onChangeSrokGistValue = (newValue) =>{
        setSrokGistValue(newValue.value)
    }
    const getDiseasesValue = () =>{
        return diseases.find(c => c.value === diseasesValue)
    }
    const onChangeDiseasesValue = (newValue) =>{
        setDiseasesValue(newValue.value)
    }
    const getSubDiseasesvalue = () =>{
        return diseases.filter(option => subDiseasesValue.indexOf(option.value) >= 0);
    }
    const onChangeSubDiseasesValue = (newValue) =>{
        setSubDiseasesValue(newValue.map(v => v.value))
    }

    return (
        <>
            <ToastContainer />
            <div className={styles.add_user_block}>
                <form onSubmit={handleSubmit} className={`row ${styles.form_block}`}>
                    <div className={`row ${styles.top_block}`}>
                        <div className={`col-md-4 ${styles.contact_block}`}>
                            <h3>Контактная информация</h3>
                            <InputGroup>
                                <Form.Control
                                    placeholder="к/д..."
                                    aria-label="k/d"
                                    aria-describedby="basic-addon1"
                                    value={kd}
                                    onChange={(event) => setKd(event.target.value)}
                                    required={true}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Имя.."
                                    aria-label="firstname"
                                    aria-describedby="basic-addon1"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    required={true}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Фамилия..."
                                    aria-label="lastname"
                                    aria-describedby="basic-addon1"
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                    required={true}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Отчество.."
                                    aria-label="surname"
                                    aria-describedby="basic-addon1"
                                    value={surname}
                                    onChange={(event) => setSurName(event.target.value)}
                                    required={true}
                                />
                            </InputGroup>
                            <Select
                                options={vipisan}
                                placeholder="Выписан домой..."
                                value={getVipsianValue()}
                                onChange={onChangeVipisanValue}
                                required={true}
                            />
                            <Select
                                options={postupil}
                                placeholder="Откуда поступил..."
                                value={getPustupilValue()}
                                onChange={onChangePostupilValue}
                                required={true}
                            />
                            <Select
                                options={perevod}
                                placeholder="Переведен в ОРИТН..."
                                value={getPerevodValue()}
                                onChange={onChangePerevodValue}
                                required={true}
                            />
                        </div>
                        <div className={`col-md-8 ${styles.prep_block}`}>
                            <h3>Препараты</h3>
                            <div className={styles.rows}>
                                <div className={styles.first_row} >
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="bsj" onChange={(event) => setIsBsjChecked(event.target.checked)} checked={isBsjChecked}/>
                                        <label className="form-check-label" htmlFor="bsj">БЦЖ</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="audioscrinning" onChange={(event) => setAudioscrinningChecked(event.target.checked)} checked={audioscrinningChecked}/>
                                        <label className="form-check-label" htmlFor="audioscrinning">Аудиоскриннинг</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="fku" onChange={(event) => setFkuChecked(event.target.checked)} checked={fkuChecked}/>
                                        <label className="form-check-label" htmlFor="fku">ФКУ</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="sost_pri_postup" onChange={(event) => setSosPriPostChecked(event.target.checked)} checked={sosPriPostChecked}/>
                                        <label className="form-check-label" htmlFor="sost_pri_postup">Состояние при поступлении</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="peref_kateter" onChange={(event) => setPerefKateterChecked(event.target.checked)} checked={perefKateterChecked}/>
                                        <label className="form-check-label" htmlFor="peref_kateter">Переферический катетер</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="linia" onChange={(event) => setLiniaChecked(event.target.checked)} checked={liniaChecked}/>
                                        <label className="form-check-label" htmlFor="linia">Линия</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="aminoven" onChange={(event) => setAminovenChecked(event.target.checked)} checked={aminovenChecked}/>
                                        <label className="form-check-label" htmlFor="aminoven">Аминовен</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="lipofundin" onChange={(event) => setLipofundinChecked(event.target.checked)} checked={lipofundinChecked}/>
                                        <label className="form-check-label" htmlFor="lipofundin">Липофундин</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="grud_vskar" onChange={(event) => setGrudVskarChecked(event.target.checked)} checked={grudVskarChecked}/>
                                        <label className="form-check-label" htmlFor="grud_vskar">Грудное вскармливание</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="smech_vskar" onChange={(event) => setSmechVskarChecked(event.target.checked)} checked={smechVskarChecked}/>
                                        <label className="form-check-label" htmlFor="smech_vskar">Смешанное вскармливание</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="isskus_vskar" onChange={(event) => setIsskusVskarChecked(event.target.checked)} checked={isskusVskarChecked}/>
                                        <label className="form-check-label" htmlFor="isskus_vskar">Исскуственное вскармливание</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row display-flex justify-content-center mt-4 g-3">
                                <Select
                                    className="col-md-6 col-sm-12"
                                    name="immunoglobulins"
                                    isMulti={true}
                                    options={immunoglobulins}
                                    placeholder="Иммуноглобулины..."
                                    value={getImmunoglobValue()}
                                    onChange={onChangeImmunoglobValue}
                                    required={true}
                                />
                                <Select
                                    className="col-md-6 col-sm-12"
                                    name="antibiotikis"
                                    isMulti={true}
                                    options={antibiotiki}
                                    placeholder="Антибиотики..."
                                    value={getAntibiotikvalue()}
                                    onChange={onChangeAntibiotikValue}
                                    required={true}
                                />
                                <Select
                                    className="col-md-6 col-sm-12"
                                    name="bmp"
                                    options={bmp}
                                    placeholder="БМП..."
                                    value={getBmpValue()}
                                    onChange={onChangeBmpValue}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`col-md-12 ${styles.sub_informations}`}>
                        <h3>Дополнительная информация</h3>
                        <div className="row">
                            <Select className="col-md-3 col-sm-6" options={propiska} placeholder="Прописка..." value={getPropiskaValue()} onChange={onChangePropiskaValue} required={true}/>
                            <Select className="col-md-3 col-sm-6" options={vosrPriPost} placeholder="Возраст при поступлении..." value={getVosrPriPostupValue()} onChange={onChangeVosrPriPostupValue} required={true}/>
                            <Select className="col-md-3 col-sm-6" options={massPriRogd} placeholder="Масса при рождении..." value={getMassPriRogValue()} onChange={onChangeMassPriRogValue} required={true}/>
                            <Select className="col-md-3 col-sm-6" options={srokGist} placeholder="Срок гистации..." value={getSrokGistValue()} onChange={onChangeSrokGistValue} required={true}/>
                        </div>
                        <br/>
                        <Select options={diseases} placeholder="Основное заболевание..." value={getDiseasesValue()} onChange={onChangeDiseasesValue} required={true}/>
                        <br/>
                        <Select isMulti={true} options={diseases} placeholder="Сопуствующие заболевания..." value={getSubDiseasesvalue()} onChange={onChangeSubDiseasesValue} required={true}/>
                    </div>
                    <Button className={`col-md-3 ${styles.submit_btn}`} type="submit" bsstyle="primary">Добавить</Button>
                </form>
            </div>
        </>
    );
}

export default AddUser;