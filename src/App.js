import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './Component/NavigationBar/NavigationBar';
import Bannar from './Component/NavigationBar/Bannar/Bannar';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Exprience from './Component/Exprience/Exprience';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className=" ">
     {/* <NavigationBar></NavigationBar>
     <Bannar></Bannar>
    <About></About>
    <Service></Service>
     <Project></Project>
     <Contact></Contact>
     <Footer></Footer> */}

     <Router>
     <NavigationBar></NavigationBar>
     <Switch>
         
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
                  <Home />
            </Route>
      </Switch>
      <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
