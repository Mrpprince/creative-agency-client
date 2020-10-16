import React from 'react';
import frame from '../../../images/logos/Frame.png'
const HireBody = () => {
    return (
        <div className="container">
            <div className="row" style={{marginTop:"60px"}}>
                <div className="col-md-4">
                    <h2 style={{fontWeight:"900"}}>
                        Let’s Grow Your
                        Brand To  The <br/>
                        Next Level
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="ctn btn">Hire Us</button>
                </div>
                <div className="col-md-8">
                    <img className="img-fluid" src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HireBody;