import React from 'react';
import ShopCard from './ShopCard';
import '../App.css';

function CardsView({ cards }) {
  return (
    <ul className='card card__view'>
      {cards.map((card, i) => <ShopCard key={i} card={card}/>)}
    </ul>
  )
}

export default CardsView;
