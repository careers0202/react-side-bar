import React from 'react';
import { Link, useHistory  } from "react-router-dom";

import '../App.css';


function NavBar(){
    let history = useHistory();

    const handlePath  = ()=> {
        history.push('/about')
    }

    return(
        <div className="nav-bar">
            <div>App logo</div>
            <div className="d-flex justify-content-between nav-options">
                <p onClick={()=>handlePath()}>
                    About link
                    {/* <Link to="/about">About link</Link> */}
                    {/* <a href="/about">About</a> */}
                </p>
                <p> 
                    <Link to="/contact">Contact us link</Link>
                    {/* <a href="/contact">Contact us</a> */}
                </p>
            </div>
        </div>
    )
}

export default NavBar;