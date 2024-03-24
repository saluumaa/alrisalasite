import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import logo from '../Assets/logo_background.jpeg';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false); 
  };

  return (
    <aside>
      <nav className={isActive ? 'nav-active' : ''}>
        <section className="top-nav-wrapper">
          <div className='navbar-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='login-dark-mode'>
            <div className='dark-mode'>
              <DarkMode />
            </div>
            <div className='login-btn'>
              <Link to="/login"><button onClick={handleLinkClick} >Log in</button></Link>
            </div>
          </div>
        </section>
        <section className='navbar-wrapper'>
          <ul className='navbar-links'>
            <li onClick={()=> {setMenu('home')}}>
              <Link style={{textDecoration: 'none'}} to="/" onClick={handleLinkClick}>Home</Link> {menu === 'home' ? <hr /> : <></>}
            </li>
            <li onClick={()=> {setMenu('about')}}>
              <Link style={{textDecoration: 'none'}} to="/about" onClick={handleLinkClick}>About Us</Link> {menu === 'about' ? <hr /> : <></>}
            </li>
            <li onClick={()=> {setMenu('news')}}>
              <Link style={{textDecoration: 'none'}} to="/news" onClick={handleLinkClick}>News</Link> {menu === 'news' ? <hr /> : <></>}
            </li>
            <li onClick={()=> {setMenu('contact')}}>
              <Link style={{textDecoration: 'none'}} to="/contact" onClick={handleLinkClick}>Contact Us</Link> {menu === 'contact' ? <hr /> : <></>}
            </li>
          </ul>
        </section>
      </nav>
      <div className='hamburger' onClick={handleClick}>
        {
          isActive ? <FaTimesCircle /> : <FaBars />
        }

      </div>
    </aside>
  );
};

export default Navbar;
