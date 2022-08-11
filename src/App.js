//css
import './App.css';
//router
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
const Error = {
  title:"404 Mistake",
};

function App() {
  return (
    <div className="Body">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
          <Route path="/detail/:id" element={<ItemDetailContainer greeting = {headTitle.subtitle} itemId = {3}/>}></Route>
          <Route path='*' element={<h1 className='error'>{Error.title}</h1>}></Route>
        </Routes>
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
