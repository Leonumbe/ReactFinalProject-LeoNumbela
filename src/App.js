//css
import './App.css';
//router
import {BrowserRouter as Router} from "react-router-dom";
//componentes
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer/index';
import ItemCount from "./components/ItemCount/index";
import Footer from './components/Footer/index'
//toastify
import {ToastContainer} from 'react-toastify';
//Boostrap
import * as bootstrap from 'bootstrap';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as Popper from "@popperjs/core"
//booostrap css
import 'bootstrap/dist/css/bootstrap.min.css';


const headTittle = {
  title:"Nuestros Productos",
  subtitle:"Inicializando proyecto Nro3-portfolio personal"
};

function App() {
  return (
    <div className="Body">
      <Router>
        <NavBar/>
        <ItemListContainer greeting = "Nuestros Productos"/>
        <ItemCount minStock={1} maxStock={5}/>
        <h1 className='mainTittle'>{headTittle.subtitle}</h1>
        <Footer/>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
