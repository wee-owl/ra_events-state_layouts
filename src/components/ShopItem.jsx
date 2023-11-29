import React from 'react';
import '../App.css';

function ShopItem({ card }) {
  return (
    <li className='list__item'>
      <img className='list__image' src={card.img} alt={card.name}/>
      <p className='list__title'>{card.name}</p>
      <p className='list__color'>{card.color}</p>
      <div className='list__price'>${card.price}</div>
      <button className='list__button' name='button' type='button'>add to card</button>
    </li>
  )
}

export default ShopItem;
