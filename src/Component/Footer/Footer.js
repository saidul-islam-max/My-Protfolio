import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons"

const Ficon = <FontAwesomeIcon icon={faFacebook} />
const Licon = <FontAwesomeIcon icon={faLinkedin} />
const Gicon = <FontAwesomeIcon icon={faGithub} />



// const EmailAD =  <FontAwesomeIcon icon={faEnvelope} /> ;
// const Phone =  <FontAwesomeIcon icon={faBlenderPhone} /> ;

const Footer = () => {
    
  
    return (
        <div className="bg-dark p-4">
           <div className="container">
                <div className="row">
                    <div className="col-md-4 col-6 d-flex text-light fs-4 footer-icon">
                       <a href="https://www.facebook.com/saidulislamjunad.junad" >{Ficon} </a> 
                       <a href="https://github.com/saidul-islam-max">{Licon}</a>
                       <a href="https://www.linkedin.com/in/md-saidul-islam-992a1120a/">{Gicon}</a>
                    </div>
                   <div className="col-md-8 col-6">
                    <p className="text-light text-end m-0">© 2021 copyright ib-themesall right reserved</p>
                  
                    </div>
                </div>
         
                </div>
          
        </div>
    );
};

export default Footer;