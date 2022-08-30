//css
import './App.css';
//router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Provider
import { CartContextProvider } from './context/cartContext';
//componentes
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Footer from './components/footer/footer.jsx'
import UserForm from './components/userForm/userForm.jsx';
import CartView from './components/cartView/cartView.jsx';
//toastify
import {ToastContainer} from 'react-toastify';
//firebase
import firestoreDB from "../src/services/firebase";




const headTitle = {
  title:"Ours Products ",
  subtitle1:"Selections",
  subtitle2:"Contact Us",
};
const Error = {
  title:"404 Mistake",
};

function App() {
  //console.log(firestoreDB)
  return (
    <div className="Body">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
            <Route path='/category/:category' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer greeting = {headTitle.subtitle1} />}></Route>
            <Route path='/contacUs' element={<UserForm/>}></Route>
            <Route path='/cart' element={<CartView/>}></Route>
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
