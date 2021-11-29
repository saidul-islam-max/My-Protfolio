import React from 'react';
import juned from './juned.png'
import './About.css'

const About = () => {
    return (
        <div id="about" className="my-5">
           <div className="container">
               <div className="row ">
                   <div className="col-md-12 col-lg-6 about-img-border col-sm-12 col-12 px-5">
                       <img src={juned} alt="somthin wrong" className="img-fluid about-img shadow-lg bg-body"></img>
                   </div>
                   <div className="col-md-12 col-lg-6 col-sm-12 col-12 ps-5 pt-5">
                       <div className="py-5">
                           <h1 className="about-text">Saidul Islam</h1>
                           <h4 className="fw-bold">I am a professional <span className="text-info">web designer</span></h4>
                           <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                      {/* ------table--------- */}


               <div className="row">
                   <div className="col-md-6 col-6 col-6 col-lg-6 ">
                   <table class="table">
                   
                   <tbody>
                       <tr>
                       <th scope="row">Brigthday</th>
                       <td>26 feb 2002</td>
                       </tr>
                       <tr>
                       <th scope="row">Age</th>
                       <td>20+</td>
                       
                       </tr>
                       <tr>
                       <th scope="row">Nationality</th>
                       <td colspan="2">Bangladeshi</td>
                       
                       </tr>
                       <tr>
                       <th scope="row">Address</th>
                       <td colspan="2">Chhatak,Sunamgonj,Sylhet</td>
                       
                       </tr>
                   </tbody>
                   </table>
                   </div>
                   <div className="col-md-6 ">
                   <table class="table">
                   
                   <tbody>
                       <tr>
                       <th scope="row">Email</th>
                       <td>mdsaidulislamjuned@gmail.com</td>
                       </tr>
                       <tr>
                       <th scope="row">Phone</th>
                       <td>01700504635</td>
                       
                       </tr>
                       <tr>
                       
                       
                       </tr>
                   </tbody>
                   </table>
                   </div>
               </div>
               
                      {/* ------table--------- */}
                      <button type="button" class="btn btn-primary btn-lg">Large button</button>
                       </div>
                   </div>
               </div>
            </div> 
        </div>
    );
};

export default About;