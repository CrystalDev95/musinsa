import React from 'react'
import './Footer.css'
import { AiFillApple, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { RiGooglePlayFill } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'

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
            <button>
              <AiFillApple className='icon2' />
              <div className="storeText">
                <p>Download on the</p>
                <h2>App Store</h2>
              </div>
            </button>
            <button>
              <RiGooglePlayFill className='icon2' />
              <div className="storeText">
                <p>Download on the</p>
                <h2>Google Play</h2>
              </div>
            </button>
          </div>
        </div>

        <div className="socialDiv">
          <div className="social-btn">
            <AiOutlineInstagram className='icon' />
          </div>
          <div className="social-btn">
            <FaFacebookF className='icon' />
          </div>
          <div className="social-btn">
            <AiFillYoutube className='icon' />
          </div>
        </div>

        <div className="policy">
          MUSINSA Co.,Ltd may not be the direct seller but only an intermediary for some products. In this case, MUSINSA has limited liability for products, information, and transactions. Please check the product details page of each product.

        </div>
      </div>
  )
}

export default Footer