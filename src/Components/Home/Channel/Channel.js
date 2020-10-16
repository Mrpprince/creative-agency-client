import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import  './Channel.css';
const Channel = () => {
    return (
        <div style={{marginTop:"50px"}}>
            <nav class="navbar navbar-expand-lg navbar-light ml-5">
                <ul class="navbar-nav container ">
                    <li>
                        <a href="#">
                            <img src={slack} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={google} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={uber} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={netflix} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={airbnb} alt="" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Channel;