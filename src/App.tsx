import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
import Tpo from './pages/Tpo';
import Footer from '@components/Footer';
import MyPage from 'pages/MyPage';



const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <MyPage/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/tpo' element={<Tpo />} />
        <Route path='/style' element={<Style />} />
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default App
