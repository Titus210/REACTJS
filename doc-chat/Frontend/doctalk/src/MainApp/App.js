import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css 
import "./App.css";

// // Pages Import
import DocSliders from '../pages/DocSliders/DocSliders';
import AccountChoose from '../pages/LoginSignUp/AccountChoose';
import Main from '../pages/MainPage/Main'
import LoginPage from '../pages/LoginSignUp/Login/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="doctalk/docslide" element={<DocSliders/>} />
        <Route path="doctalk/account" element={<AccountChoose/>} />
        <Route path="/doctalk" element={<Main/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





