//router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Provider
import { CartContextProvider } from './context/cartContext';
//componentes
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Footer from './components/footer/footer.jsx'
import CheckOutForm from './components/checkOut/checkOutForm';
import CartView from './components/cartView/cartView.jsx';
import Home from "./pages/home.jsx"
import UserForm from './pages/userForm.jsx';
import NoFound from "./pages/error404.jsx"
//toastify
import {ToastContainer} from 'react-toastify';

const headTitle = {
  title:"Ours Products ",
};

function App() {
  return (
    <div className="Body">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
              <Route path='/category/:category' element={ <ItemListContainer greeting = {headTitle.title}/>}></Route>
              <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
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
