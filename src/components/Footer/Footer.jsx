import React from 'react'
import './Footer.css'
import { AiFillApple, AiOutlineInstagram, AiOutlineFacebook, AiFillYoutube } from 'react-icons/ai'
import { RiGooglePlayFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footerDiv">

    <div className='textLink'>
      <p>About MUSINSA</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
    </div>

    <div className="help-btn">
      <button>
        Help Center
      </button>
    </div>

    <div className="storeDiv">
      <h3>Download the MUSINSA app</h3>
      <div className='store-btn'>
        <button><AiFillApple />App Store</button>
        <button><RiGooglePlayFill />Google Play</button>
      </div>
    </div>

    <div className="socialDiv">
      <div className="social-btn">
      <AiOutlineInstagram className='icon' />
      </div>
      <div className="social-btn">
      <FaFacebookF className='icon'/>
      </div>
      <div className="social-btn">
      <AiFillYoutube className='icon'/>
      </div>
    </div>

    </div>
  )
}

export default Footer