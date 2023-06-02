import React, {useContext, useEffect, useState} from 'react';
import HeaderChat from "./components/header/headerChat";
import './chat.css'
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import {deleteNotification, receiveNotification} from "../chatWindows/axios/message";
import {UserContext} from "../auth/components/contex/userContex";

const Chat = () => {
    const [message, setMessage] = useState([]);
    const user = useContext(UserContext)
    useEffect(() => {
        setTimeout(() => {
            receiveNotification(user).then(
                res => {
                    if (res !== null) {
                        if (res?.body?.typeWebhook !== "outgoingMessageStatus") {
                            setMessage([...message, {
                                type: "you",
                                message: res?.body?.messageData?.textMessageData?.textMessage
                            }]);
                        }
                        deleteNotification(user, res?.receiptId).then()
                    }
                }
            )
        }, 5000)
    })
    return (
        <div className="chat">
            <HeaderChat/>
            <Main message={message}/>
            <Footer setAddNewMessage={setMessage} addNewMessage={message}/>
        </div>
    );
};

export default Chat;