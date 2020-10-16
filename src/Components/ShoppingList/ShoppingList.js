import React, { useState } from 'react';
import Bar from '../ShareComponents/Bar/Bar';
import './ShoppingList.css';
import ShareNav from '../ShareComponents/ShareNav/ShareNav';
import { useEffect } from 'react';
import ServiceList from './ServiceList';
const ShoppingList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4200/serviceList`)
            .then(res => res.json())
            .then(data => setList(data));
    }, [])
    return (
        <div>
            <ShareNav></ShareNav>
            <div className="row">
                <div className="col-2">
                    <Bar></Bar>
                </div>
                <div className="col-10 shoppingList">
                    <div className="row">
                        {
                            list.length>0?
                            list.map(list=> <ServiceList list={list}></ServiceList>): <p>Loading...</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;