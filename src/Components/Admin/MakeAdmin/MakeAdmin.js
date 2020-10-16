import React from 'react';
import ShareNav from '../../ShareComponents/ShareNav/ShareNav';
import Bar from '../../ShareComponents/Bar/Bar';

const MakeAdmin = () => {
    return (
        <div>
             <ShareNav></ShareNav>
            <div className="row">
                <div className="col-2">
                    <Bar></Bar>
                </div>
                <div className="col-10 shoppingList">
                    <div className="row"  style={{ width: "800px", background: "#fff", marginTop: "50px", marginLeft: "20px", height: "200px",borderRadius:"10px" }}>
                        <div className="col-md-5"  style={{marginTop:"27px"}}>
                            <p>Email</p>
                            <input type="text" placeholder="Email" class="form-control" />
                           
                        </div>
                        <div className="col-md-2" style={{marginTop:"37px"}}>
                        <button  className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;