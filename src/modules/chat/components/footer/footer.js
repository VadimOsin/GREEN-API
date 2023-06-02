import React, {useContext, useState} from 'react';
import './footer.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {sendMessage} from "../../../chatWindows/axios/message";
import {UserContext} from "../../../auth/components/contex/userContex";

const Footer = ({setAddNewMessage, addNewMessage}) => {
    const [message, setMessage] = useState('')
    const user = useContext(UserContext)
    const sendNewMessage = async () => {
        let body = {
            "chatId": "7123456789@c.us",
            "message": `${message}`
        }
        try {
            await sendMessage(user, body).then(() => {
                alert("Сообщение отправлено!")
                setMessage("")
                let mes = {
                    type: "me",
                    message: `${message}`
                }
                setAddNewMessage([...addNewMessage, mes]);
            })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <InputGroup className="footer">
            <Form.Control
                placeholder="Введите сообщение"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            < Button variant="secondary" onClick={sendNewMessage}>
                Отправить
            </Button>
        </InputGroup>

    );
};

export default Footer;