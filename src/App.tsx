import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GlobalNav } from './components/Navigations/GlobalNav/container';
import { Home } from './components/Pages/Home/container';
import { Login } from './components/Pages/Login/container';
import { Logout } from './components/Pages/Logout/container';

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <Router>
            <GlobalNav isSignedIn={isSignedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsSignedIn={setIsSignedIn} />} />
                <Route path="/logout" element={<Logout setIsSignedIn={setIsSignedIn} />} />
                <Route path="/*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
