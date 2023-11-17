import React,{useState} from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Content from './pages/Content';
import Style from './pages/Style';

import Tpo from './Pages/Tpo';
import Footer from '@components/footer';
import Detail from './Pages/Detail';
import Sign from './pages/Sign';
import SignUp from './components/SignUp';

const App: React.FC = () => {
    const [userInput, setUserInput] = useState('');
  return (
    <div className='relative'>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />

        <Route path='/tpo' element={<Tpo onSearch={setUserInput} />} />
        <Route path='/tpodtail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
        <Route path='/style' element={<Style />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
