import React, { useState } from 'react';
import './Portada.css';
import Welcome from '../Welcome/Welcome'
/**/

const Portada = () =>(
<div className="contenedorPortada">
<section className="portadaHome">
  <div id='w'><Welcome /></div>
  <div className="ola">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none"
      style={{height: '100%', width: '100%'}}>
      <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{stroke: 'none', fill:' #ffffff'}}></path>
    </svg>
    </div>
</section> 
</div>
)
export default Portada;