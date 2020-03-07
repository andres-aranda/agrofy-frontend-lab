import React, { useState } from 'react';
import './Buscador.css';

let fav =   localStorage.getItem("fav") && localStorage.getItem("fav").split(",") || [];
let pokemones = JSON.parse(localStorage.getItem("pokemones"));

const Buscador =()=>{
    return (
        <div className="alineacion">
      <input className="buscador" type="text" name="buscar" id="buscar" />
      <button className="btn" type="button" onclick="ingresobusqueda()">Search</button>
        </div>
    )
};

const ingresobusqueda = () => {
    let palabra = document.getElementById('buscar').value;
    localStorage.setItem('palabra',palabra);
  };
export default Buscador;