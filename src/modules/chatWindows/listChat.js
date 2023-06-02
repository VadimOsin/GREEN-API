import React, {useContext, useState} from 'react';
import './listChat.css'
import Header from "./components/header/header";
import NewChat from "./components/newChat/newChat";
import Input from "./components/input/input";
import {receiveNotification} from "./axios/message";
import {UserContext} from "../auth/components/contex/userContex";
import Chat from "../chat/chat";
import ListItemChatInfo from "./components/listItemChatInfo/listItemChatInfo";

const ListChat = () => {
    const [newChatModal, setNewChatModal] = useState(false)
    const [filter, setFilter] = useState('')
    const user = useContext(UserContext)
    const [listChatInfo, setListChatInfo] = useState([])
    return (
        <div className="listChat">
            <>
                {newChatModal ? <NewChat setNewChatModal={setNewChatModal} setListChatInfo={setListChatInfo}
                                         listChatInfo={listChatInfo}/> :
                    <div>
                        <Header setNewChatModal={setNewChatModal}/>
                        <Input filter={filter} setFilter={setFilter} placeholder="Поиск или новый чат"
                               onClickBtn={null}/>
                        {listChatInfo !== null ? (
                            listChatInfo?.map((listChatItem, index) => (
                                <ListItemChatInfo key={index} infoNameChat={listChatItem}/>
                            ))) : null
                        }

                    </div>}
            </>
            {
                listChatInfo.length !== 0 ? <Chat/> : <div className="chat"></div>
            }

        </div>
    )
        ;
};

export default ListChat;