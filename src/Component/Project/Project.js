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
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Sunglasses Shop</h4>
                             <p>React-Mongobd</p>
                                <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={sun}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Sunglasses Shop</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://heuristic-ritchie-9e9940.netlify.app/`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/sunglasses-shop`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
                                     <a href={`https://github.com/saidul-islam-max/sunglasses-shop-server-code`}><button type="button" className="btn btn-primary mx-2">Server code</button></a>
                                     
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Football Player</h4>
                             <p>Html-Css Responsive</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={foot}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Football Player</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://saidul-islam-max.github.io/football-responsive/index.html`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/football-responsive`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
                                     
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Dental Care</h4>
                             <p>React-Router</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={dental}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Dental Care</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://github.com/saidul-islam-max/Dental-care-site`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/football-responsive`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Simple Travel Agency</h4>
                             <p>React-Router-Firebase-authentication</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={travel}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Travel Agency</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://github.com/saidul-islam-max/Dental-care-site`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/football-responsive`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Book Archive</h4>
                             <p>Rest-Api</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={book}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Book Archive</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://github.com/saidul-islam-max/Dental-care-site`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/football-responsive`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
                                     </div>
                                 
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 col-sm-12 p-3 ">
                         <div className="border p-2 shadow-lg">
                             <h4 className=" ">Organic Food</h4>
                             <p>Html-Css</p>
                             <div className="project-hover">
                                    <div className="proPhoto">
                                    <img src={food}alt="somthing wrong" className=" " width="100%"></img>
                                    </div>
                                
                                 <div className="projectDetail">
                                     <div>
                                     <h1 className="">Food Related</h1>
                                     <p>Well-qualified Software developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. </p>
                                     <a href={`https://github.com/saidul-islam-max/Dental-care-site`} ><button type="button" className="btn btn-primary mx-2">Site Link</button></a>
                                     <a href={`https://github.com/saidul-islam-max/football-responsive`}><button type="button" className="btn btn-primary mx-2">clint Code</button></a>
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