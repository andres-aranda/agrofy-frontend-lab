import React, { useState } from 'react';
import './Welcome.css'

const Welcome = () => {
  return (<div className="contenedorWelcome">
        <div className="bloqueWelcom">
          <h1 className="titulo">Welcome Page!</h1>
          <p className="description">Join our comunity to find Pokemon's news.</p>
          <div>
          <button type="button" className="btn">See more</button>
          </div>
        </div>
      </div>)
   
}


export default Welcome;