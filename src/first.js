import React, { useState } from "react"
import { FaAutoprefixer } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'
import { AiFillAndroid } from 'react-icons/fa'
import img1 from './img-1.jpg'
import img2 from './img-2.jpg'
import img3 from './img-3.jpg'
import { FaJs } from 'react-icons/fa';
import './mystyles.css'
import { Link } from "react-router-dom"

const First = () => {
    return (
        <div>
            <div className="navbar">
                <p>
                    welcome to my personal website
                </p>
            </div>
            <h2>some photos from poland</h2>
            <div className="images-section">
                <div>
                    <img src={img1}></img>
                </div>
                <div>
                    <img src={img2}></img>
                </div>
                <div>
                    <img src={img3}></img>
                </div>
            </div>
            <div className="center">
                <p className="description-text">
                    my abilities
                </p>
            </div>
            <div className="icons-section">
                <Link to={'/second'}>
                    <FaJs className="big" />
                </Link>
                <Link to={'/third'}>
                    < FaAutoprefixer className="big" />
                </Link>
                <FaClipboard className="big" />
            </div>
        </div >
    )
}
export default First;