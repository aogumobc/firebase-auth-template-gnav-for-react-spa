import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GlobalNav } from './components/Navigations/GlobalNav/container';
import { Home } from './components/Pages/Home/container';
import { Login } from './components/Pages/Login/container';
import { Logout } from './components/Pages/Logout/container';

function App() {
    return (
        <Router>
            <GlobalNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
