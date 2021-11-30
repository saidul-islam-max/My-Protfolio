import React from 'react';
import './Project.css'
import sun from './sun.jpg'
import foot from './Football.jpg'
import dental from './dental.jpg'
import travel from './travel.jpg'
import book from './book.jpg'
import food from './food.jpg'

const Project = () => {
    return (
        <div className=" py-5">
            <div className="container">
                <h2 className="fw-bold text-center">My Project</h2>
                <div className="row ">
                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 ">
                             <h4 className=" ">Sunglasses Shop</h4>
                             <p>React-Mongobd</p>
                                <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2">
                             <h4 className=" ">Football Player</h4>
                             <p>Html-Css Responsive</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 ">
                             <h4 className=" ">Dental Care</h4>
                             <p>React-Router</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 ">
                             <h4 className=" ">Simple Travel Agency</h4>
                             <p>React-Router-Firebase-authentication</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 ">
                             <h4 className=" ">Book Archive</h4>
                             <p>Rest-Api</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 ">
                             <h4 className=" ">Organic Food</h4>
                             <p>Html-Css</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Heading</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <button type="button" class="btn btn-primary mx-2">Large button</button>
                                     <button type="button" class="btn btn-secondary">Large button</button>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;