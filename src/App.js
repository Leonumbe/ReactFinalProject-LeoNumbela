//css
import './App.css';
//router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Provider
import { CartContextProvider } from './context/cartContext';
//componentes
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Footer from './components/Footer/index'
import UserForm from './components/UserForm';
import Cart from './components/Cart';
//toastify
import {ToastContainer} from 'react-toastify';

const headTitle = {
  title:"Ours Products ",
  subtitle1:"Selections",
  subtitle2:"Contact Us",
};
const Error = {
  title:"404 Mistake",
};

function App() {
  return (
    <div className="Body">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
            <Route path='/category/:category' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer greeting = {headTitle.subtitle1} itemId = {3}/>}></Route>
            <Route path='/contacUs' element={<UserForm/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1 className='error'>{Error.title}</h1>}></Route>
          </Routes>
          <Footer/>
          </CartContextProvider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
