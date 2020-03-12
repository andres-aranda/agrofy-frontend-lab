import React, { useState } from 'react';
import "./Pokedex.css";
import Encabezado from '../../components/Encabezado/Encabezado';
import Cartilla from '../../components/Cartilla/Cartilla';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';



//llamada API

//seteado 


const Pokedex = () => {
  const carga = () => {
    let aux = [];
    let promises = [];
    for (let i = 1; i <= 15; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(myJson => {
      aux = myJson.map(myJson => ({
        id: myJson.id,
        image: myJson.sprites.front_default,
        name: myJson.name,
        types: myJson.types,
        flag: false
      }
      ));
      setPokemones(aux)
      setCoincide(pokemones)
    }).catch(err => console.log('No funca ' + err));

  };

  const [pokemones, setPokemones] = useState([])

  useEffect(() => { carga() }, [])
  let favs = JSON.parse(localStorage.getItem('fav')) || [];
  const [coincide, setCoincide] = useState(pokemones);
  useEffect(() => {
    setCoincide(pokemones)
    if (favs.length) {
      pokemones.map(poke => {
        for (let i = 0; i < favs.length; i++) {
         if (poke.id == favs[i].id) poke.flag = true ;
        }
      })
    }
  }, [pokemones])
  const filter = (text) => {
    text.length ?
      setCoincide(pokemones.filter(poke => poke.name.includes(text)))
      : setCoincide(pokemones);
  }
  return (<div className="contenedor">
    <Encabezado onSearch={filter} />
    <Cartilla pokemones={coincide} />
    <Footer />
  </div>)
}


export default Pokedex;
