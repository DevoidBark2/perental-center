import React, {useContext, useState} from "react";
import styles from "./Auth.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('api/auth/login', { email, password })
            .then((response) => {
                if(response.data.success){
                    localStorage.setItem('token', response.data.token);
                    navigate('/')
                    console.log(response.data)
                }
                else{
                    setError(response.data.message)
                }
            })
    };
    return <div className={styles.auth_block}>
        <Container className="d-flex justify-content-center align-items-center w-100" style={{height: window.innerHeight - 50}}>
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
                <Container>
                    {error}
                </Container>
            </Form>
        </Container>
    </div>
}

export default Auth;