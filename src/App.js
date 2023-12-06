import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import News from './Components/News/News';
import FullNews from './Components/News/FullNews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AddNewNews from './Components/News/AddNewNews';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:id" element={<FullNews />} />
          <Route path="/news" element={<News loggedIn={loggedIn} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addnews" element={<AddNewNews />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
