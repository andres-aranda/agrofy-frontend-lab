import React, { useState } from 'react';
import './Video.css';

const Video =()=>(
<div>
    <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
        style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: darkturquoise;"></path>
      </svg></div>

    <section id="Videos" className="bloque_video">
      <div className="centrar" style="margin-bottom: 0px;">
        <iframe width="500px" height="315" src="https://www.youtube.com/embed/FTNelVcX2Fo" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style="align-self: center;">
        <div className="centrarVideo" >
          <h2 className="textVideo"
            >
            <p>Checkout the Official </p>
            <p>Pokemon YouTube chanel</p>
          </h2>
        </div>
        <div className="centrar" style="align-items: center;padding: 0px;">
          <button type="button" className="btn"><a href="https://www.youtube.com/" >Watch Now!</a></button>
        </div>
      </div>
    </section>

    <div style="height: 150px; overflow: hidden ;background-color: lightblue;"><svg viewBox="0 0 500 150"
        preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: darkturquoise;"></path>
      </svg></div>
  </div>
);

export default Video;