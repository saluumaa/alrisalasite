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
const imageText = ['Empowering Youth Through Education and building better future together.', 'We are committed to providing a platform for the youth to develop their skills and talents.', 'We are dedicated to providing a platform for the youth to develop their skills and talents.']
const [index, setIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(index => (index + 1) % images.length)
  }, 3000);
  return () => clearInterval(interval)
} , [ images.length])


  return (
    <section className='hero-wrapper'>
    {/* <div className='hero'> */}
			<div className='image-wrapper'>
				<img src={
          images[index]
        } alt={`Organization Pictures  ${index + 1 }`} />
        <div className='image-overlay'>
          <p>
            {imageText[index]}  
          </p>
        <section className='social-icons'>
          <div>
          <Link to="/about"><button className='btn' >Learn More</button></Link>
          </div>
          <div>
          <button>Follow Us  
          <a href='https://www.facebook.com/AlrisalaOrganization/' target='_blank' rel="noopener noreferrer" style={{paddingLeft: '10px'}} ><FaFacebook /></a>
          <a href='https://www.tiktok.com/@alrisalaorg' target='_blank' rel="noopener noreferrer"><FaTiktok /></a>
          <a href='https://www.youtube.com/channel/UCQ8aXs3FQxXp3zY6t9XqC6g' target='_blank' rel="noopener noreferrer"><FaYoutube /></a>
          </button>
          </div>
      </section>
        </div>
        </div>
      <Donate className="donate" />
     </section>
  )
}
        
			{/* </div> */}
     
			{/* <div className='hero-content'>
        <h1 style={{color: '#489EDE', fontFamily: "'lobster', sans-serif"}}>WELCOME TO</h1>
        <h2>AL-RISALA ORGANIZATION</h2>
        <p> Is a non-profit organization that aims to provide a platform for the youth to develop their skills and talents in order to become the future leaders of the community.
        </p>
        
    </div> */}
    

export default Hero