import React from 'react';
import "./MyFavs.css";
import Cartilla from '../../components/Cartilla/Cartilla';

const Pokedex = (props) => {
let pokemones=props.pokemones;
pokemones= pokemones.filter(pokemon => pokemon.flag!==pokemones.id);

  return(
  <div className='bloque'>
 <section className="portada" >  
    <p>My Fav </p>
  </section>
    <Cartilla pokemones={pokemones} />
  </div>  
);}

export default Pokedex;
