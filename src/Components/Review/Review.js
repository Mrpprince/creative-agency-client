import React, { useContext, useState } from 'react';
import ShareNav from '../ShareComponents/ShareNav/ShareNav';
import Bar from '../ShareComponents/Bar/Bar';
import { UserContext } from '../../App';

const Review = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    console.log(isLoggedIn);
    const [comment,SetComment]=useState({});
    const handleBlur=(e)=>{
        const newUser = { ...comment };
        newUser[e.target.name] = [e.target.value];
         newUser .photo=isLoggedIn.photo;
        

        SetComment(newUser);
    }
    const handleComment=(e)=>{
        
        fetch(`https://frozen-scrubland-17176.herokuapp.com/comments`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(comment)
        })
        e.preventDefault();
    }

       return( 
       <div>
        <ShareNav></ShareNav>
        <div class="row">
            <div className="col-md-2">
                <Bar></Bar>
            </div>
            <div className="col-md-10 order">
                <div className="row">
                    <div className="col-md-6">
                        <form  onSubmit={handleComment} style={{marginTop:"50px",marginLeft:"40px"}} >
                           <div className="form-group">
                          
                                    
                                        <input type="text" onBlur={handleBlur} name="name" class="form-control" placeholder="Your name" />
                                        <br/>   
                                        <input type="text" onBlur={handleBlur} name="Company's name'" class="form-control" placeholder="Company's name Design" />
                                        <br/>
                                        <textarea onBlur={handleBlur} name="" id="" placeholder="Description" className="form-control" cols="50" rows="5"></textarea>
                                        <br/>
                                         <button  className="ctn" type="submit">Submit</button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
   
};

export default Review;