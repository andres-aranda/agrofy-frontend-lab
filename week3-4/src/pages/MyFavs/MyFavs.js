import React from 'react';
import "./MyFavs.css";
import Cartilla from '../../components/Cartilla/Cartilla';

const MyFavs = (props) => {
let pokemones=props.pokemones;
let localPoke = JSON.parse(localStorage.getItem('fav'))||[];
let favs = localPoke.map(fav => pokemones.find(poke => poke.id == fav));
favs = favs.map(poke=> {return {...poke, flag: true}})
  return(
  <div className='bloque'>
 <section className="portada" >  
    <p>My Fav </p>
  </section>
    <Cartilla pokemones={favs} />
  </div>  
);}

export default MyFavs;
