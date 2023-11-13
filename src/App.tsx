import React from 'react';
import "./App.css";
// import Main from "./Page/Main";
import TPO from "./Page/TPO";
import Header from "./components/Header";
// import Body from "./components/Body";
// import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} >
        </Route>
      </Routes>
    </div>
       <Header />
       {/* 20231113 최선화 - 정은우 -> 깃 허브 테스트 */}
     {/* <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/TPO" element={<TPO/>}/>
      </Routes> */}
      <TPO/>
    </>
  );
}

export default App;
