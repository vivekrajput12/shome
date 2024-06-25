import React from 'react'
import "./Feature.scss"
import delivery from './delivery.png'
import discount from './discount.png'
import payment from './payment.png'
import support from './support.png'

export default function Feature() {
  return (
    <div className='feature'>
            <ul className='list'>
            <li><img src={delivery}/>  Free Home Delivary</li>
            <li> |</li>
            <li><img src={discount}/> Order Discount</li>
            <li> |</li>            
            <li><img src={payment} alt="" /> Secure Payments</li>
            <li> |</li>
            <li><img src={support} alt="" />24 x 7 Online Support</li>
            </ul>
    </div>
  )
}
