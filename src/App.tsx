import React from 'react';
import './App.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} >
        </Route>
      </Routes>
    </div>
  )
}

export default App
