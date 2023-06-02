import React from 'react';
import './input.css'
import {Button, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Input = ({placeholder, filter, setFilter,onClickBtn}) => {
    return (
        <InputGroup className="inputForm">
            <Form.Control
                placeholder={placeholder}
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="inputForm__input"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <Button variant="success" onClick={onClickBtn}>
                Поиск
            </Button>
            <span data-testid="filter" data-icon="filter" className="">
    <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="inputForm__filter"
         version="1.1"
         x="0px" y="0px" enableBackground="new 0 0 24 24">
        <path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
    </svg>
</span>

        </InputGroup>
    );
};

export default Input;