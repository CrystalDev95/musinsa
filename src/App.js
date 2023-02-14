import { Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css';

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Clothing from './components/Clothing/Clothing'
import Accessories from './components/Accessories/Accessories'
import Shoes from './components/Shoes/Shoes'


function App() {

  return (
    <>

    <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </>
  )
}

export default App;
