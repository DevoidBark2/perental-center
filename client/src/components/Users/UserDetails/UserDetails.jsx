import React, {useEffect, useState} from "react";
import styles from "./UserDetails.module.css";
import {Link, useParams} from "react-router-dom";
import axios from "../../../axios";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from "react-select";
function UserDetails () {

    const { id } = useParams();
    const [loadUserData, setLoadUserData] = useState(true)
    const [user, setUser] = useState(null);
    const [activeInputs, setActiveInputs] = useState(true);


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



    const [antibiotiki,setAntibiotiki] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [kd, setKd] = useState('');
    const [sur_name, setSurName] = useState('');
    const [isBsjChecked, setIsBsjChecked] = useState(false);
    const [audioscrinningChecked, setaAdioscrinningChecked] = useState(false);
    const [fkuChecked, setFkuChecked] = useState(false);
    const [sosPriPostChecked, setSosPriPostChecked] = useState(false);
    const [perefKateterChecked, setPerefKateterChecked] = useState(false);
    const [liniaChecked, setLiniaChecked] = useState(false);
    const [aminovenChecked, setAminovenChecked] = useState(false);
    const [lipofundinChecked, setLipofundinChecked] = useState(false);
    const [grudVskarChecked, setGrudVskarChecked] = useState(false);
    const [smechVskarChecked, setSmechVskarChecked] = useState(false);
    const [isskusVskarChecked, setIsskusVskarChecked] = useState(false);


    const [userAntibiotiki, setUserAntibiotiki] = useState([]);
    const [userImmunoglob, setUserImmunoglob] = useState([]);
    const [userDiseases, setUserDiseases] = useState([]);
    const [vipisanValue, setVipisanValue] = useState([]);
    const [postupilValue, setPostupilValue] = useState([]);
    const [perevodValue, setPerevodValue] = useState([]);
    const [subUserDiseases, setSubUserDiseases] = useState([]);
    const [userPropiska, setUserPropiska] = useState([]);
    const [userVosrPriPostp, setUserVosrPriPostp] = useState([]);
    const [userMassPriRog, setUserMassPriRog] = useState([]);
    const [userSrokGist, setUserSrokGist] = useState([]);
    const [userBmpValue, setUserBmpValue] = useState([]);
    const [changeData, setChangeData] = useState(false);
    function getUserData() {
        axios.get(`/users/${id}`).then(res => setUser(res.data.data)).finally(() => setLoadUserData(false));
    }
    useEffect(() => {
        getUserData()
    }, [id]);

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name);
            setLastName(user.last_name)
            setKd(user.k_d)
            setSurName(user.sur_name)
            setIsBsjChecked(user.bsj === 'Да');
            setaAdioscrinningChecked(user.audioscrinning === 'Да');
            setFkuChecked(user.fku === 'Да');
            setSosPriPostChecked(user.sosPriPost === 'Тяжелое')
            setPerefKateterChecked(user.perefKateter === 'Да')
            setLiniaChecked(user.linia === 'Да')
            setAminovenChecked(user.aminoven === 'Да')
            setLipofundinChecked(user.lipofundin === 'Да')
            setGrudVskarChecked(user.grudVskar === 'Да')
            setSmechVskarChecked(user.smechVskar === 'Да')
            setIsskusVskarChecked(user.isskusVskar === 'Да')

            setUserAntibiotiki(user.antibiotiki);
            setUserImmunoglob(user.immunoglobulin)
            setVipisanValue(user.vipisan);
            setPerevodValue(user.perevod);
            setPostupilValue(user.postupil);
            setUserDiseases(user.main_disease);
            setSubUserDiseases(user.sub_disease);
            setUserPropiska(user.propiska);

            setUserVosrPriPostp(user.vos_pri_post);
            setUserMassPriRog(user.mass_pri_rog);
            setUserSrokGist(user.srok_gist)
            setUserBmpValue(user.bmp)
        }
    }, [user]);
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

    const handleChangeUserData = async () =>{

        try {
            const response = await axios.put(`/users/${user.id}`, JSON.stringify({
                k_d: kd,
                first_name: firstName,
                sur_name: sur_name,
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
                immunoglobulin:userImmunoglob,
                antibiotiki:userAntibiotiki,
                bmp:userBmpValue,
                propiska: userPropiska,
                vosrPriPost: userVosrPriPostp,
                massPriRog : userMassPriRog,
                srokGist: userSrokGist,
                main_diseases:userDiseases,
                sub_diseases:subUserDiseases

            }), {
                headers: { 'Content-Type': 'application/json' }
            });
            // if (!response.ok) {
            //     alert(response)
            // }
            setActiveInputs(true)
            setChangeData(false)
            getUserData();
            alert(response.data);
        } catch (error) {
            console.error('Error while adding user: ', error);
            setActiveInputs(true)
            alert('An error occurred while trying to add the user.(update)');
        }
    }

    if (loadUserData) {
        return <div>Loading...</div>
    }

    const getVipsianValue = () =>{
        return vipisan.find(c => c.value === vipisanValue)
    }
    const onChangeVipisanValue = (newValue) =>{
        setVipisanValue(newValue.value)
        setChangeData(true)
    }

    const getPustupilValue = () =>{
        return postupil.find(c => c.value === postupilValue)
    }
    const onChangePostupilValue = (newValue) =>{
        setPostupilValue(newValue.value)
        setChangeData(true)
    }
    const getPerevodValue = () =>{
        return perevod.find(c => c.value === perevodValue)
    }
    const onChangePerevodValue = (newValue) =>{
        setPerevodValue(newValue.value)
        setChangeData(true)
    }
    const getAntibiotikvalue = () =>{
        // фильтруем опции в соответствии с выбранными значениями в userAntibiotiki
        return antibiotiki.filter(option => userAntibiotiki.indexOf(option.value) >= 0);
    }

    const getImmunoglobValue = () =>{
        return immunoglobulins.filter(option => userImmunoglob.indexOf(option.value) >= 0)
    }
    const onChangeImmunoglobValue = (newValue) =>{
        setUserImmunoglob(newValue.map(v => v.value))
        setChangeData(true)
    }

    const onChangeAntibiotikValue = (newValue) => {
        // сохраняем новые значения в состоянии userAntibiotik
        setUserAntibiotiki(newValue.map(v => v.value));
        setChangeData(true)
    }
    const getSubDiseasesvalue = () =>{
        return diseases.filter(option => subUserDiseases.indexOf(option.value) >= 0);
    }
    const onChangeSubDiseasesValue = (newValue) =>{
        setSubUserDiseases(newValue.map(v => v.value))
        setChangeData(true)
    }
    const getDiseasesValue = () =>{
        return diseases.find(c => c.value === userDiseases)
    }
    const onChangeDiseasesValue = (newValue) =>{
        setUserDiseases(newValue.value)
        setChangeData(true)
    }


    const getPropiskaValue = () =>{
        return propiska.find(c => c.value === userPropiska)
    }
    const onChangePropiskaValue = (newValue) =>{
        setUserPropiska(newValue.value)
        setChangeData(true)
    }

    const getVosrPriPostupValue = () =>{
        return vosrPriPost.find(c => c.value === userVosrPriPostp)
    }
    const onChangeVosrPriPostupValue = (newValue) =>{
        setUserVosrPriPostp(newValue.value)
        setChangeData(true)
    }
    const getMassPriRogValue = () =>{
        return massPriRogd.find(c => c.value === userMassPriRog)
    }
    const onChangeMassPriRogValue = (newValue) =>{
        setUserMassPriRog(newValue.value)
        setChangeData(true)
    }
    const getSrokGistValue = () =>{
        return srokGist.find(c => c.value === userSrokGist)
    }
    const onChangeSrokGistValue = (newValue) =>{
        setUserSrokGist(newValue.value)
        setChangeData(true)
    }
    const getBmpValue = () =>{
        return bmp.find(c => c.value === userBmpValue)
    }
    const onChangeBmpValue = (newValue) =>{
        setUserBmpValue(newValue.value)
        setChangeData(true)
    }
    const changeKd = (event) =>{
        setKd(event.target.value)
        setChangeData(true)
    }
    const changeFirstName = (event) =>{
        setFirstName(event.target.value)
        setChangeData(true)
    }
    const changeLastName = (event) =>{
        setLastName(event.target.value)
        setChangeData(true)
    }
    const changeSurName = (event) =>{
        setSurName(event.target.value)
        setChangeData(true)
    }
    const changeBsj = (event) =>{
        setIsBsjChecked(event.target.checked)
        setChangeData(true)
    }
    const changeAdioscrinning = (event) =>{
        setaAdioscrinningChecked(event.target.checked)
        setChangeData(true)
    }
    const changeFku = (event) =>{
        setFkuChecked(event.target.checked)
        setChangeData(true)
    }
    const changeSosPriPost = (event) =>{
        setSosPriPostChecked(event.target.checked)
        setChangeData(true)
    }
    const changePerefKateter = (event) =>{
        setPerefKateterChecked(event.target.checked)
        setChangeData(true)
    }
    const changeLinia = (event) =>{
        setLiniaChecked(event.target.checked)
        setChangeData(true)
    }
    const changeAminoven = (event) =>{
        setAminovenChecked(event.target.checked)
        setChangeData(true)
    }
    const changeLipofundin = (event) =>{
        setLipofundinChecked(event.target.checked)
        setChangeData(true)
    }
    const changeGrudVskar = (event) =>{
        setGrudVskarChecked(event.target.checked)
        setChangeData(true)
    }
    const changeSmechVskar = (event) =>{
        setSmechVskarChecked(event.target.checked)
        setChangeData(true)
    }
    const changeIsskusVskar = (event) =>{
        setIsskusVskarChecked(event.target.checked)
        setChangeData(true)
    }

    return (
        <div className={styles.user_details_block}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/users">Пациенты</Link></li>
                    <li className="breadcrumb-item active " aria-current="page">{user?.last_name} {user?.first_name} {user?.sur_name}</li>
                </ol>
            </nav>
            <div>
                <div className={styles.block_top_btn}>
                    {changeData ?  <Button className="btn btn-success" onClick={() => handleChangeUserData()}>Сохранить пациента</Button> : ""}
                    <Button className="btn btn-danger">Удалить пациента</Button>
                    <Button className="btn btn-warning" onClick={() => setActiveInputs(!activeInputs)}>Изменить пациента</Button>
                </div>
                <div className={`row ${styles.top_block}`}>
                    <div className={`col-md-4 ${styles.contact_block}`}>
                        <h3 className={styles.block_title}>Контактная информация</h3>
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="k_d">К.Д.</label>
                        <InputGroup>
                            <Form.Control
                                placeholder="к/д..."
                                aria-label="k/d"
                                id="k_d"
                                disabled={activeInputs}
                                aria-describedby="basic-addon1"
                                value={kd}
                                onChange={changeKd}
                            />
                        </InputGroup>
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="first_name">Имя</label>
                        <InputGroup>
                            <Form.Control
                                placeholder="Имя.."
                                id="first_name"
                                aria-label="firstname"
                                disabled={activeInputs}
                                aria-describedby="basic-addon1"
                                value={firstName}
                                onChange={changeFirstName}
                            />
                        </InputGroup>
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="last_name">Фамилия</label>
                        <InputGroup>
                            <Form.Control
                                placeholder="Фамилия..."
                                id="last_name"
                                aria-label="lastname"
                                disabled={activeInputs}
                                aria-describedby="basic-addon1"
                                value={lastName}
                                onChange={changeLastName}
                            />
                        </InputGroup>
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="sur_name">Отчество</label>
                        <InputGroup>
                            <Form.Control
                                placeholder="Отчество.."
                                id="sur_name"
                                disabled={activeInputs}
                                aria-label="surname"
                                aria-describedby="basic-addon1"
                                value={sur_name}
                                onChange={changeSurName}
                            />
                        </InputGroup>
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="vipisan">Выписан домой</label>
                        <Select
                            id="vipisan"
                            options={vipisan}
                            value={getVipsianValue()}
                            onChange={onChangeVipisanValue}
                            required={true}
                            isDisabled={activeInputs}
                        />
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="postupil">Откуда поступил</label>
                        <Select
                            options={postupil}
                            id="postupil"
                            placeholder="Откуда поступил..."
                            value={getPustupilValue()}
                            onChange={onChangePostupilValue}
                            required={true}
                            isDisabled={activeInputs}
                        />
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="perevod">Переведен в ОРИТН</label>
                        <Select
                            options={perevod}
                            id="perevod"
                            placeholder="Переведен в ОРИТН..."
                            value={getPerevodValue()}
                            onChange={onChangePerevodValue}
                            required={true}
                            isDisabled={activeInputs}
                        />
                        <label style={{fontSize:"18px",fontWeight:"700"}} htmlFor="propiska">Прописка</label>
                        <Select isDisabled={activeInputs} options={propiska} placeholder="Прописка..." value={getPropiskaValue()} onChange={onChangePropiskaValue} required={true}/>

                    </div>
                    <div className={`col-md-8`}>
                        <h3 className={styles.block_title}>Диагноз</h3>
                        <label htmlFor="">Основное заболевание</label>
                        <Select isDisabled={activeInputs} options={diseases} placeholder="Основное заболевание..." value={getDiseasesValue()} onChange={onChangeDiseasesValue} required={true}/>
                        <br/>
                        <label htmlFor="">Сопуствующие заболевания</label>
                        <Select isDisabled={activeInputs} isMulti={true} options={diseases} placeholder="Сопуствующие заболевания..." value={getSubDiseasesvalue()} onChange={onChangeSubDiseasesValue} required={true}/>
                        <div className="row display-flex justify-content-center mt-4 g-3">
                            <label htmlFor="">Антибиотики</label>
                            <Select
                                className="col-md-12"
                                name="antibiotikis"
                                isMulti={true}
                                options={antibiotiki}
                                placeholder="Антибиотики..."
                                value={getAntibiotikvalue()}
                                onChange={onChangeAntibiotikValue}
                                required={true}
                                isDisabled={activeInputs}
                            />
                            <label htmlFor="immunoglob">Иммуноглобулины</label>
                            <Select
                                className="col-md-12"
                                name="immunoglob"
                                isMulti={true}
                                options={antibiotiki}
                                placeholder="Иммуноглобулины..."
                                value={getImmunoglobValue()}
                                onChange={onChangeImmunoglobValue}
                                required={true}
                                isDisabled={activeInputs}
                            />
                            <label htmlFor="propiska">Возраст при поступлении</label>
                            <Select className="col-md-12" isDisabled={activeInputs} options={vosrPriPost} placeholder="Возраст при поступлении..." value={getVosrPriPostupValue()} onChange={onChangeVosrPriPostupValue} required={true}/>
                            <label htmlFor="propiska">Масса при рождении</label>
                            <Select className="col-md-12" isDisabled={activeInputs} options={massPriRogd} placeholder="Масса при рождении..." value={getMassPriRogValue()} onChange={onChangeMassPriRogValue} required={true}/>
                            <label htmlFor="propiska">Срок гистации</label>
                            <Select className="col-md-12" isDisabled={activeInputs} options={srokGist} placeholder="Срок гистации..." value={getSrokGistValue()} onChange={onChangeSrokGistValue} required={true}/>
                            <label htmlFor="propiska">ВМП</label>
                            <Select
                                className="col-md-12"
                                name="bmp"
                                options={bmp}
                                placeholder="БМП..."
                                value={getBmpValue()}
                                onChange={onChangeBmpValue}
                                required={true}
                                isDisabled={activeInputs}
                            />
                        </div>
                    </div>

                </div>
                <div className={`col-md-12`}>
                    <h3 className={styles.block_title}>Препараты</h3>
                    <div className={styles.first_row}>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="bsj" onChange={changeBsj} checked={isBsjChecked}/>
                            <label className="form-check-label" htmlFor="bsj">БЦЖ</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="audioscrinning" onChange={changeAdioscrinning} checked={audioscrinningChecked}/>
                            <label className="form-check-label" htmlFor="audioscrinning">Аудиоскриннинг</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="fku" onChange={changeFku} checked={fkuChecked}/>
                            <label className="form-check-label" htmlFor="fku">ФКУ</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="sost_pri_postup" onChange={changeSosPriPost} checked={sosPriPostChecked}/>
                            <label className="form-check-label" htmlFor="sost_pri_postup">Состояние при поступлении</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="peref_kateter" onChange={changePerefKateter} checked={perefKateterChecked}/>
                            <label className="form-check-label" htmlFor="peref_kateter">Переферический катетер</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="linia" onChange={changeLinia} checked={liniaChecked}/>
                            <label className="form-check-label" htmlFor="linia">Линия</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="aminoven" onChange={changeAminoven} checked={aminovenChecked}/>
                            <label className="form-check-label" htmlFor="aminoven">Аминовен</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="lipofundin" onChange={changeLipofundin} checked={lipofundinChecked}/>
                            <label className="form-check-label" htmlFor="lipofundin">Липофундин</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="grud_vskar" onChange={changeGrudVskar} checked={grudVskarChecked}/>
                            <label className="form-check-label" htmlFor="grud_vskar">Грудное вскармливание</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="smech_vskar" onChange={changeSmechVskar} checked={smechVskarChecked}/>
                            <label className="form-check-label" htmlFor="smech_vskar">Смешанное вскармливание</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" disabled={activeInputs} type="checkbox" role="switch" id="isskus_vskar" onChange={changeIsskusVskar} checked={isskusVskarChecked}/>
                            <label className="form-check-label" htmlFor="isskus_vskar">Исскуственное вскармливание</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;