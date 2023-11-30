import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './Pages/Home';
import Content from './Pages/Content';
import Style from './Pages/Style';
import Tpo from './Pages/Tpo';
// import Footer from '@components/footer';
import Detail from './Pages/Detail';
import Sign from './Pages/Sign';
import SignUp from './components/SignUp';
import ContentDetail from './Pages/ContentDetail';
import MyPage from './Pages/MyPage';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <RecoilRoot>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/contentdetail' element={<ContentDetail result={''} />} />
        <Route path='/tpo' element={<Tpo onSearch={setUserInput} />} />
        <Route path='/Detail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
        <Route path='/style' element={<Style />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
      {/* <Footer/> */}
    </RecoilRoot>
  )
}

export default App;
