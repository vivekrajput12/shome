import React from 'react'
import "./Featured.scss"
export default function Featured({item}) {
  return (
           
            <div className='kart'>
                <div className='overlap'>
                        <img src={item.img} alt="" className='overlapimg'/>
                        <div className='product-option'>
                            <a href=''><img src="" alt="" />1</a>
                            <a href=''><img src="" alt="" />1</a>
                            <a href=''><img src="" alt="" />1</a>
                            <a href=''><img src="" alt="" />1</a>
                        </div>
                </div>
                <div className="info">
                            <a href=''>Men/Women</a>
                            <div className="price">
                                    <a href=''>{item.category_desc}</a>
                                    <h2>{item.price}</h2>
                            </div>
                </div>
            </div>
    
  )
}
