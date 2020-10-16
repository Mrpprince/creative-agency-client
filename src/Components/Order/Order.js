import React, { useContext, useState } from 'react';
import Bar from '../ShareComponents/Bar/Bar';
import './Order.css';
import ShareNav from '../ShareComponents/ShareNav/ShareNav';
import { UserContext } from '../../App';

const Order = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const [info, SetInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newUser = { ...info };
        newUser[e.target.name] = [e.target.value]
        SetInfo(newUser);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSend = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('projectName', info.projectName);
        formData.append('projectDetails', info.projectDetails);
        formData.append('price', info.price);

        fetch('http://localhost:4200/uploadPhoto', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
    return (
        <div>
            <ShareNav></ShareNav>
            <div class="row">
                <div className="col-md-2">
                    <Bar></Bar>
                </div>
                <div className="col-md-10 order">
                    <div className="row">
                        <div className="col-md-4" style={{ marginTop: "40px", marginLeft: "20px" }}>
                            <form onSubmit={handleSend}>
                                <div className="form-group">
                                    <input onBlur={handleBlur} className="form-control" placeholder="name"   name="name" type="text" />
                                    <br />
                                    <input onBlur={handleBlur} className="form-control" placeholder="Email" name="email" type="email" />
                                    <br />
                                    <input onBlur={handleBlur} className="form-control" placeholder="Project name" name="projectName" type="text" />
                                    <br />
                                    <input onBlur={handleBlur} className="form-control" placeholder="Description" name="projectDetails" type="text" />
                                    <br />
                                    <input onBlur={handleBlur} placeholder="Price" className="form-control" name="price" type="text" />

                                    <div>
                                        <label For="image">Upload Image</label>
                                        <input type="file" onChange={handleFileChange} name="image" id="" />
                                    </div>
                                    <br />
                                    <button className="ctn" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;