import React from 'react'
import "./Banner.scss"
import myImage from './banner.jpg'
export default function Banner() {
  return (
    <div className='banner'>
        <div className='imgi'>
              <img src={myImage} alt="My Image" className='img'/>
              <div className='heading'>
                  <h3>UPTO 30% OFF</h3>
                  <h2>EXCLUSIVE</h2>
                  <h1>NEW SHOES</h1>
                  <button>Shop Now</button>
              </div>
              <div className="arrowbtn">
              <button>&gt;</button>
              <button>&lt;</button>
              

              </div>
        </div>
    </div>
  )
}
