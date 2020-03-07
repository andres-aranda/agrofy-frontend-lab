import React from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';

const Pokedex = props => {
      
  return (<div className="contenedor">
    <Encabezado />
    <Cartilla pokemones={props.pokemones} />
  </div>)
}

export default Pokedex;
