import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './css/index.css';
import Container from "./components/Container";
import {employees} from "./data/employees"

localStorage.setItem("employees", JSON.stringify(employees));




ReactDOM.render(
    <BrowserRouter>
        <Container />
    </BrowserRouter>,
    document.getElementById('root'));


