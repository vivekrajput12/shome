import React from 'react'
import "./Feedback.scss"
export default function Feedback({item}) {
  return (
    <div className='feedback'>
            <img src={item.img} alt="" className='userimg'/>
            <div className="info">
             <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi veniam, placeat sapiente magnam delectus, odio possimus, harum aperiam reiciendis laudantium consequuntur. A pariatur ex iste asperiores illo cupiditate eveniet!</p>  
             <p>{item.username}</p>     
            </div>
    </div>  
  )
}
