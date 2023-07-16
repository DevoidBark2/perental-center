import React, {useState} from "react";
import styles from "./Auth.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";
import {useNavigate} from "react-router-dom";
function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('api/auth/login', { email, password })
            .then((response) => {
                localStorage.setItem('token', response.data.token); // Сохранение токена в localStorage
                navigate('/')
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return <div className={styles.auth_block}>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email адрес</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    </div>
}

export default Auth;