import React from 'react';
import './App.css';
import TPO from './Pages/TPO';
import Main from './Pages/Main';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/TPO" element={<TPO />} />
            </Routes>
        </div>
    );
}

export default App;
