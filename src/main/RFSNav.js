import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const RFSNav = () => 
    <Navbar fluid collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
            <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
    </Navbar>

export default RFSNav;