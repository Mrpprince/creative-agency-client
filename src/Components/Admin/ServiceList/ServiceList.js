import React, { useEffect, useState } from 'react';
import ShareNav from '../../ShareComponents/ShareNav/ShareNav';
import Bar from '../../ShareComponents/Bar/Bar';
import Table from './Table';

const ServiceList = () => {
    const [adminEmail, setAdminEmail] = useState([]);
    console.log(adminEmail)
    useEffect(() => {
        fetch(`https://frozen-scrubland-17176.herokuapp.com/serviceList`)
            .then(res => res.json())
            .then(data => setAdminEmail(data));
    }, [])
    return (
        <div>

            <ShareNav></ShareNav>
            <div className="row">
                <div className="col-2">
                    <Bar></Bar>
                </div>
                <div className="col-10 shoppingList">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                    {
                    adminEmail.length>0 ?
                        adminEmail.map(table=> <Table table={table}></Table>) : <p>Loading ....</p>
                    }
                        </tbody>
                        </table>
                        
                </div>
                </div>
            </div>
    );
};

export default ServiceList;