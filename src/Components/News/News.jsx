import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = ({loggedIn }) => {
  const { news } = useContext(GlobalContext);
  const [index, setIndex] = useState(0);

  const { deleteNews } = useContext(GlobalContext);
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % news[index].image.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [index]);

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
      {loggedIn && (
        <div className='add-delete-btn'>
       <Link to='/addnews'><button>Add News</button></Link>   
        <button onClick={() => deleteNews(news.id)}>Delete News</button>
        </div>
        )}
     {news.map((item) => (
       <div className='news-wrapper'>
        <div key={item.id} className='slider' >
          <Slider {...settings}>
            {item.image.length > 0 &&
              item.image.map((img, index) => (
                <img key={index} src={img} alt='news' className='item-img' />
              ))}
          </Slider>
          </div>
            <div className='news-content'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </div>
            </div>
        ))}
    </div>
   
  );
};

export default News;
