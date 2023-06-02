import React, {useContext, useState} from 'react';
import './listChat.css'
import Header from "./components/header/header";
import NewChat from "./components/newChat/newChat";
import Input from "./components/input/input";
import {receiveNotification} from "./axios/message";
import {UserContext} from "../auth/components/contex/userContex";
import Chat from "../chat/chat";

const ListChat = () => {
    const [newChatModal, setNewChatModal] = useState(false)
    const [filter, setFilter] = useState('')
    const user = useContext(UserContext)
    const onClickBtn = async () => {
        // try {
        //     const notificationData = await receiveNotification(user);
        //
        // } catch (error) {
        //     console.error(error);
        // }
    }
    return (
        <div className="listChat">
            <>
                {newChatModal ? <NewChat setNewChatModal={setNewChatModal}/> :
                    <div>
                        <Header setNewChatModal={setNewChatModal}/>
                        <Input filter={filter} setFilter={setFilter} placeholder="Поиск или новый чат"
                               onClickBtn={onClickBtn}/>
                    </div>}
            </>
            <Chat/>
        </div>
    );
};

export default ListChat;