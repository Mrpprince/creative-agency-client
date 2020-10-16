import React from 'react';
import './Bar.css';
import { useHistory } from 'react-router-dom';
const Bar = () => {
    const history = useHistory();

    const handleOrder = () => {
        history.push('/order')
    }
    const handleShopping = () => {
        history.push('/serviceList')
    }
    const handleReview=()=>{
        history.push('/review')
    }
    const handleServiceList=()=>{
        history.push('/adminServiceList')
    }
    const handleAddService=()=>{
        history.push('/addService')
    }
    const handleMakeAdmin=()=>{
        history.push('/makeAdmin')
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <span onClick={handleOrder}>Order</span>
                    </li>
                    <li>
                        <span onClick={handleShopping}>Service List</span>
                    </li>
                    <li>
                        <span  onClick={handleReview}>Review</span>
                    </li>
                    <li>
                        <span onClick={handleServiceList}>Service List</span>
                    </li>
                    <li>
                        <span onClick={handleAddService}>AddService</span>
                    </li>
                    <li>
                        <span onClick={handleMakeAdmin}>MakeAdmin</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Bar;