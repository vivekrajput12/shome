import React from 'react'

export default function Shoekart({item}) {
  return (
    <div className='gigcart'>
            <img src={item.img} alt="" />
            <div className="info">
                     <h2 className='info-heading'>{item.desc1}</h2>
                     <h1 className='info-heading'>{item.desc2}</h1>

            </div>
            
    </div>
  )
}
