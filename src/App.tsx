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
// import Footer from './components/Footer';
import ContentDetail from 'pages/ContentDetail';


const App: React.FC = () => {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/contentdetail' element={<ContentDetail />} />
        <Route path='/style' element={<Style />} />
        <Route path='/tpo' element={<Tpo />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
