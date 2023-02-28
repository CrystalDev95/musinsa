import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigRight } from 'react-icons/tb'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import data from '../../data/data.json';
import data2 from '../../data/data2.json';
import data3 from '../../data/data3.json';
import accessory from '../../data/accessories.json';
import Slider from 'react-slick';
import categoryData from '../../data/category.json'
import { motion } from 'framer-motion'


const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
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
  const [accessoryData, setAccessoryData] = useState([]);




  useEffect(() => {
    setHero(data)
    setItems(data2)
    setItems2(data3)
    setCategory(categoryData)
    setAccessoryData(accessory)
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


        <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="heroDiv2">
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
        </motion.div>


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
          <div className="category__Wrap grid4">
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
          <div className="popularSection grid3">
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
          <Link to="/clothing">
          <div className="popularBtn">
            <div className="button">
              View more items
            </div>
          </div>
          </Link>
        </div>




        <div className="popular">
          <h2>Bucket and Baseball Caps</h2>
          <div className="popularSection grid3">
            {
              accessoryData.filter((item) => {
                if (item.category == 'Cap') 
                  return item
              })
              .slice(1, 7)
                .map((item) =>
                <Link to={item.link}>
                  <div className="popularContainer" key={item.id}>
                    <div className="popularDiv">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <p className='name'>{item.name}</p>
                    <p className='price'>${item.price}</p>
                  </div>
                  </Link>
                )
            }
          </div>
          <Link to="/accessories">
          <div className="popularBtn">
            <div className="button">
              View more items
            </div>
          </div>
          </Link>
        </div>

        <div className="celeb__Section">
          <div className="celeb__Main">
            <img src="https://image.musinsa.com/mfile_s01/cms-files/6266132da00f08.43872388.jpg" alt="" />
          </div>
          <div className="celeb__Text">
          <h2>Goeun Kim showing Musinsa style</h2>
          <p>23 SPRING New clothes | 5% Discount</p>
          </div>

          <div className="celeb grid3">

            <div className="celeb__Container">
            <div className="celeb__Div">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1GudrCDgSpvHpKx5pkguDigKRy7qLxZx5w&usqp=CAU" alt="" />
            </div>
            <p className='name'>Mardi blue print top</p>
            <p className='price'>$70</p>
            </div>

            <div className="celeb__Container">
            <div className="celeb__Div">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVrbUkuK2aoASSViiMtxBScguYGM4NJIJll1CjE3KPUTzZw9WWJxZVJjMUC49EttlWr8&usqp=CAU" alt="" />
            </div>
            <p className='name'>Mardi green print top</p>
            <p className='price'>$85</p>
            </div>

            <div className="celeb__Container">
            <div className="celeb__Div">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_k52mTqNEFQG57VRVuIDUTtpkvmeWQ0zNQ&usqp=CAU" alt="" />
            </div>
            <p className='name'>Mardi black top</p>
            <p className='price'>$90</p>
            </div>
          </div>


          <div className="view__Btn">
            <button>
              View more items
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )


}

export default Home


