import React, { useContext } from 'react';
import ServiceData from './ServiceData'
import ServiceInfo from './ServiceInfo';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';


const Services = () => {
    let history=useHistory();
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
    const handleSelect = () => {
       history.push(`/order/`)
    }

    return (
        <div>
            <div style={{ marginTop: "100px" }}>
                <h2 style={{ textAlign: "center", fontWeight: "600" }}>Provide awesome <span style={{ color: "#7AB259" }}>services</span></h2>
            </div>
            <div className='service'>
                {
                    ServiceData.map(data =>

                        <ServiceInfo
                            handleSelect={handleSelect}
                            data={data}></ServiceInfo>)
                }
            </div>
        </div>
    );
};

export default Services;