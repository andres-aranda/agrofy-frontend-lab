import React, { useState } from 'react';
import './Card.css';
import FavStatus from '../FavStatus/FavStatus';
import Types from'../Types/Types';

const Card = props => {
  let j;
  j=
    <div class="pokemonInfoBody">
    <img src={props.image}/>
    <p>{props.name}</p>
    <p><Types types={props.types}/></p>
    <FavStatus flag={props.flag} id={props.id}/>
  </div> ;
  return{j}
};

 
export default Card;