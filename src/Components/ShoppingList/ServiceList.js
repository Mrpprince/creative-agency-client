import React from 'react';

const ServiceList = ({ list }) => {
   
    return (
        
            <div style={{boxShadow:"5px 5px 5px #fff",padding:"20px"}} className="col-md-4">
                <img className="img-fluid" style={{ height: '100px' ,width:"300px"}} src={`data:image/png;base64,${list.image.img}`} />
                <h4>{list.projectName}</h4>
                <p style={{}}>{list.projectDetails}</p>
            </div> 
           
       
    );
};

export default ServiceList;