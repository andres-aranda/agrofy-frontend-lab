import React, {useState} from 'react';
import './FormLogin.css';

const FormLogin = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    function validate() {
        return mail.length && pass.length > 4;
    }

    function handleSubmit(event) {
        event.preventDefault();

        let defaultOptions = {
            url: '',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": localStorage.token
            },
            dataType: 'json',
            body: JSON.stringify({
                "email": mail,//"eve.holt@reqres.in",
                "password": pass//"cityslicka"
            }),
        };
        fetch('https://reqres.in/api/login', defaultOptions)
            .then(function (response) {
                if (response.status >= 400) {
                    return Promise.reject(response);
                } else {
                    var data = response.json();
                    return data;
                }
            })
            .then(function (data) {
                console.log(data);
                localStorage.token = data.token;
            })
            .catch(function (error) {

            });
    }


    return (
        <div class="formulariLogin">
            <form onSubmit={handleSubmit}>
                <input class="entradaLogin" type="email" name="email" size="40" placeholder="E-Mail"
                       onChange={event => setMail(event.target.value)}/><br/>
                <input class="entradaLogin" type="password" name="password" size="40" placeholder="Password"
                       onChange={event => setPass(event.target.value)}/><br/>
                <button type="submit" className='btnLogin' disabled={!validate()}>Login</button>
            </form>
        </div>
    )
}


export default FormLogin;