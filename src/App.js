//css
import './App.css';
//router
import {BrowserRouter as Router} from "react-router-dom";
//componentes
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Footer from './components/Footer/index'
//toastify
import {ToastContainer} from 'react-toastify';


const headTitle = {
  title:"Ours Products ",
  subtitle:"Selections",
};

function App() {
  return (
    <div className="Body">
      <Router>
        <NavBar/>
        <ItemListContainer greeting = {headTitle.title} />
        <ItemDetailContainer greeting = {headTitle.subtitle} itemId = {3}/>
        <Footer/>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
