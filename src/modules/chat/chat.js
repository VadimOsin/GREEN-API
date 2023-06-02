import React from 'react';
import HeaderChat from "./components/header/headerChat";
import './chat.css'
import Footer from "./components/footer/footer";

const Chat = () => {
    return (
        <div className="chat">
            <HeaderChat/>
            <Footer/>
        </div>
    );
};

export default Chat;