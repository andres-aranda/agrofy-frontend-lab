import React, { useState } from 'react';
import './FormLogin.css';



const FormLogin =()=>(
    <div class="formulariLogin">
    <form action="">
      <input class="entradaLogin" type="email" name="email" size="40" placeholder="E-Mail"/><br/>
      <input class="entradaLogin" type="password" name="password" size="40" placeholder="Password"/><br/>
    </form>
    <button className='btnLogin'>Login</button>
  </div>
)


export default FormLogin;