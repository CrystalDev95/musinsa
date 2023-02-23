import { Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css';

import Home from './components/Home/Home'
import Clothing from './components/Clothing/Clothing'
import Accessories from './components/Accessories/Accessories'
import Category from './components/Category/Category'


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  )
}

export default App;
