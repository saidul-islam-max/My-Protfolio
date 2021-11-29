import logo from './logo.svg';
import './App.css';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import Bannar from './Component/NavigationBar/Bannar/Bannar';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Exprience from './Component/Exprience/Exprience';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className=" ">
     <NavigationBar></NavigationBar>
     <Bannar></Bannar>
    <About></About>
    <Service></Service>
     <Project></Project>
     <Contact></Contact>
    </div>
  );
}

export default App;
