import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { Carousel } from 'react-bootstrap';
import './News.css'; 

const NewsPage = () => {
  const { news } = useContext(GlobalContext);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [news]);

  return (
    <div className='news-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' >
        {news.map((item) => (
          <Carousel.Item key={item.id}>
            <img className='d-block w-100' src={item.image[0]} alt='news' />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 100)}</p>
              <p>
                <Link to={`/news/${item.id}`}>Read more</Link>
              </p>
              <p>{item.date}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsPage;
