import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaYoutube, FaTiktok} from 'react-icons/fa'
import hero_image from '../Assets/hero_image.jpeg'
import hero_image2 from '../Assets/hero_image2.jpeg'
import hero_image3 from '../Assets/hero_image3.jpeg'
import './Hero.css'
import Donate from '../Donate/Donate'

const Hero = () => {
const images = [ hero_image, hero_image2, hero_image3 ]
const [index, setIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(index => (index + 1) % images.length)
  }, 3000)
  return () => clearInterval(interval)
} , [ images.length])


  return (
    <div className='hero-wrapper'>
    <div className='hero'>
			<div className='image-wrapper'>
				<img src={
          images[index]
        } alt={`Organization Pictures  ${index + 1 }`} />
        <div className='image-overlay'>
          <p>
            Empowering Youth Through Education, building better future together, and creating opportunities for growth.
          </p>
          <Link to="/about"><button className='btn' >Learn More</button></Link>
        </div>
			</div>
     

			<div className='hero-content'>
        <h1 style={{color: '#489EDE'}}>WELCOME TO</h1>
        <h2>AL-RISALA ORGANIZATION</h2>
        <p> Is a non-profit organization that aims to provide a platform for the youth to develop their skills and talents in order to become the future leaders of the community.
        </p>
        <button className='btn'>Follow Us </button>
        <div className='social-icons'>
          <a href='https://www.facebook.com/AlrisalaOrganization/' target='_blank' rel="noopener noreferrer"><FaFacebook /></a>
          <a href='https://www.tiktok.com/@alrisalaorg' target='_blank' rel="noopener noreferrer"><FaTiktok /></a>
          <a href='https://www.youtube.com/channel/UCQ8aXs3FQxXp3zY6t9XqC6g' target='_blank' rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </div>
    </div>
    <Donate />
     </div>
  )
}

export default Hero