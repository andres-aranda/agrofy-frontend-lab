import React, { useState } from 'react';
import './Cartilla.css';
import Card from '../Card/Card'



const Cartilla = props => {
    let allsCards = [];
    props.pokemones.map(element => {
        allsCards.push(<Card pokemon={element}/>);
    });
    

    return (
        <section>
            <div id="pokemonData">
            {allsCards}
            </div>
        </section>
    );
}
export default Cartilla;