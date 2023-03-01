import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data/data2.json';
import './SearchSingle.css'
import Navbar from '../../Navbar/Navbar'
import { BsInfoCircle } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

const SearchSingle = () => {

    //useParams detects the clicked items URL unique key, in this case the ID.
    const { itemId } = useParams();
    const [item, setItem] = useState([]);
    console.log(itemId)

    useEffect(() => {
        const singleItem = data.find((item) => item.id === parseInt(itemId));
        setItem(singleItem)
    }, [itemId])

    return (
        <>
            <div className="navDiv">
                <Navbar />
            </div>
            <div className="singleItem">

                <div className="item">
                    <div className="item__image">
                        <img src={
                            item.img
                            } alt="" />
                    </div>

                    <div className="item__info">
                    <p>{item.brand}</p>
                        <p className='name'>
                            {item.name}</p>
                        <p>[{item.color}]</p>
                        <p className='price'>${item.price}</p>
                        <p className='ship'><BsInfoCircle className='icon'/>Scheduled to ship after Mar 20</p>
                        <div className="item__btn">
                            <div className="heart">
                                <FiHeart className='icon'/>
                            </div>
                            <button className="black-btn">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchSingle