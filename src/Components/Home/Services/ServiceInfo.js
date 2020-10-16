import React from 'react';
import './ServiceInfo.css'
const ServiceInfo = ({ data,handleSelect }) => {
  
    return (
        <div className="child">
            <div   onClick={()=>handleSelect()} style={{ width: "300px",textAlign:"center",padding:"20px" }}>
                <img style={{ width: "200px",cursor:"pointer" }} src={data.image} alt="" />
                <p >{data.description}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;