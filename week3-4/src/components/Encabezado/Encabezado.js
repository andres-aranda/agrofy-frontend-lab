import React, { useState } from 'react';
import './Encabezado.css';
import Buscador from '../Buscador/Buscador';

const Encabezado =(props)=>{

    return (
        <section>
            <div className="encabezado">
                <img src="https://github.com/andres-aranda/agrofy-frontend-lab/blob/master/week1-2/assets/ash.png?raw=true" />
                <p>Pokedex</p>
            </div>
            <Buscador />
        </section>
);
}
export default Encabezado;