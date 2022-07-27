import './App.css';
import NavBar from './components/NavBar/index';
import {BrowserRouter as Router} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/index';
import Footer from './components/Footer/index'

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
        <h1 className='mainTittle'>{headTittle.subtitle}</h1>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
