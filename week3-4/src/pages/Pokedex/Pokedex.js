import React from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';


const Pokedex = () => (
  <div className="pokedexPage">
    <Encabezado />
    <Cartilla/>
  </div>

);

export default Pokedex;
