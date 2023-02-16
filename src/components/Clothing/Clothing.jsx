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
    { id: 11, value: 'All', label: 'All'},
    { id: 22, value: 'Cap', label: 'Cap' },
    { id: 33, value: 'Sweatshirt', label: 'Sweatshirt' },
    { id: 44, value: 'Hoodie', label: 'Hoodie' }
  ]


  const genders = [
    { id: 55, value: 'Men', label: 'Men' },
    { id: 66, value: 'Women', label: 'Women' }
  ]

  const brands = [
    { value: 'Graver', label: 'Graver' },
    { value: 'LMC', label: 'LMC' },
    { value: 'Takeasy', label: 'Takeasy' }
  ]



  useEffect(() => {
    applyFilters()
  }, [selectedBrand, selectedCategory, selectedGender])



  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value)
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




  // const handleType = (e) => {
  //   console.log(e.target.value)

  //   if (e.target.value === 'All') {
  //     setItems(data);
  //   } else {
  //     const filteredItems = data.filter((d) => {
  //       return d.category === e.target.value || d.gender === e.target.value
  //     })
  //     setItems(filteredItems)
  //   }
  // }



  // const handleGender = (e) => {
  //   console.log(e.target.value)

  //   const filteredItems = data.filter((d) => {
  //     return d.gender === e.target.value
  //   })
  //     setItems(filteredItems)
  // }



  // const handleBrand = (e) => {
  //   console.log(e.target.value)

  //   const filteredItems = data.filter((d) => {
  //     return d.brand === e.target.value
  //   })
  //     setItems(filteredItems)

  // }


  // const handleColor = (e) => {
  //   setColor(!color)
  // }



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
                    <h3>{item.category}</h3>
                    <h4>{item.brand}</h4>
                    <h4>{item.gender}</h4>
                    {/* <p><strong>${item.price}</strong></p> */}
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




