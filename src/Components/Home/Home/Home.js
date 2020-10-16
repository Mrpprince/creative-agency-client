import React from 'react';
import Header from '../Header/Header';
import HireBody from '../HireBody/HireBody';
import Channel from '../Channel/Channel';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Work from '../Work/Work';
import Client from '../Client/Client';

const Home = () => {
    return (
        <div>
            <div style={{height: "800px", background: "#FBD062",clipPath:"polygon(0 0 ,100% 0,100% 85%,0 100%)" }}>
                <Header></Header>
                <HireBody></HireBody>

            </div>
            <Channel></Channel>
            <Services></Services>
           <Work></Work>
           <Client></Client>
           <Footer></Footer>
        </div>
    );
};

export default Home;