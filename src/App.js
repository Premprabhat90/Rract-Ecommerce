import React, { useState } from "react";
import Rout from "./rout";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  const [userDetail, setUserDetail] = useState()
  const [auth, setAuth] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Nav auth = {auth} setAuth = {setAuth} userDetail = {userDetail}/>
        <Rout setUserDetail={setUserDetail} setAuth={setAuth} auth={auth} />
      </BrowserRouter>
    </>
  );
};

export default App;

