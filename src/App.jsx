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
import MyAccount from './pages/myAccount/MyAccount';
import Dashbord from './pages/myAccount/Dashbord';
import Download from './pages/myAccount/Download';
import Others from './pages/myAccount/Others';
import AccountDetails from './pages/myAccount/AccountDetails';
import Addresses from './pages/myAccount/Addresses';
import Logout from './pages/myAccount/Logout';


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
            <Route element={<MyAccount/>}>
              <Route index path='/dashbord' element={<Dashbord/>}/>
              <Route path='/download' element={<Download/>}/>
              <Route path='/others' element={<Others/>}/>
              <Route path='/accountDetails' element={<AccountDetails/>}/>
              <Route path='/addresses' element={<Addresses/>}/>
              <Route path='/logout' element={<Logout/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Route>
      </>
    )
  );
  return (
    <>
     <RouterProvider  router={router}/>
    </>
  )
}

export default App