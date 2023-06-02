import React, {useContext, useState} from 'react';
import './newChat.css'
import Input from "../input/input";
import {sendMessage} from "../../axios/message";
import {UserContext} from "../../../auth/components/contex/userContex";

const NewChat = ({setNewChatModal}) => {
    const [number, setNumber] = useState('')
    const user = useContext(UserContext)
    const onClickBtnSend = async () => {
        let obj = {
            "chatId": "7123456789@c.us",
            "message": "."
        }
        try {
            const newMessage = await sendMessage(user,obj);
            console.log(newMessage)

        } catch (error) {
            console.error(error);
        }
        setNewChatModal(false)
    }
    return (
        <div>
            <Input filter={number} setFilter={setNumber} placeholder="Введите номер" onClickBtn={onClickBtnSend}/>
        </div>
    );
};

export default NewChat;