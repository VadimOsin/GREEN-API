import React, {useState} from 'react';
import './main.css'
import Message from "../message/message";

const Main = () => {
    const [message, setMessage] = useState([
        { type: 'me', message: "fgvsg" },
        { type: 'you', message: "fgvsg" },
        { type: 'me', message: "fgvsg" },
        { type: 'me', message: "fgvsg" },
        { type: 'me', message: "fgvsg" },
        { type: 'you', message: "fgvsg" },
        { type: 'me', message: "fgvsg" }
    ]);
    return (
        <div className="main">
            {
                message.map((i, index) => (
                    <Message key={index} type={i.type} message={i.message} />
                ))
            }
        </div>
    );
};

export default Main;