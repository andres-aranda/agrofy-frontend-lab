import React, { useState } from 'react';
import './Form.css';

const Form =()=>(
    <div className="formulari">
    <form action="">
      <input className="entrada" type="text" name="name" size="40" placeholder="Name"/><br/>
      <input className="entrada" type="email" name="email" size="40" placeholder="E-Mail"/><br/>
      <input className="entrada" type="text" name="Subject" size="40" placeholder="Subject"/><br/>
      <input className="entrada" style={{height: '100px'}} type="text" name="apellidos" size="40" placeholder="Messege" /><br/>
    </form>
  </div>
)

export default Form;