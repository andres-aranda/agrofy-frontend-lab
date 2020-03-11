import React, { useState } from 'react';
import './History.css';
import FirstSteps from '../FirstSteps/FirstSteps';
import GameBoy from '../GameBoy/GameBoy';
import Pikachu from '../Pikachu/Pikachu';

const History = () =>{
  return (<section className="contenedorHistory">

    <div className='divHistory'>
      <h2 id="History" className="history">
        Pokemon History
      </h2>
      <FirstSteps />
      <GameBoy />
      <Pikachu />
    </div>
  </section>);
}

export default History;