import React, { useState } from 'react';
import './History.css';
import FirstSteps from '../FirstSteps/FirstSteps'
import FirstSteps from '../GameBoy/GameBoy'


const History=()=>{
  
    <section className="contenedor">
        
    <div  style="margin: 0px; margin-bottom: 30px;background-color: white;display: flex;justify-content: center;">
      <h2 id="History">
        Pokemon History      
      </h2>
    </div>
        <FirstSteps />
        <GameBoy />
        

    
    </section>
}

export default History;