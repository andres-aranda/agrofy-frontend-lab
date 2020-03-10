import React, { useState } from 'react';
import './Card.css';
import FavStatus from '../FavStatus/FavStatus';
import Types from'../Types/Types';

const Card = props => {
  
  return(
    <div className="pokemonInfo">
  <div className="pokemonInfoBody">
    <img src={props.pokemon.image}/>
    <p>{props.pokemon.name}</p>
    <Types types={props.pokemon.types}/>
    <FavStatus flag={props.pokemon.flag} id={props.pokemon.id}/>
  </div>
   </div>)
};

 
export default Card;