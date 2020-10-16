import React from 'react';
import  logo  from '../../../images/logos/logo.png';
const ShareNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
               <ul class="navbar-nav">
               <li>
                    <a  class="navbar-brand"  href="/home">
                        <img style={{ width:"150px"}} src={logo} alt=""/>
                    </a>
                </li>
                <li style={{fontWeight:"600"}}>
                    Order

                </li>
               </ul>
            </nav>
        </div>
    );
};

export default ShareNav;