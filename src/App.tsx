import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
import Tpo from './pages/Tpo';
import Sign from './pages/Sign';
import SignUp from './components/SignUp';


const App: React.FC = () => {
  return (
    <div className='relative'>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/style' element={<Style />} />
        <Route path='/tpo' element={<Tpo />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
