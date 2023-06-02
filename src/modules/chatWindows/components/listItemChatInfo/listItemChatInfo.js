import React from 'react';
import {Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../../../../utils/img/avatar.webp";

const ListItemChatInfo = ({infoNameChat}) => {
    return (
        <Navbar className="header infoNameChat__item">
            <div className="infoNameChat">
                <Image src={`${avatar}`} roundedCircle width={30} height={30}/>
                <div className="infoNameChat__text">{infoNameChat}</div>
            </div>
        </Navbar>
    );
};

export default ListItemChatInfo;