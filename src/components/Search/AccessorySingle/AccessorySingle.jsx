import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data/accessories.json';
import './AccessorySingle.css'
import Navbar from '../../Navbar/Navbar'
import { BsInfoCircle } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

const AccessorySingle= () => {

    //useParams detects the clicked items URL unique key, in this case the ID.
    const {accId } = useParams();
    const [item, setItem] = useState([]);
    console.log(accId)

    useEffect(() => {
        const singleItem = data.find((item) => item.id === parseInt(accId));
        setItem(singleItem)
    }, [accId])

    return (
        <>
            <div className="navDiv">
                <Navbar />
            </div>
            <div className="singleAcc">

                <div className="acc">
                    <div className="acc__image">
                        <img src={
                            item.img
                            } alt="" />
                    </div>

                    <div className="acc__info">
                    <p>{item.brand}</p>
                        <p className='name'>
                            {item.name}</p>
                        <p>[{item.color}]</p>
                        <p className='price'>${item.price}</p>
                        <p className='ship'><BsInfoCircle className='icon'/>Scheduled to ship after Mar 20</p>
                        <div className="acc__btn">
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

export default AccessorySingle