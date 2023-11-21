import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
<<<<<<< HEAD

import Tpo from './pages/Tpo';
import Footer from '@components/Footer';
=======
import Tpo from './pages/Tpo';
// import Footer from '@components/footer';
>>>>>>> 4cd13806d0221a1b710a3e7518a4ffde1a68b696
import Detail from './pages/Detail';
import Sign from './pages/Sign';
import SignUp from './components/SignUp';
import ContentDetail from 'pages/ContentDetail';
<<<<<<< HEAD
import MyPage from 'pages/MyPage';
=======
// import Footer from '@components/footer';
import MyPage from './pages/MyPage';

>>>>>>> 4cd13806d0221a1b710a3e7518a4ffde1a68b696

const App: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/contentdetail' element={<ContentDetail />} />
        <Route path='/tpo' element={<Tpo onSearch={setUserInput} />} />
        <Route path='/tpodtail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
        <Route path='/style' element={<Style />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
<<<<<<< HEAD
      <Footer />
=======
      {/* <Footer/> */}
>>>>>>> 4cd13806d0221a1b710a3e7518a4ffde1a68b696
    </div>
  );
};

export default App;
