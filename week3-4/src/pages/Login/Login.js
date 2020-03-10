import React, { useState } from 'react';
import "./Login.css";
import FormLogin from '../../components/FormLogin/FormLogin';


const Login = props => {
return(
  <div className='contenedorLogin'>
  <p className='txtLog'>Login</p>
<div className='formu'>
  <FormLogin />
</div>
  </div>
)
}


export default Login;
