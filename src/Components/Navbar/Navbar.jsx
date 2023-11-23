import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Assets/logo_background.jpeg'
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const [isActive, setIsActive ] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
    <nav className={isActive ? 'nav-active' : ''}>
        <div className='navbar-logo'>
            <img src={logo} alt='logo' />
        </div>
        <ul className='navbar-links'>
					<li onClick={()=> {setMenu('home')}}>
					<Link style={{textDecoration: 'none'}} to="/">Home</Link> {menu === 'home' ? <hr /> : <></>}
					</li>
					<li onClick={()=> {setMenu('about')}}>
					<Link style={{textDecoration: 'none'}} to="/about">About Us</Link> {menu === 'about' ? <hr /> : <></>}
					</li>
					<li onClick={()=> {setMenu('news')}}>
					<Link style={{textDecoration: 'none'}} to="/news">News</Link> {menu === 'news' ? <hr /> : <></>}
					</li>
					<li onClick={()=> {setMenu('contact')}}>
					<Link style={{textDecoration: 'none'}} to="/contact">Contact Us</Link> {menu === 'contact' ? <hr /> : <></>}
					</li>
        </ul>

        <div className='login-btn'>
            <button>Log in</button>
        </div>
    </nav>
    
  <div className='humberger' onClick={handleClick}>
  {isActive ? <FaTimes /> : <FaBars />}
  </div>
  </>
  )
}

export default Navbar