import React from 'react'
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout'
import Home from './Home'
import Festivesale from './Festivesale'
import Content from './Content';
import Footer from './Footer';
import Registration from './Registration';
import Login from './Login';
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
        <Route path='registration' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    <Footer/>
  
   </>
  )
}

export default App