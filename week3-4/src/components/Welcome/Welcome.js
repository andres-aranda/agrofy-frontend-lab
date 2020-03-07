import React, { useState } from 'react';
import './Welcome.css'

const Welcome = () => {
  return (<div className="contenedor">
        <div className="bloque">
          <h1>Welcome Page!</h1>
          <p>Join our comunity to find Pokemon's news.</p>
          <div>
          <button type="button" className="btn">See more</button>
          </div>
        </div>
      </div>)
   
}


export default Welcome;