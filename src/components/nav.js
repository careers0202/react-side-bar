import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from './trolley.svg'

import '../App.css';


function NavBar(props) {
    let history = useHistory();

    const handlePath = () => {

        history.push('/about')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-success font-weight-bold" href="/">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mx-1" />
                Shooping Cart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/cart">
                            <FontAwesomeIcon className="mx-1" icon={faShoppingCart} />
                            Cart({props.items.length})
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/">username</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;