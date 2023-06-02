import React from 'react';
import './main.css'
import Message from "../message/message";

const Main = ({message}) => {
    return (
        <div className="main">
            {
                message.reverse().map((i, index) => (
                    <Message key={index} type={i.type} message={i.message} />
                ))
            }
        </div>
    );
};

export default Main;