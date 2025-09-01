import { useState } from 'react'
import './SingleCard.css'

export default function SingleCard({ imgsrc, rating, likes, brand, title, price, oldprice, discount }) {
  const[like,setLike]=useState(likes);
  return (
    <div className="Single-ctn">
      <div className='img-container'>
        <img src={imgsrc} alt={title} />
        <div className='rating'>
          <span>{rating}</span>
          <span>
            <button className="likebutton" onClick={()=>{setLike(like+1)}}>{like}❤️</button>
          </span>
        </div>
      </div>

      <div className='card-content'>
        <h3 className='brand'>{brand}</h3>
        <p className='title'>{title}</p>
        <div className='price-section'>
          <span className="price">{price}</span>
          <span className="old-price">{oldprice}</span>
          <span className="discount">({discount}%)</span>
        </div>
      </div>
    </div>
  )
}
