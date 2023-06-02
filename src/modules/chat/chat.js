import React from 'react';
import HeaderChat from "./components/header/headerChat";
import './chat.css'
import Footer from "./components/footer/footer";
import {Modal} from "react-bootstrap";
import Main from "./components/main/main";

const Chat = () => {
    return (
        <div className="chat">
            <HeaderChat/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default Chat;