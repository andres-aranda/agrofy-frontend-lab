import React, { useState , SetStateAction} from 'react';
import './Buscador.css';

let fav =   localStorage.getItem("fav") && localStorage.getItem("fav").split(",") || [];
let pokemones = JSON.parse(localStorage.getItem("pokemones"));

const Buscador =(props)=>{
const [search,setSearch]= useState('');
const buscar=()=>{
props.onSearch(search)
 }
    return (
        <div className="alineacion">
      <input className="buscador" type="text" onChange={e => setSearch(e.target.value)} />
      <button className="btn" type="button" onClick={() => buscar()} >Search</button>
        </div>
    )
};

export default Buscador;