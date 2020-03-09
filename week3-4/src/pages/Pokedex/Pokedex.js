import React, { useState } from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';

const Pokedex = props => {
  let coincide;
   const[text,setText] = useState(''); 
 text.length?
 coincide = props.pokemones.filter(poke => poke.name.includes(text))
 :coincide = props.pokemones;
  return (<div className="contenedor">
    <Encabezado text={text}/>
    <Cartilla pokemones={coincide} />
  </div>)
}

export default Pokedex;
