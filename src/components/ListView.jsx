import React from 'react';
import ShopItem from './ShopItem';
import '../App.css';

function ListView({ cards }) {
  return (
    <ul className='card list__view'>
      {cards.map((card, i) => <ShopItem key={i} card={card}/>)}
    </ul>
  )
}

export default ListView;
