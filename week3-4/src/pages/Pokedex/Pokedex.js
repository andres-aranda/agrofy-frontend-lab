import React, { useState } from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';

const Pokedex = props => {
  let contextType = PokemonesContext;
const [coincide,setCoincide]= useState(contextType);
const filter =(text)=>{
text.length?
setCoincide (contextType.filter(poke => poke.name.includes(text)))
:setCoincide (contextType);}
  return (<div className="contenedor">
    <Encabezado onSearch={filter}/>
    <Cartilla pokemones={coincide} />
  </div>)
}


export default Pokedex;
