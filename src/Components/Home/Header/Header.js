import React from 'react';
import './Header.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="/"> <img style={{width:"150px"}} src={logo} alt=""/></a>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">
                           Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Out Team</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Contact Us</a>
                    </li>
                </ul>
              
              
             <Link to='/order'>
             <button  class="ctn">Login</button>
             </Link>
             
              
            </div>
        </nav>
    );
};

export default Header;