import './App.css';
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import AddUser from "./components/AddUser/AddUser";
import {Route, Routes, useNavigate} from "react-router-dom";
import Param from "./components/Param/Param";
import Profile from "./components/Profile/Prodile";
import Users from "./components/Users/Users";
import GenerateDoc from "./components/GenerateDoc/generateDoc";
import Auth from "./components/Auth/Auth";
import Main from "./admin/Main/Main";
import UserDetails from "./components/Users/UserDetails/UserDetails";
import axios from "./axios";

function App() {
    const [auth, setAuth] = useState(true);
    const [loading, setLoading] = useState(true); // Добавлено состояние загрузки
    const navigate = useNavigate();

    // const checkAuth = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         if (token) {
    //             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //         }
    //         const response = await axios.get('/api/auth/check');
    //         return response.data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    //
    // useEffect(() => {
    //     checkAuth()
    //         .then(res => {
    //             console.log(res);
    //             setAuth(true);
    //         })
    //         .catch(error => {
    //             setAuth(false); // Установить состояние аутентификации
    //         })
    // }, []);

    return (
        <div className="app">
            <div className="main-block">
                {auth ? (
                    <>
                        <Header />
                        <div className="container">
                            <main className="main">
                                <Routes>
                                    <Route path="/" element={<AddUser />} />
                                    <Route path="/param" element={<Param />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/users" element={<Users />} />
                                    <Route path="/generate_doc" element={<GenerateDoc />} />
                                    <Route path="/users/:id" element={<UserDetails />} />
                                    <Route path="/admin" element={<Main />} /> {/* Перемещено перед маршрутом "/" */}
                                    <Route path="*" element={<div>Not Found</div>} />
                                </Routes>
                            </main>
                        </div>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<Auth />} />
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default App;
