import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import data from '../../data/data2.json';
import { useNavigate } from 'react-router-dom';
import { BsPerson, BsHandbag } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiSearch, BiCategory } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai'


const Navbar = () => {

  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [search, setSearch] = useState("")
  const [showLinks, setShowLinks] = useState("")
  const navigate = useNavigate()



  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate("/SearchResults", { state: { search, items } });
      window.location.reload();
    } 
  }


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


  useEffect(() => {
    setItems(data)
  }, [])


  return (
    <div className='topSection'>
      <div className="topDiv">

        <div className="mobileNavPage" id={showLinks ? "hidden" : ""}>
          <div className="mobileNavPage__searchDiv">
            <div className="mobileNavPage__searchContainer">
            <input
              type="text"
              placeholder='Search'
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              onKeyDown={handleSearch}
            />
          </div>
          <div 
          className='closeBtn'
          onClick={() => setShowLinks(!showLinks)}
          ><AiOutlineCloseCircle className='icon' />
          </div>
          </div>

          <div className="dropdown">
            {
              items
              .filter((item) => {
              if (search == "") {
                return false
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item
              }}).slice(1,11)
              .map((item) => 
              <div 
              onClick={handleSearch} 
              className='dropdown-row'
              >{item.name}</div>
              )
            }
          </div>
        </div>


        <div className="searchDiv">
          <div className="search__Container">
            <input
              type="text"
              placeholder='Search'
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              onKeyDown={handleSearch}
            />
          </div>
          <BiSearch className='small-icon' onClick={() => setShowLinks(!showLinks)} />
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
