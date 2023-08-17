import React, {useEffect,useState} from "react";
import styles from "./Param.module.css";
import axios from "../../axios";
import User from "../Users/User/User";
function Param () {
    const [params,setParams] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
       axios.get("/api/get_param").then(res => setParams(res.data.data)).finally(() => setLoading(false))
    },[])

    //console.log(params)

    return (
     <>
         <div>
             {loading ? (
                 <div>Loading...</div>
             ) : (
                 <>
                     <h1>Параметры</h1>
                     <div className={styles.params_list}>
                         {params.map((el,index) => (
                             <div className={styles.param_block}>
                                 <h4>{el.label}</h4>
                                 <hr/>
                                 {
                                     el.label === "Препараты" ? el.value.map(l => (
                                         <p><span style={{fontWeight:"bold"}}>{l.label}</span>: <span style={{fontWeight:"bold"}}>Да</span> - <span style={{color:"brown",fontWeight:"bold"}}>{l.value}</span> <span style={{fontWeight:"bold"}}>Нет</span> - <span style={{color:"brown",fontWeight:"bold"}}>{el.count - l.value}</span></p>
                                     )) : el.value.map(l => (
                                         <p><span style={{fontWeight:"bold"}}>{l.label}</span> - <span style={{color:"brown",fontWeight:"bold"}}>{l.value}</span> {l.k_d_sum ? `К/Д: ${l.k_d_sum}` : ""}</p>
                                     ))
                                 }
                             </div>
                         ))}
                     </div>
                 </>
             )}
         </div>
     </>
    );
}

export default Param;