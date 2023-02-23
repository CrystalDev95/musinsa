import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './Category.css'
import top from '../assets/images/white-top.png'
import cap from '../assets/images/cap-w.png'
import shoes from '../assets/images/shoes.png'
import bag from '../assets/images/bag.png'
import hoodies from '../assets/images/hoodies.png'
import bucket from '../assets/images/bucket.png'
import pants from '../assets/images/pants.png'
import jacket from '../assets/images/jacket.png'
import skirt from '../assets/images/skirt.png'
import Slider from 'react-slick';
import data2 from '../../data/data2.json';
import categoryData from '../../data/category.json'

const Category = () => {

  const [items2, setItems2] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    setCategory(categoryData)
  }, [])
  

  return (
    <div>
      <div className="categoryDiv">
        {
          category.map((item) => 
          <Link to={item.link}>
            <div className="itemSection" key={item.id}>
              <div className="itemDiv">
                <img src={item.img} alt="" />
              </div>
              <p>{item.title}</p>
            </div>
            </Link>
          )
        }

      </div>

      <Navbar />
    </div>
  )
}

export default Category