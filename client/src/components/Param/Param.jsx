import React, {useEffect,useState} from "react";
import styles from "./Param.module.css";
import axios from "../../axios";
import User from "../Users/User/User";
function Param () {
    const [vipisan,setVipisan] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
       axios.get("/api/get_param").then(res => setVipisan(res.data.data)).finally(() => setLoading(false))
    },[])
    console.log(vipisan)
    return (
     <>
         <div>
             {loading ? (
                 <div>Loading...</div>
             ) : (
                 <>
                     <div className="row">
                         {vipisan.map(el => (
                             <div className={`col-md-4 `+ styles.param_block}>
                                 <h4>{el.label}</h4>
                                 {
                                     el.label === "Препараты" ? el.value.map(l => (
                                         <p>{l.label}: Да - {l.value} Нет - {el.count - l.value}</p>
                                     )) : el.value.map(l => (
                                         <p>{l.label} - {l.value} {l.k_d_sum ? `К/Д: ${l.k_d_sum}` : ""}</p>
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