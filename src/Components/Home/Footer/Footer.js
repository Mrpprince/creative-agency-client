import React from 'react';

const Footer = () => {
    return (
        
           <div style={{background:"#FBD062"}}>
                <div  className="row " style={{padding:"60px" } }>
                
                <div className="col-md-4">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-7">
                    <form >
                         <input className="form-control" placeholder="Email" type="email" />
                        
                      <br/>
                       
                            <input  placeholder="Your name/Company's name" className="form-control" type="text" />
                        <br/>
                       <textarea placeholder="Your Massage"  className="form-control" name="" id="" cols="30" rows="10"></textarea>
                       <br/>
                       <button className="ctn">Send</button>
                    </form>
                </div>
           
        
    </div>
           </div>
    );
};

export default Footer;