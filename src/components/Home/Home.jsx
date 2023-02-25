import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigRight } from 'react-icons/tb'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import data from '../../data/data.json';
import data2 from '../../data/data2.json';
import data3 from '../../data/data3.json';
import Slider from 'react-slick';
import categoryData from '../../data/category.json'


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
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };


  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const [items, setItems] = useState([]);
  const [hero, setHero] = useState([]);
  const [items2, setItems2] = useState([]);
  const [category, setCategory] = useState([]);




  useEffect(() => {
    setHero(data)
    setItems(data2)
    setItems2(data3)
    setCategory(categoryData)
  }, [])



  return (
    <>
      <Navbar />
      <div className='contentSection'>

        <div className="heroDiv">
          <div className="imgSlide">
            <Slider {...settings2}>
              {hero.map((p) => (
                <div className='imgCard' key={p.id}>
                  <img src={p.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="headingDiv">
          <h1 className='heading'>CELEBRATING THE YEAR OF BLACK BUNNY</h1>
          <p className='smallText'>Black lunar bunny has decided to bring you a special gift with NewJeans!</p>
          <p className='smallText'>Check out New Jean's black bunny styling and what the bunny has to offer!</p>
          <p className='linkDiv'><a className='linkText' href='#'>Explore More <TbArrowBigRight className='icon' /></a></p>
        </div>


        <section className="heroDiv2">
          <div className="imgDiv">
            <img src="https://image.msscdn.net/global/images/2023/02/20/b43422bd79f9401f84d3ab455b5ff40c.jpg" alt="" />
          </div>
          <div className="headingDiv2">
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

          <div className="category__Section">
         <h2>Category</h2>
          <div className="category__Wrap">
            {
              category.map((item) =>
                <Link to={item.link}>
                  <div className="category__Div" key={item.id}>
                    <div className="category__Container">
                      <img src={item.img} alt="" />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </Link>
              )
            }
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

        <div className="popular">
          <h2>Popular Items</h2>
          <div className="popularSection">
            {
              items.slice(7, 13)
                .map((item) =>
                  <div className="popularContainer" key={item.id}>
                    <div className="popularDiv">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <p className='name'>{item.name}</p>
                    <p className='price'>${item.price}</p>
                  </div>
                )
            }
          </div>
          <div className="popularBtn">
            <div className="button">
              View more items
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )


}

export default Home


