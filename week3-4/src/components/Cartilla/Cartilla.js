import React, { useState } from 'react';
import './Cartilla.css';
import Card from '../Card/Card'



const Cartilla = props => {
let allPokemons='';
for (let i=0; i > 151;i++)
{
    allPokemons += <Card pokes={props.pokes[i]} />;
}
    return (
        <section>
            <div id="pokemonData">
                {allPokemons}
            </div>
        </section>
    );
}
export default Cartilla;