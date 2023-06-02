import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import './login.css'
import {Button} from "react-bootstrap";
import {UserContext} from "../contex/userContex";
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    const [login, setLogin] = useState({
        idInstance: '',
        apiTokenInstance: ''
    })
    const onChange = ({target: {name, value}}) => {
        setLogin({...login, [name]: value})
    };
    const {signIn} = useContext(UserContext)

    const onClickLogin = () => {
        if (login.idInstance && login.apiTokenInstance) {
            signIn(login.idInstance, login.apiTokenInstance)
            navigate('/list-chatWindows')
        } else {
            alert("Заполните поля!")
        }
    }
    const onClickReset = () => {
        setLogin({
            idInstance: '',
            apiTokenInstance: ''
        })
    }
    return (
        <Form className="login">
            <Form.Group className="mb-3">
                <Form.Label>IdInstance</Form.Label>
                <Form.Control name="idInstance"
                              value={login.idInstance}
                              onChange={onChange} placeholder="IdInstance"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>ApiTokenInstance</Form.Label>
                <Form.Control name="apiTokenInstance"
                              value={login.apiTokenInstance}
                              onChange={onChange} placeholder="ApiTokenInstance"/>
            </Form.Group>
            <div className="login__btn__submit">
                <Button variant="danger" onClick={onClickReset} className="m-2">Очистить</Button>
                <Button variant="success" onClick={onClickLogin}>Войти</Button>
            </div>
        </Form>
    );
};

export default Login;