import React, { useState, useEffect} from 'react';
import './Accessories.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import data from '../../data/accessories.json';
import { BsCheck } from 'react-icons/bs';

const Accessories = () => {

  const [search, setSearch] = useState("")

  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [bold, setBold] = useState(null);
  const [strong, setStrong] = useState(null);
  const [colorClick, setColorClick] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);



  const types = [
    { id: 11, value: 'All' },
    { id: 22, value: 'Cap' },
    { id: 33, value: 'Fedora' },
    { id: 44, value: 'Bag' },
    { id: 55, value: 'Bucket' },
    { id: 66, value: 'Beanie' }
  ]


  const genders = [
    { id: 112, value: 'Men' },
    { id: 113, value: 'Women' }
  ]

  const brands = [
    { id: 77, value: 'GRAVER' },
    { id: 88, value: 'LMC' },
    { id: 99, value: 'TAKEASY' },
    { id: 100, value: 'DRAWFIT' },
    { id: 101, value: 'RETRIEVER CLUB' },
    { id: 102, value: 'URBANSTOFF' },
    { id: 102, value: 'FALLETT' },
    { id: 102, value: 'HOTEL-SAINT-TROPEZ' },
  ]

  const colors = [
    { id: 103, value: 'White', color: '#eceaea' },
    { id: 104, value: 'Black', color: '#000000' },
    { id: 105, value: 'Blue', color: '#0000ff' },
    { id: 106, value: 'Green', color: '#008000' },
    { id: 107, value: 'Red', color: '#ff0000' },
    { id: 108, value: 'Pink', color: '#ffc0cb' },
    { id: 109, value: 'Purple', color: '#800080' },
    { id: 110, value: 'Grey', color: '#808080' },
  ]


  useEffect(() => {
    applyFilters()
  }, [selectedBrand, selectedCategory, selectedGender, selectedColor])




  const handleToggle = (e) => {
    console.log(e.target.id)
    setToggle(e.target.id)
  }

  const handleBold = (e) => {
    setBold(e.target.id);
  }

  const handleStrong = (e) => {
    setStrong(e.target.id);
  }

  const handleColor = (e) => {
    setColorClick(e.target.id);
  }



  const handleSelectedCategory = (e) => {
    if (e.target.value === 'All') {
      setSelectedCategory(null)
      setToggle(null)
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

  const handleSelectedColor = (e) => {
    console.log(e.target.value)

    setSelectedColor(e.target.value)
  }



////sorting by price and alphabet
  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  }


  const handleChange = (value) => {
    if(value == 'none'){
        setItems([...data])
    } else {
      let toType, toAscending
      switch(value){
        case 'ascending' : toType = true; toAscending = true; break;
        case 'descending' : toType = true; toAscending = false; break;
        case 'high' : toType = false; toAscending = true; break;
        case 'low' : toType = false; toAscending = false; break;
      }
      let current = [...data]
      current.sort((a, b) => toType ?
             compare(a.brand, b.brand, toAscending) 
             : 
             compare(a.price, b.price, toAscending))
      setItems([...current])
    }
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

    if (selectedColor) {
      updatedList = updatedList.filter(
        (item) => item.color === selectedColor
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
      <div className='accSection'>
      <div className="search">
      <input 
          type="text" 
          placeholder='Search' 
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          />
        </div>
        <div className="accTopMenu">
          <h1>Accessories</h1>
          <div className="accButtonDiv">
            {
              types.map((t) =>
                <button
                  key={t.id}
                  id={t.id}
                  value={t.value}
                  className={t.id == toggle ? "dark" : null}
                  onClick={(e) => {
                    handleSelectedCategory(e);
                    handleToggle(e)
                  }} >
                  {t.value}
                </button>
              )
            }
          </div>
        </div>



        <div className="accBodyDiv">
          <div className="accLeftMenu">
            <div className='accLeftList'>
              <h3>Gender</h3>
              {
                genders.map((g) =>
                  <button
                    className={g.id == bold ? "bold" : null}
                    key={g.id}
                    id={g.id}
                    value={g.value}
                    onClick={(e) => {
                      handleSelectedGender(e);
                      handleBold(e);
                    }}
                  >{g.value}</button>
                )
              }
            </div>

            <div className='accLeftList'>
              <h3>Brand</h3>
              {
                brands.map((b) =>
                  <button
                    className={b.id == strong ? "bold" : null}
                    key={b.id}
                    id={b.id}
                    value={b.value}
                    onClick={(e) => {
                      handleSelectedBrand(e);
                      handleStrong(e);
                    }}
                  >{b.value}</button>
                )
              }
            </div>

            <div className='accLeftListColor'>
              <h3>Color</h3>
              <div className="accColorSection">
                {
                  colors.map((c) =>
                    <div className="accColorDiv">
                      <button
                        style={{ backgroundColor: c.color }}
                        className={c.id == colorClick ? "bold" : null}
                        key={c.id}
                        id={c.id}
                        value={c.value}
                        onClick={(e) => {
                          handleSelectedColor(e);
                          handleColor(e)
                        }}
                      >
                        <BsCheck />
                      </button>
                      <p>{c.value}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>


          <div className='accItemSection'>
            <div className="accTopSmall">
              <div className='accItemCount'>
                Total {items.length}
              </div>
              <div className="accPriceDiv">
                <form action="#">
                  <label htmlFor="sort"></label>
                  <select
                    name="sort"
                    className='sort-selection'
                    onChange={(e)=> handleChange(e.target.value)}
                  > 
                  <option value="none">Sort items by </option>
                    <option value="high">Price(lowest)</option>
                    <option value="low">Price(highest)</option>
                    <option value="ascending">Alphabetically(A-Z)</option>
                    <option value="descending">Alphabetically(Z-A)</option>
                  </select>
                </form>
              </div>
            </div>

            <div className="accItemLists">
              {items.length === 0
                ? "No items found"
                :
                items.
                filter((item) => {
                  if (search == "") {
                    return item
                  } else if (item.brand.toLowerCase().includes(search.toLowerCase())) {
                    return item
                  }
                })
                .map((item) =>
                  <div className="acccItemCard" key={item.id}>
                    <img src={item.img} alt='clothes' />
                    <div className="accItemText">
                      <h4>{item.brand}</h4>
                      <p>{item.description}</p>
                      <h3><strong>${item.price}</strong></h3>
                    </div>
                  </div>
                )}
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}

export default Accessories



