import React from 'react'
import "./Footer.scss"
export default function Footer() {
  return (
    <div className='footer'>
    <div className='container'>
      <div className='top'>
               
          <div className='item1'>
          <p>Shome</p>
          <span> Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</span>
          <div className="social">
                      <img src="img/twitter.png" alt="" />
                      <img src="img/facebook.png" alt="" />
                      <img src="img/linkedin.png" alt="" />
                      <img src="img/pinterest.png" alt="" />
                      <img src="img/instagram.png" alt="" />
              </div>
          
          </div>

          <div className='item'>
          <h2>Services</h2>
          <span>Home monitoring</span>
          <span>Air Filters</span>
          <span>Professional installation</span>
          <span>Smart Buildings</span>
          <span>For contractors</span>
          </div>

          <div className='item'>
          <h2>My Account</h2>
          <span>My Account</span>
          <span>Contact</span>
          <span>Shopping cart</span>
          <span>Shop</span>
          <span>Services Login</span>
          </div>

          <div className='item'>
          <h2>Contact Info</h2>
          <span>Address: Your address goes here.</span>
          <span>Phone//fax: 0123456789</span>
          <span>Email: demo@example.com</span>
          </div>

      </div>
      <div className='bottom'>
          <div className='left'>
                <h2>shome</h2>
                <span>© 2021 Shome. Made with  by Codecarnival.</span>
          </div>
          <div className='right'>
              <div className="social">
                      <img src="img/twitter.png" alt="" />
                      <img src="img/facebook.png" alt="" />
                      <img src="img/linkedin.png" alt="" />
                      <img src="img/pinterest.png" alt="" />
                      <img src="img/instagram.png" alt="" />
              </div>
          </div>
      </div>
    </div>
  </div>

  )
}
