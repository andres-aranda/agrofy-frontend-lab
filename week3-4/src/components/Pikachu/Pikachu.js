import React, { useState } from 'react';
import './Pikachu.css';

const Picachu = () => 
    (<div className="bloquePika">
      <div className="centrarPika">
          <img src="https://image.flaticon.com/icons/svg/528/528098.svg" className="imgp"/>
        <p className="fechaPika">1998</p>
      </div>
      
      <div className="centrarPika">
        <p className="Pika">Firts steps</p>
        <p>The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and loved
          Pokémon out there. Pocket Monsters’ success led to North America getting the games in 1998 for the Game Boy
          (as Pokémon Red and Blue). These few years in the public saw Pokémon go from a game about a hobby to a
          worldwide phenomenon</p>
      </div>
    </div>)

export default Picachu;