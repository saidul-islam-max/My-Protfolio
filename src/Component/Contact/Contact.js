import React from "react";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt,faEnvelope,faBlenderPhone} from '@fortawesome/free-solid-svg-icons'
const homeLocation =  <FontAwesomeIcon icon={faMapMarkedAlt} /> ;
const EmailAD =  <FontAwesomeIcon icon={faEnvelope} /> ;
const Phone =  <FontAwesomeIcon icon={faBlenderPhone} /> ;

const Contact = () => {
   
    return (
        <div className="py-5  bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12 p-5 border shadow-lg">
                    <form  action="https://formspree.io/f/xayvwaen" method="POST">
                    <div className="mb-3 d-flex">
                        <div className="w-100 me-2">
                            <input type="text" name="name" className="form-control border-dark"  placeholder="Name"/>
                        </div>
                        <div className="w-100 ms-2">
                            <input type="email" name="_replyto" className="form-control border-dark"  placeholder="Email"/>
                        </div>
                        
                    </div>
                    <div className="my-4">
                        <input type="text" name="subject" className="form-control border-dark" placeholder="Subject" />
                    </div>
                   
                    <div class="form-floating">
                            <textarea className="form-control border-dark" name="comment" placeholder="Comment" id="floatingTextarea" className="textarea-contact"></textarea>
                    </div>
                    <button type="submit" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>

                    <div className="col-md-6 col-sm-12 col-12 pt-5 ps-5">
                        
                       <h3>Get In Touch </h3>
                       <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                        <div className="row">
                            <div className="col-md-2">
                                <h1 className="contact-icon">{homeLocation}</h1>
                            </div>
                            <div className="col-md-6 col-sm-10 p-1">
                                <p>123 Stree New York City ,United States Of America NY 750065.</p>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-2">
                                <h1 className="contact-icon">{EmailAD}</h1>
                            </div>
                            <div className="col-md-5 col-sm-8 p-1">
                                <p className="m-0">mdsidulislamjuned@gmail.com</p>
                                <p>araselahmed737@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-md-2">
                                <h1 className="contact-icon">{Phone}</h1>
                            </div>
                            <div className="col-md-5 col-sm-8 p-1">
                                <p className="m-0">01700504635</p>
                                <p>01725634588</p>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;