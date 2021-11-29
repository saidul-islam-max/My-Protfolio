import React from 'react';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined,faPencilRuler,faMailBulk,faPersonBooth,faHelicopter,faHamburger} from '@fortawesome/free-solid-svg-icons'
const LayoutDesign =  <FontAwesomeIcon icon={faRulerCombined} /> ;
const webDesign =  <FontAwesomeIcon icon={faPencilRuler} /> ;
const emailTemplate =  <FontAwesomeIcon icon={faMailBulk} /> ;
const e_CommerceSite =  <FontAwesomeIcon icon={faPersonBooth} /> ;
const travel =  <FontAwesomeIcon icon={faHelicopter} /> ;
const food =  <FontAwesomeIcon icon={faHamburger} /> ;
const Service = () => {
    return (
        <div id="service" className="py-5 bg-dark">
            <h2 className="text-center py-3 text-light fw-bold">Service</h2>
             <div className="container">
                 <div className="row">
                     <div className="col-md-4 col-sm-6 col-12 p-2 ">
                        <div className="border p-3">
                        <h1 className="text-warning border-2 p-3 service-icon">{LayoutDesign}</h1>
                         <h4 className="fw-bold text-warning">1.Layout Design</h4>
                         <h5 className="fw-bold text-light">Responsive layout design meeting clients needs.</h5>
                         <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                       
                     </div>

                     <div className="col-md-4 col-sm-6 col-12 p-2 ">
                        <div className="border p-3">
                        <h1 className="text-warning border-2 p-3 service-icon">{webDesign}</h1>
                         <h4 className="fw-bold text-warning">2. Web Design</h4>
                         <h5 className="fw-bold text-light">Responsive layout design meeting clients needs.</h5>
                         <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12 p-2 ">
                        <div className="border p-3">
                        <h1 className="text-warning border-2 p-3 service-icon">{emailTemplate}</h1>
                         <h4 className="fw-bold text-warning">3. Email Template</h4>
                         <h5 className="fw-bold text-light">Responsive layout design meeting clients needs.</h5>
                         <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                     </div>
                     
                     
                     
                     
                 </div>
             </div>
        </div>
    );
};

export default Service;