import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from './layout/RouteLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Journal from './pages/Journal';
import Error from './pages/Error';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RouteLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/journal' element={<Journal/>}/>
            <Route path='/cartpage' element={<CartPage/>}/>
            <Route path='/checkoutpage' element={<CheckoutPage/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
      </>
    )
  );
  return (
    <>
     <RouterProvider  router={router}
  />
    </>
  )
}

export default App