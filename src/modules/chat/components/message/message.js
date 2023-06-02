import React from 'react';
import './message.css'

const Message = ({type, message}) => {
    return (
        <div className={`${type}__message`}>
            <div className={`message ${type}__color__message`}>
                {message}
            </div>
        </div>
    );
};

export default Message;