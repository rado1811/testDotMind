import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <li className='card'>
      <img src={props.picture} alt='customer'/>
      <br />
      <p>{props.name}}</p>
    </li>
  )
};

export default Card;
