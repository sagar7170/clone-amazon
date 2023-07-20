import React, { useState } from 'react'
import "./Home.css"
import Product from './Product'
import { Sliderimg } from './Sliderimg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Home({ slides }) {
  const [cur, setcur] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setcur(cur === length - 1 ? 0 : cur + 1);
  };

  const prevSlide = () => {
    setcur(cur === length - 1 ? 0 : cur + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <div className='home'>
      <div className="home__container">
        {/* <ArrowBackIosIcon className='left' onClick={nextSlide} />
        <ArrowForwardIosIcon className='right' onClick={prevSlide} />
        {Sliderimg.map((slide, index) => {
          return (
            <div className={index === cur ? 'slide active' : 'slide'} key={index}>
              {index === cur && (<img className='home__image' src={slide.image} alt="" />)}        
            </div>
          )
        })} */}

        <img className='home__image' src="  https://m.media-amazon.com/images/I/81ps2f268cL._SX3000_.jpg" alt="" />
        
        {/* row 1 */}
        <div className="home__row">
          <Product
            id="2182"
            title="The Alchemist"
            price={299}
            image="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
            rating={5}
          />
          <Product
            id="8167"
            title="DO IT TODAY"
            price={98}
            image="https://m.media-amazon.com/images/I/61ZPDQOjw-L.jpg"
            rating={5}
          />
          <Product
            id="8109"
            title="DO EPIC SHIT"
            price={298}
            image="https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg"

            rating={5}
          />
          <Product
            id="81011"
            title="Noise Pulse Go Buzz watch"
            price={1198}
            image="https://m.media-amazon.com/images/I/41B9-WZh1oL._SX300_SY300_QL70_FMwebp_.jpg"

            rating={5}
          />
          <Product
            id="81001"
            title="Google Pixel 6a 5G"
            price={77798}
            image="https://m.media-amazon.com/images/I/61dNAU6PgxL._SX679_.jpg"
            rating={5}
          />
        </div>

        {/* row 2 */}

        <div className="home__row">
          <Product
            id="8651"
            title="boAt Rockerz 450 Headphones"
            price={1059}
            image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="6449"
            title="Apple iPhone 13 (128GB) - Midnight"
            price={69777}
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5814"
            title="Apple 2022 11-inch iPad Pro"
            price={88270}
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5811"
            title="Echo Dot (3rd Gen)"
            price={88270}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={4}
          />
        </div>

        {/* row 3 */}

        <div className="home__row">
          <Product
            id="7756"
            title="Lenovo Q-Series (24 Inch) FHD IPS Monitor"
            price={12456}
            image="https://m.media-amazon.com/images/I/71r07rY2wcL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="7750"
            title="Lenovo IdeaPad Slim 3"
            price={50846}
            image="https://m.media-amazon.com/images/I/61-dgckBg+L._SX679_.jpg"
            rating={4}
          />
          <Product
            id="7758"
            title="Wakefit Study Table"
            price={2846}
            image="https://m.media-amazon.com/images/I/71PknCC6ymL._SX466_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home