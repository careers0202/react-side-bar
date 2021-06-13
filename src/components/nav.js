import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from './trolley.svg'

import '../App.css';


function NavBar() {
    let history = useHistory();

    const handlePath = () => {

        history.push('/about')
    }

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        Shooping Cart
                    </a>
            </div>
        </nav>
    )
}

export default NavBar;