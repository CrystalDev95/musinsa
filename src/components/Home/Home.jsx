import './Home.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { TbArrowBigRight } from 'react-icons/tb'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import data2 from '../../data/data2.json';
import data3 from '../../data/data3.json';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


const Home = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //   .then(res => res.json())
  //   .then(
  //     (response) => {
  //       console.log(response)
  //       setLoaded(true);
  //       setProducts(response)
  //     },
  //     (error) => {
  //       setLoaded(error);
  //       setError(true);
  //     }
  //   )
  // }, [])

  useEffect(() => {
    setItems(data2)
    setItems2(data3)
  }, [])



  // if (error) {
  //   return <div>Error:{error.message}</div>
  // } else if (!loaded) {
  //   return <div>Loading Data...</div>
  // } else {


  return (
    <>
      <Navbar />
      <div className='contentSection'>

        <div className="heroDiv">
          <div className="leftArrow"><IoIosArrowBack className='icon' /></div>
          <div className="rightArrow"><IoIosArrowForward className='icon' /></div>
        </div>

        <div className="textDiv">
          <h1 className='heading'>CELEBRATING THE YEAR OF BLACK BUNNY</h1>
          <p className='smallText'>Black lunar bunny has decided to bring you a special gift with NewJeans!</p>
          <p className='smallText'>Check out New Jean's black bunny styling and what the bunny has to offer!</p>
          <p className='linkDiv'><a className='linkText' href='#'>Explore More <TbArrowBigRight className='icon' /></a></p>
        </div>


        <section className="heroDiv2">
          <div className="imgDiv">
            <img src="https://image.msscdn.net/global/images/2023/02/20/b43422bd79f9401f84d3ab455b5ff40c.jpg" alt="" />
          </div>
          <div className="textDiv">
            <div className="textWrapper">
            <h1>THE CURATION VOL.1 CLUE IN THE NAME</h1>
            <p>If you were curious about where the brands get their inspiration
              from, take this opportunity to pay close attention to the brand names.
            </p>
            <Link to="/clothing">
              <button className='shop-btn'>
                Shop Now
              </button>
            </Link>
          </div>
          </div>
        </section>


        <div className="slideDiv">
          <h1 className='heading'>FEATURED BRANDS</h1>
          <div className="imgSlide">
            <Slider {...settings}>
              {items.map((p) => (
                <div className='imgCard' key={p.id}>
                  <img src={p.img} alt="" className='i' />
                  <p className='name'>{p.name}</p>
                  <p className='text'>{p.description}</p>
                  <p className='price'>${p.price}</p>
                </div>
              ))}
            </Slider>
            <Link to="/clothing">
              <button className='shop-btn'>
                Shop Now
              </button>
            </Link>
          </div>
        </div>



        <div className="slideDiv2">
          <h1 className='heading'>HOW TO WEAR</h1>
          <div className="imgSlide">
            <Slider {...settings}>
              {items2.map((p) => (
                <div className='imgCard' key={p.id}>
                  <img src={p.img} alt="" className='i' />
                  <p className='name'>{p.name}</p>
                  <p className='text'>{p.description}</p>
                  <p className='price'>${p.price}</p>
                </div>
              ))}
            </Slider>
            <Link to="/clothing">
              <button className='shop-btn'>
                Shop Now
              </button>
            </Link>
          </div>
        </div>

      <Footer />
      </div>
    </>
  )


}

export default Home


