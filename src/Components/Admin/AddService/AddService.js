import React, { useState } from 'react';
import ShareNav from '../../ShareComponents/ShareNav/ShareNav';
import Bar from '../../ShareComponents/Bar/Bar';

const AddService = () => {
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
    const handleAdd = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        fetch('https://frozen-scrubland-17176.herokuapp.com/addService', {
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
            <div className="row">
                <div className="col-2">
                    <Bar></Bar>
                </div>
                <div className="col-10 shoppingList">
                    <div className="row" style={{ width: "800px", background: "#fff", marginTop: "50px", marginLeft: "20px", height: "400px" }}>
                        <div className="col-md-8" >
                            <form onSubmit={handleAdd} class="form-group" style={{ marginTop: "30px" }}>

                                <input onBlur={handleBlur} name="name" type="text" class="form-control" placeholder="Enter Title" />

                                <br />

                                <textarea onBlur={handleBlur} name="description" class="form-control" placeholder="Description" cols="50" rows="5"></textarea>
                                <div className="col-md-4" style={{ marginTop: "40px" }}>
                                    <input onChange={handleFileChange} type="file" name="upload" id="" />
                                </div>
                                <div style={{ width: "100px",marginTop: "80px", marginLeft: "700px" }}>
                                    <button type="submit" className="btn btn-success"> Submit</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddService;