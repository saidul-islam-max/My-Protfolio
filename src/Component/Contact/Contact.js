import React from "react";
import './Contact.css'

const Contact = () => {
   
    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12 p-5 border shadow-lg">
                    <form>
                    <div className="mb-3 d-flex">
                        <div className="w-100 me-2">
                            <input type="text" className="form-control border-dark"  placeholder="Name"/>
                        </div>
                        <div className="w-100 ms-2">
                            <input type="email" className="form-control border-dark"  placeholder="Email"/>
                        </div>
                        
                    </div>
                    <div className="my-4">
                        <input type="text" className="form-control border-dark" placeholder="Subject" />
                    </div>
                   
                    <div class="form-floating">
                            <textarea className="form-control border-dark" placeholder="Comment" id="floatingTextarea" className="textarea-contact"></textarea>
                            

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;