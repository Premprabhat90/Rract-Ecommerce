import React from "react";
import {Routes, Route} from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./home";
const Rout = ({setUserDetail, setAuth}) => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register setUserDetail ={setUserDetail} setAuth = {setAuth}/>} />
        <Route path='/login' element={<Login setUserDetail ={setUserDetail} setAuth = {setAuth} />} />
        <Route path='/' element={<Home setUserDetail ={setUserDetail} setAuth = {setAuth} />} />
      </Routes>
    </>
  );
};

export default Rout;
