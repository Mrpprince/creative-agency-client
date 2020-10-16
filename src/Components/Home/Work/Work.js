import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png'
const Work = () => {
    return (
        <div>
            <div style={{height:"600px",background:"#111430",marginTop:"50px"}}>
            <h2 style={{color:"#fff",textAlign:"center"}}>Here are some Of <span style={{color:"#7AB259"}}> Our Works</span></h2>
            <div>
            <div className="row" style={{padding:"10px"}}>
                <div className="col-md-4">
                    <img  className="img-fluid" style={{width:"400px"}} src={carousel1} alt=""/>
                </div>
                <div className="col-md-4">
                    <img  className="img-fluid" style={{width:"400px"}} src={carousel2} alt=""/>
                </div>
                <div className="col-md-4">
                    <img  className="img-fluid" style={{width:"400px",height:"295px"}} src={carousel3} alt=""/>
                </div>
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default Work;