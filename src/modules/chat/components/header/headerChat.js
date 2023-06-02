import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../../../../utils/img/avatar.webp";
import './headerChat.css'

const HeaderChat = () => {
    return (
        <Navbar className="header headerChat">
            <Container>
                <Image src={`${avatar}`} roundedCircle width={30} height={30}/>
                <div className="header__list__svg">
                    <span data-testid="search-alt" data-icon="search-alt" className="header__svg"><svg
                        viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                        version="1.1" x="0px" y="0px" ><path fill="currentColor"
                                                                                              d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg></span>

                    <span data-testid="menu" data-icon="menu" className="header__svg">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1"
             x="0px" y="0px">
            <path fill="currentColor"
                  d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
        </svg>
    </span>
                </div>

            </Container>
        </Navbar>
    );
};

export default HeaderChat;