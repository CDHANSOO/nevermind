import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
import TPO from './Pages/Tpo';
import Footer from '@components/footer';
import Detail from './Pages/Detail';

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/tpo' element={<TPO onSearch={setUserInput} />} />
        <Route path='/Detail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
        <Route path='/style' element={<Style />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
