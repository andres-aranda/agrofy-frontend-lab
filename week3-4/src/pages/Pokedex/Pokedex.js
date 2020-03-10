import React, { useState } from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';

const Pokedex = props => {
const [coincide,setCoincide]= useState(props.pokemones);
const filter =(text)=>{
text.length?
setCoincide (props.pokemones.filter(poke => poke.name.includes(text)))
:setCoincide (props.pokemones);}
  return (<div className="contenedor">
    <Encabezado onSearch={filter}/>
    <Cartilla pokemones={coincide} />
  </div>)
}


export default Pokedex;
