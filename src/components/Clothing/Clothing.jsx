import React, { useState, useEffect } from 'react';
import './Clothing.css'

import { BiSearch } from 'react-icons/bi'
import data from '../../data/data2.json';

const Clothing = () => {

  const [items, setItems] = useState([]);
  const [color, setColor] = useState(false);


  useEffect(() => {
    setItems(data);
  }, [])



  const handleClick = (e) => {
    console.log(e.target.value)

    if (e.target.value === 'All') {
      setItems(data);
    } else {
      const filteredItems = data.filter((cat) => {
        return cat.category === e.target.value
      })
      setItems(filteredItems)
    }
  }

  const handleColor = (e) => {
    console.log(e.target.id)

    if (e.target.id == "") {
      return setColor(!color);
    }
  }




  return (
    <div className='clothSection'>


      <div className="topMenu">
        <h1>Tops</h1>
        <div className="buttonDiv">
          <button
            value='All'
            onClick={(e) => {
              handleClick(e);
              handleColor(e);
            }}>
            All
          </button>


          <button
            value='Cap'
            onClick={(e) => {
              handleClick(e);
              handleColor(e);
            }}>
            Cap
          </button>

          <button
            value="Sweatshirt"
            onClick={(e) => {
              handleClick(e);
              handleColor(e);
            }}>
            Sweatshirt
          </button>

          <button
            value="Hoodie"
            onClick={(e) => {
              handleClick(e);
              handleColor(e);
            }}>
            Hoodie
          </button>


        </div>
      </div>

      <div className="bodyDiv">
        <div className="leftMenu">
          <h3>Gender</h3>
          <p>Men</p>
          <p>Women</p>

          <h3>Brand</h3>
          <p>GRAVER</p>
          <p>LMC</p>
          <p>TAKEASY</p>

          <h3>Color</h3>
          <p>White</p>
          <p>Black</p>
          <p>Blue</p>
          <p>Green</p>
        </div>


        <div className='itemSection'>
          <div className='itemCount'>
            Total {items.length}
          </div>

          <div className="itemLists">
            {items.length === 0
              ? "No items found"
              :
              items.map((item) =>

                <div className="itemCard" key={item.id}>
                  <img src={item.img} alt='clothes' />
                  <div className="itemText">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p><strong>${item.price}</strong></p>
                  </div>
                </div>
              )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Clothing




