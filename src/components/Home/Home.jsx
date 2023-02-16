import './Home.css'
import { useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { TbArrowBigRight } from 'react-icons/tb'
import Navbar from '../Navbar/Navbar'

import data from '../../data/data.json'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [cap, setCap] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(
      (response) => {
        console.log(response)
        setLoaded(true);
        setProducts(response)
      },
      (error) => {
        setLoaded(error);
        setError(true);
      }
    )
  }, [])


  useEffect(() => {
    setCap(data)
  }, [])



  if (error) {
    return <div>Error:{error.message}</div>
  } else if (!loaded) {
    return <div>Loading Data...</div>
  } else {


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


        <div className="featuredDiv">
          <h1 className='heading'>FEATURED BRANDS</h1>
          <div className="leftArrow"><IoIosArrowBack className='icon' /></div>
            <div className="imgSlide">

              {products.slice(1,4).map((p) => 
              <div className="imgCard" key={p.id}>
                
              <p className='title'>{p.title}</p>
            </div>  
              )}
            </div>
            <div className="rightArrow"><IoIosArrowForward className='icon' /></div>

          <p className='linkDiv'><a className='linkText' href='#'>Explore More <TbArrowBigRight className='icon' /></a></p>
        </div>

        <div className="bestDiv">
          <h1 className='heading'>BEST SELLING CAP</h1>
          <div className="imgSlide">

            {cap.map((c) => 
              
            <a href='#'>
              <div className="imgCard" key={c.id}>
                <img src={c.img} alt=""/>
                <h1>{c.id}</h1>
                <p><strong>{c.name}</strong></p>
                <p>{c.description}</p>
                <br/>
                <p><strong>${c.price}</strong></p>
              </div>
            </a>
              )}

          </div>

          <p className='linkDiv'>
            <a className='linkText' href='#'>
              Explore More
              <TbArrowBigRight className='icon' />
            </a>
          </p>
        </div>

      </div>
      </>
    )


  }
}

export default Home


