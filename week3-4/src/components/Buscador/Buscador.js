import React, { useState , SetStateAction} from 'react';
import './Buscador.css';

let fav =   localStorage.getItem("fav") && localStorage.getItem("fav").split(",") || [];
let pokemones = JSON.parse(localStorage.getItem("pokemones"));

const Buscador =(props)=>{
  /*const handleChange = event => {
    setText(event.target.value);
  }
  */
    return (
        <div className="alineacion">
      <input className="buscador" type="text" />
      <button className="btn" type="button" >Search</button>
        </div>
    )
};

export default Buscador;