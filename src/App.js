
//router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Provider
import { CartContextProvider } from './context/cartContext';
//componentes
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Footer from './components/footer/footer.jsx'
import CheckOutForm from './components/userForm/checkOutForm';
import CartView from './components/cartView/cartView.jsx';
import Home from "./pages/home.jsx"
import UserForm from './pages/userForm.jsx';
import NoFound from "./pages/error404.jsx"
//toastify
import {ToastContainer} from 'react-toastify';
//firebase
import firestoreDB from "../src/services/firebase";
//push de apiData a firebase
//import { saveProductsToFirebase } from '../src/services/firebase';


const headTitle = {
  title:"Ours Products ",
  subtitle1:"Selections",
  subtitle2:"Contact Us",
};


function App() {
  //console.log(firestoreDB)
  return (
    <div className="Body">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
              <Route path='/category/:category' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
              <Route path="/detail/:id" element={<ItemDetailContainer greeting = {headTitle.subtitle1} />}></Route>
              <Route path='/contactUs' element={<UserForm/>}></Route>
              <Route path='/checkOut' element={<CheckOutForm/>}></Route>
              <Route path='/cart' element={<CartView/>}></Route>
              <Route path='*' element={<NoFound/>}></Route>
            </Routes>
          <Footer/>
        </CartContextProvider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
