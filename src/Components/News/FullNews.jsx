
import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import './News.css'

const FullNews = () => {
    const {news} = useContext(GlobalContext);
    const {id} = useParams();
    const newsItem = news.find(news => news.id === parseInt(id));


    if(!newsItem){
        return <div className='not-found'>
            <h3>News not found</h3>
        </div>
    }
  return (
    <div className='news-page'>
        <div className='news-image'>
            {newsItem.image.length > 0 && newsItem.image.map((img, index) => (
                <img key={index} src={img} alt='news' />
            ))}
        </div>
        <div className='news-content'>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <p>{newsItem.date}</p>
        </div>
    </div>
  )
}

export default FullNews