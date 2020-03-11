import React, { useState } from 'react';
import './Video.css';

const Video =()=>(
<div id="videos" >
    <div style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
        style={{height: '100%', width: '100%'}}>
        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{stroke: 'none', fill: 'darkturquoise'}}></path>
      </svg></div>

    <section id="Videos" className="bloque_video">
      <div className="centrar" style={{marginBottom: '0px'}}>
        <iframe width="500px" height="315" src="https://www.youtube.com/embed/FTNelVcX2Fo" frameborder="0"
           allowfullscreen></iframe>
      </div>
      <div className='centrarDesc'>
          <h2 className="textVideo"
            >
            <p>Checkout the Official <br/>
              Pokemon YouTube chanel</p>
          </h2>
          <button type="button" className="btn"><a href="https://www.youtube.com/" >Watch Now!</a></button>    
      </div>
    </section>

    <div style={{height: '150px', overflow: 'hidden' ,backgroundColor: 'lightblue'}}><svg viewBox="0 0 500 150"
        preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{stroke: 'none', fill: 'darkturquoise'}}></path>
      </svg></div>
  </div>
);

export default Video;