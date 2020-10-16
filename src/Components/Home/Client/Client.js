import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
const Client = () => {
    return (
        <div style={{ height: "400px" }}>
            <h4 style={{ textAlign: "center" }}>Clients <span style={{ color: "#7AB259" }}>Feedback</span></h4>
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-md-4 " style={{ width: "250px", border: "1px solid lightgray" }}>
                    <div className="d-flex justify-content-center">
                        <img src={customer1} className="img-fluid" alt="" />
                        <h5>Nash Patrik <br /> CEO, Manpol</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>
                <div className="col-md-4  " style={{ width: "200px", border: "1px solid lightgray", }}>
                    <div className="d-flex justify-content-center" style={{ padding: "20px" }}>
                        <img src={customer2} className="img-fluid" alt="" />
                        <h5>Miriam Barron <br /> CEO, Manpol</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>
                <div className="col-md-4 " style={{ width: "250px", border: "1px solid lightgray" }}>
                    <div className="d-flex justify-content-center">
                        <img src={customer3} className="img-fluid" alt="" />
                        <h5>Bria Malone <br /> CEO, Manpol</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>

            </div>
        </div>
    );
};

export default Client;