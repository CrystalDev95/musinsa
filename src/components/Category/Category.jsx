import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './Category.css'
import categoryData from '../../data/category.json'

const Category = () => {

  const [category, setCategory] = useState([]);


  useEffect(() => {
    setCategory(categoryData)
  }, [])
  

  return (
    <>
   <Navbar />
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
    </div>
    </>
  )
}

export default Category