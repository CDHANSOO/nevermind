import React, { useState } from 'react';
import './App.css';
import TPO from './Pages/Tpo';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Detail from './Pages/Detail';
import Main from './Pages/Main';

function App() {
    const [userInput, setUserInput] = useState('');
    

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/TPO" element={<TPO onSearch={setUserInput} />} />
                <Route path='/Detail' element={<Detail userInput={userInput} setUserInput={setUserInput} />} />
            </Routes>
        </div>
    );
}

export default App;
