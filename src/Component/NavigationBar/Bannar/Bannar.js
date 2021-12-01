import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Bannar.css'
import resume from './resume-Saidul-Islam.pdf'

const Bannar = () => {
    return (
       <section id="home-bannar" className="d-flex align-items-center">
           <div className="container">
               <div className="row ">
                   
                  
                       <div className=" text-center">
                       <h1 className="bannar-text">Hi, Saidul Islam</h1>
                       <h4 className="fw-bold">Web Devoloper</h4>
                       <p className="">I design and develop services for customers of all sizes,<br/> specializing in creating stylish, modern websites, web services and online stores.</p>
                      <a href={`https://drive.google.com/file/d/1kp3HmNlZa5WZ_dlggmsP1QaDTlkTG4sm/view`}><button type="button" class="btn btn-info"><a href={resume}  download className="text-dark fw-bold">My Resume</a> </button></a> 
                      
                       </div>
                       
                   
                   
                </div>
           </div>
       </section>
    );
};

export default Bannar;