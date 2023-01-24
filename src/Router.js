import React, { useContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AuthContex from './context/AuthContext';


import Customer from './user/Customer';
import Home from './user/Home';
import Login from './user/Login';
import Logout from './user/Logout';
import Register from './user/Register';

const Router = () => {
const {loggedIn} = useContext(AuthContex);
  return (
   <BrowserRouter > 
   <Navbar /> 
      <Routes>
        <Route path="/" element={< Home/>}/>
        {
          loggedIn === false && 
          <> 
            <Route path="/register" element={< Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </>
        }

        {
          loggedIn === true && 
          <>
              <Route path="/customer" element={<Customer/>}/>       
              <Route path="/logout" element={<Logout/>}/>
              
          </>
        }
      
      </Routes>
    </BrowserRouter>
  )
}

export default Router;