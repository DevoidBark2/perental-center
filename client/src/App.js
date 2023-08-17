import './App.css';
import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import AddUser from "./components/AddUser/AddUser";
import {Link, Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Param from "./components/Param/Param";
import Profile from "./components/Profile/Prodile";
import Users from "./components/Users/Users";
import GenerateDoc from "./components/GenerateDoc/generateDoc";
import Auth from "./components/Auth/Auth";
import Main from "./admin/Main/Main";
import UserDetails from "./components/Users/UserDetails/UserDetails";
import axios from "./axios";
import AdminHeader from "./admin/AdminHeader/AdminHeader";

function App() {
    const [auth, setAuth] = useState(false);
    const [role,setRole] = useState('')
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            //console.log(token)
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('/api/auth/check');
                //console.log(response.data)
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    const location = useLocation();
    //console.log(auth)
    useEffect(() => {
        checkAuth()
            .then(res => {
                setRole(res.role)
                setAuth(true);
            })
            .catch(error => {
                setAuth(false);
            })
    }, [location.pathname]);

    function logout() {
        localStorage.removeItem("token")
        setAuth(false);
        navigate("/login")
    }

    return (
        <div className="app">
            <div className="main-block">
                {auth ? (
                    <>
                        {!location.pathname.includes("/admin") && role === "ADMIN" && <AdminHeader/>}
                        {!location.pathname.includes("/admin") && role === "ADMIN" && <Header/>}
                        <div className={!location.pathname.includes("/admin") && role === "ADMIN" ? "container" : ""}>
                            <main className="main">
                                {!location.pathname.includes("/admin") && <div onClick={() => logout()}>Выйти</div>}
                                <Routes>

                                    <Route path="/" element={<AddUser />} />
                                    <Route path="/param" element={<Param />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/users" element={<Users />} />
                                    <Route path="/generate_doc" element={<GenerateDoc />} />
                                    <Route path="/users/:id" element={<UserDetails />} />

                                    {/*{role === "ADMIN" &&  <Route path="/admin" element={<Main />} />}*/}
                                    {/*<Route path="/admin" element={<Main />} />*/}
                                    {role === "ADMIN" &&  <Route path="/admin/*" element={<Main />} />}
                                    <Route path="/login" element={<Auth />} />
                                </Routes>
                            </main>
                        </div>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<Auth />} />
                        {/*{!auth ? <Route path="*" element={<Navigate to="/login"/>} /> : ""}*/}
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default App;
