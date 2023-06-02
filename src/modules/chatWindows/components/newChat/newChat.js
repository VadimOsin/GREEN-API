import React, {useContext, useState} from 'react';
import './newChat.css'
import Input from "../input/input";
import {sendMessage} from "../../axios/message";
import {UserContext} from "../../../auth/components/contex/userContex";

const NewChat = ({setNewChatModal, setListChatInfo, listChatInfo}) => {
    const [number, setNumber] = useState('')
    const user = useContext(UserContext)
    const onClickBtnSend = async () => {
        setListChatInfo([...listChatInfo, number])
        let obj = {
            "chatId": `${number}@c.us`,
            "message": "."
        }
        try {
            await sendMessage(user, obj);

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