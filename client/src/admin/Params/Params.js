import React, {useEffect, useState} from "react";
import styles from "./Params.module.css"
import axios from "../../axios";
import {Link, Route, Routes} from "react-router-dom";
import ParamMain from "./ParamMain/ParamMain";

const Params = () => {
    return(
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<ParamMain/>}/>
                    <Route path="addnew" element={<div>new param</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Params;