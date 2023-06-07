import React, {useState} from "react";
import styles from "./Auth.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";
function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       axios.post('/login',{email,password}).then(r => console.log(r))
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