import React from 'react'
 import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Layout from './Layout'
import Home from './Home'
import Festivesale from './Festivesale'
import Content from './Content';
import Footer from './Footer';

import Login from './Login';
import Forgetpassword from './Forgetpassword';
import PasswordReset from './PasswordReset';
import SignUp from './SignUp';
import Admin from './Admin';
import Insert from './Insert';
import { isAuthanticated } from './utils/auth';
import Display from './Display';
import Update from './Update';
import Edit from './Edit';
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='fectivesale' element={<Festivesale/>}/>
        <Route path='content' element={<Content/>}/>      
        <Route path='login' element={<Login/>}/>
        <Route path='passwordreset' element={<Forgetpassword/>}/>
        <Route path='forgetpassword/:id/:token' element={<PasswordReset/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='admin' element={isAuthanticated()?<Admin/>:<Navigate to="/login"/>}/>
        <Route path='insert' element={isAuthanticated()?<Insert/>:<Navigate to="/login"/>}/>
        <Route path='display' element={<Display/>}/>
        <Route path='update' element={isAuthanticated()?<Update/>:<Navigate to="/login"/>}/>
        <Route path='/edit/:id' element={isAuthanticated()?<Edit/>:<Navigate to="/login"/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    <Footer/>
  
   </>
  )
}

export default App