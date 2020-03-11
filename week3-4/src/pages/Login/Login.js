import React, { useState } from 'react';
import "./Login.css";
import FormLogin from '../../components/FormLogin/FormLogin';
import Footer from '../../components/Footer/Footer';


const Login = props => {
return(
  <div className='log'>
  <div className='contenedorLogin'>
  <p className='txtLog'>Login</p>
<div className='formu'>
  <FormLogin />
</div>
  </div>
  <Footer /></div>
)
}


export default Login;
