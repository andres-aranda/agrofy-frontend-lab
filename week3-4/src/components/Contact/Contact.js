import React, { useState } from 'react';
import './Contact.css';
import Form from '../Form/Form';

const Contact =()=>(
    <section className="contenedorContact" >
    <p id="Contact" className="ContactUs">Contact Us</p>
  <Form />
    <button style="margin-top: 20px;" type="button" class="btn">Send</button> 
  </section>
)

export default Contact;