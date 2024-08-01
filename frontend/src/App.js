import React from 'react'
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
        <Route path='admin' element={<Admin/>}/>
        <Route path='insert' element={<Insert/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    <Footer/>
  
   </>
  )
}

export default App