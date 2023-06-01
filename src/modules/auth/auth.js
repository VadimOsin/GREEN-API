import React, {useState} from 'react';
import Login from "./components/login/login";
import {UserContext} from './components/contex/userContex'
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes/routes";

const Auth = () => {
    const [user, setUser] = useState({
        idInstance: '',
        apiTokenInstance: ''
    });
    const signIn = (idInstance, apiTokenInstance) => {
        setUser({
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance
        });
    };
    return (
        <UserContext.Provider value={{...user, signIn}}>
            <Routes>
                {routes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route path="*" element={<div><Login/></div>}/>
            </Routes>
        </UserContext.Provider>
    );
};

export default Auth;