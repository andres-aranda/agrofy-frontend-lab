import React, { useState } from 'react';
import './FormLogin.css';

const FormLogin =()=>{
const [mail, setMail] = useState('');
const [pass, setPass] = useState('');

const validate = () => {
  return mail.length && pass.length > 4;
};

function handleSubmit(event) {
  event.preventDefault();
}
const myRequest = new Request('https://reqres.in/api/login',{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
});
fetch(myRequest).then(res=>console.log('reeess', res)).catch(err=> console.log('eerror', err))

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit




  return(
    <div class="formulariLogin">
    <form onSubmit={handleSubmit}>
      <input class="entradaLogin" type="email" name="email" size="40" placeholder="E-Mail" onChange={event => setMail(event.target.value)}/><br/>
      <input class="entradaLogin" type="password" name="password" size="40" placeholder="Password"onChange={event => setPass(event.target.value)}/><br/>
    </form>
    <button type="submit" className='btnLogin' isDisabled={!validate()}>Login</button>
  </div>
)}


export default FormLogin;