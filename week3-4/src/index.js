import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let pokemones = [];
let fav = localStorage.getItem("fav") && localStorage.getItem("fav").split(",") || [];

//Carga global
const carga = () => {
    let promises = [];
    for (let i = 1; i <= 15; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(myJson => {
        pokemones = myJson.map(myJson => ({
            id: myJson.id,
            image: myJson.sprites.front_default,
            name: myJson.name,
            types: myJson.types,
            flag: fav && fav.length && fav.find(item => item == myJson.id)
        }
        ));
        render();
    }).catch(err => console.log('No funca ' + err));
};
const render = () => { ReactDOM.render(<App pokemones={pokemones} fav={fav} />, document.getElementById('root')); };

carga();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
