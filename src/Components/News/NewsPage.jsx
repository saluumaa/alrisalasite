import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/NewsSlice';

import { Carousel } from 'react-bootstrap';
import line from '../Assets/line.png'
import './News.css'; 

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (news?.length || 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [news]);

  return (
    <>
    <div className='news-header'>
      <div className='news-header-img'>
        <img src={line} alt='line' /> 
      </div>
      <div className='news-header-text'>
      <h1> OUR LATEST PROGRAMMES</h1>
      </div>
    </div>
    <div className='news-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' >
      {Array.isArray(news) && news.map((item) => (
          <Carousel.Item key={item.id} className='carousel-item' >
            <img className='d-block w-100' src={item.image_url} alt='news' />
            <Carousel.Caption>
            {/* <div className='carousel-caption'> */}
              <h3>{item.title}</h3>
              <p>{item.body.slice(0, 50)}</p>
              <p>
                <Link to={`/news/${item.id}`}><button>Read more</button></Link>
              </p>
              <p>{item.date}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default NewsPage;
