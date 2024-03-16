// Date: 09.04.2021
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, eraseNews } from '../../redux/NewsSlice';
import { Link } from 'react-router-dom';
import './News.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  // console.log('News:', news);
  const user = useSelector((state) => state.user.user);
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (news && news.length > 0 && news[index] && news[index].image) {
      setIndex((prevIndex) => (prevIndex + 1) % news[index].image.length);
    }
  };
  
  useEffect(() => {
    dispatch(fetchNews()); 
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const onDelete = (id) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      dispatch(eraseNews(id));
    }
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setIndex(next),
  };

  

  return (
    <div className='news-page-frame'>
      {user&& user.role === 'admin' && (
        <div className='add-delete-btn add-btn'>
          <Link to='/addnews'>
            <button
            >Add News</button>
          </Link>
        </div>
      )}
      {Array.isArray(news) && news.map((item) => (
        <>
        <div className='news-wrapper' key={item.id}>
          <div className='slider'>
          <Slider {...settings}>
              {item.image_url && item.image_url.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='news' className='item-img' />
              ))}
            </Slider>               
          </div>
          <div className='news-page-wrapper'>
            <h1>{item.title}</h1>
            <p className='item-body'>{item.body}</p>
            <h5>{item.date}</h5>
            {user && user.role === 'admin' && (
              <button className='del-btn'
              onClick={() => onDelete(item.id)}
              >Delete</button>
            )}
     
          </div>
        </div>
        <hr />
        </>
        
      ))}
    </div>
  );
};

export default News;


