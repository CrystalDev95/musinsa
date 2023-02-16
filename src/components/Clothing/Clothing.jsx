import React, { useState, useEffect } from 'react';
import './Clothing.css'
import Navbar from '../Navbar/Navbar';
import data from '../../data/data2.json';

const Clothing = () => {

  const [items, setItems] = useState([]);
  const [color, setColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);


  const types = [
    { id: 11, value: 'All' },
    { id: 22, value: 'Cap' },
    { id: 33, value: 'Sweatshirt' },
    { id: 44, value: 'Hoodie' },
    { id: 44, value: 'Shirt' }
  ]


  const genders = [
    { id: 55, value: 'Men' },
    { id: 66, value: 'Women' }
  ]

  const brands = [
    { value: 'Graver' },
    { value: 'LMC' },
    { value: 'Takeasy' }
  ]



  useEffect(() => {
    applyFilters()
  }, [selectedBrand, selectedCategory, selectedGender])




  const handleSelectedCategory = (e) => {
    if (e.target.value === 'All') {
      setItems(data);
    } else {
      setSelectedCategory(e.target.value)
    }
  }

  const handleSelectedGender = (e) => {
    console.log(e.target.value)

    setSelectedGender(e.target.value)
  }

  const handleSelectedBrand = (e) => {
    console.log(e.target.value)

    setSelectedBrand(e.target.value)
  }




  const applyFilters = () => {
    let updatedList = data;

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (selectedBrand) {
      updatedList = updatedList.filter(
        (item) => item.brand === selectedBrand
      );
    }

    if (selectedGender) {
      updatedList = updatedList.filter(
        (item) => item.gender === selectedGender
      );
    }
    console.log(updatedList)
    setItems(updatedList);
  }




  return (
    <>
      <Navbar />
      <div className='clothSection'>
        <div className="topMenu">
          <h1>Tops</h1>
          <div className="buttonDiv">
            {
              types.map((t) =>
                <button
                  key={t.id}
                  id={t.id}
                  value={t.value}
                  className={color ? "dark" : null}
                  onClick={(e) => {
                    handleSelectedCategory(e);
                  }}>
                  {t.value}
                </button>
              )
            }

          </div>
        </div>

        <div className="bodyDiv">
          <div className="leftMenu">
            <div className='leftList'>
              <h3>Gender</h3>
              {
                genders.map((g) =>
                  <button
                    key={g.id}
                    id={g.id}
                    value={g.value}
                    onClick={(e) => {
                      handleSelectedGender(e);
                    }}
                  >{g.value}</button>
                )
              }
            </div>

            <div className='leftList'>
              <h3>Brand</h3>
              {
                brands.map((b) =>
                  <button
                    key={b.id}
                    id={b.id}
                    value={b.value}
                    onClick={(e) => {
                      handleSelectedBrand(e);
                    }}
                  >{b.value}</button>
                )
              }
            </div>

            <div className='leftList'>
              <h3>Color</h3>
              <button>White</button>
              <button>Black</button>
              <button>Blue</button>
              <button>Green</button>
            </div>
          </div>


          <div className='itemSection'>
            <div className='itemCount'>
              Total {items.length}
            </div>

            <div className="itemLists">
              {items.length === 0
                ? "No items found"
                :
                items
                  // .filter((item) => {
                  //   if (search == "") {
                  //     return item
                  //   } else if (item.brand.toLowerCase().includes(search.toLowerCase()))
                  // return item
                  // })
                  .map((item) =>

                    <div className="itemCard" key={item.id}>
                      <img src={item.img} alt='clothes' />
                      <div className="itemText">
                        <h4>{item.brand}</h4>
                        <p>{item.description}</p>
                        <h3><strong>${item.price}</strong></h3>
                      </div>
                    </div>
                  )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Clothing




