import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Bannar from '../NavigationBar/Bannar/Bannar';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Service></Service>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;