import React, { useState } from 'react';
import './Contact.css';
import Form from '../Form/Form';

const Contact =()=>(
  <div>
    <section className="contenedorContact" >
    <p id="Contact" className="ContactUs">Contact Us</p>
  <Form />
    <button style={{marginTop: '20px'}} type="button" class="btn">Send</button> 
  </section>
  <section className="contenedorContact" style={{margin: '0px',backgroundColor: 'lightblue'}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="darkturquoise" fill-opacity="1"
      d="M0,160L20,154.7C40,149,80,139,120,149.3C160,160,200,192,240,197.3C280,203,320,181,360,165.3C400,149,440,139,480,160C520,181,560,235,600,224C640,213,680,139,720,106.7C760,75,800,85,840,74.7C880,64,920,32,960,48C1000,64,1040,128,1080,154.7C1120,181,1160,171,1200,160C1240,149,1280,139,1320,149.3C1360,160,1400,192,1420,208L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
    </path>
  </svg>
</section>
</div>
)

export default Contact;