import './App.css';
import NavBar from './components/NavBar/index';
import {BrowserRouter as Router} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/index';
import ItemCount from "./components/ItemCount/index";
import Footer from './components/Footer/index'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
