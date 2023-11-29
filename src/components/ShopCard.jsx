import React from 'react';
import '../App.css';

function ShopCard({ card }) {
  const cardBg = {
    backgroundImage: `url(${card.img})`,
  }

  return (
    <li className='card__item' style={cardBg}>
      <p className='card__title'>{card.name}</p>
      <p className='card__color'>{card.color}</p>
      <div className='card__bottom'>
        <div className='card__price'>${card.price}</div>
        <button className='card__button' name='button' type='button'>add to card</button>
      </div>
    </li>
  )
}

export default ShopCard;
