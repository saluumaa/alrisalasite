
import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './News.css'

const FullNews = () => {
    const news = useSelector((state) => state.news.news);
    const {id} = useParams();
    const newsItem = news.find(news => news.id === parseInt(id));

    if(!newsItem){
        return <div className='not-found'>
            <h3 style={{color: 'white', marginTop: '50px'}}
            >News not found</h3>
        </div>
    }
  return (
        <div className='news-page'>
            <div className='news-content'>
            <h3>{newsItem.title}</h3>
        </div>
        <span> enjoy some of images taken during the event. </span>
        <div className='news-image'>
        {newsItem.image_url && newsItem.image_url.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt='news' className='news-item-img' />         
        ))}     
        </div>     
        <div className="new-body-container">
        <div className='news-body'>
        <p>{newsItem.body}</p>
       </div>
         <div className='news-date'>
          <p>{newsItem.date}</p>
        </div>
        </div>  
    </div>
  )
}

export default FullNews