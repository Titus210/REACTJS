import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css 
import "./App.css";

// // Pages Import
import DocSliders from '../pages/DocSliders/DocSliders';
import AccountChoose from '../pages/LoginSignUp/AccountChoose';
import Main from '../pages/MainPage/Main'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/docslide" element={<DocSliders/>} />
        <Route path="/account" element={<AccountChoose/>} />
        <Route path="/Main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





