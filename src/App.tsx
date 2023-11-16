import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/stylePage/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
import Tpo from './pages/Tpo';


const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/tpo' element={<Tpo />} />
        <Route path='/style' element={<Style />} />
      </Routes>
    </div>
  )
}

export default App
