import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import { BsPerson, BsHandbag } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiSearch, BiCategory } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai'


const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY) {
        setShow(false); 
      } else { 
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <div className='topSection'>
      <div className="topDiv">
        <div className="searchDiv">
          <BiSearch className='small-icon' />
        </div>

        <div className="logo">
          <h1><Link to="/">MUSINSA</Link></h1>
        </div>

        <div className="iconDiv">
          <a href='#' className='linkText'><BsPerson className='icon person' /></a>
          <a href='#' className='linkText'><IoMdHeartEmpty className='icon heart' /></a>
          <a href='#' className='linkText'><BsHandbag className='icon bag' /></a>
        </div>
      </div>

      <nav>
        <ul>
          <li>BRANDS</li>
          <li><Link to="/clothing">CLOTHING</Link></li>
          <li>NEW</li>
          <li>SHOES</li>
          <li><Link to="/accessories">ACCESSORIES</Link></li>
          <li>TREND</li>
        </ul>
      </nav>
      <div className="banner">
        <p>Free shipping on orders $200+</p>
      </div>

      <div className={`mobileNav ${show && 'hidden'}`}>
            <Link to="/category">
              <div className="iconDiv">
                <BiCategory className='icon2' />
                <p>Category</p>
              </div>
            </Link>

            <Link to="clothing">
              <div className="iconDiv">
                <AiOutlineMessage className='icon2' />
                <p>Snap</p>
              </div>
            </Link>

            <Link to="/">
            <div className="iconDiv">
              <AiOutlineHome className='icon2' />
              <p>Home</p>
            </div>
            </Link>

            <Link to="clothing">
            <div className="iconDiv">
              <AiOutlineHeart className='icon2' />
              <p>Likes</p>
            </div>
            </Link>

            <Link to="/category">
            <div className="iconDiv">
              <BsPerson className='icon2' />
              <p>Profile</p>
            </div>
            </Link>

          </div>
    </div>
  )
}

export default Navbar
