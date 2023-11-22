import React,{useState} from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
<<<<<<< HEAD
import Home from './Pages/Home';
import Content from './Pages/Content';
import Style from './Pages/Style';
import Tpo from './Pages/Tpo';
import Footer from './Pages/Footer';
import Detail from './Pages/Detail';
import Sign from './Pages/Sign';
import SignUp from './components/SignUp';
import ContentDetail from 'Pages/ContentDetail';
=======
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';
import Tpo from './pages/Tpo';
// import Footer from '@components/footer';
import Detail from './pages/Detail';
import Sign from './pages/Sign';
import SignUp from './components/SignUp';
import ContentDetail from 'pages/ContentDetail';
// import Footer from '@components/footer';
import MyPage from './pages/MyPage';

>>>>>>> 3a561ab2d45c6b4d2bd19d08d401d6b9df0cd302

const App: React.FC = () => {
    const [userInput, setUserInput] = useState('');
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/contentdetail' element={<ContentDetail />} />
        <Route path='/tpo' element={<Tpo onSearch={setUserInput} />} />
        <Route path='/Detail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
        <Route path='/style' element={<Style />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
