import React, { useState } from 'react';
import "./MyFavs.css";
import Cartilla from '../../components/Cartilla/Cartilla';
import Footer from '../../components/Footer/Footer';

const MyFavs = (props) => {

const [localPoke,setLocalPoke] = useState( JSON.parse(localStorage.getItem('fav'))||[]);

const act = () => {
  setLocalPoke(JSON.parse(localStorage.getItem('fav')))
} 
return(

  <div className='bloque'>
 <section className="portada" >  
    <p>My Fav </p>
  </section>
    <Cartilla pokemones={localPoke} fav={act} />
    <Footer />
  </div>  
);}

export default MyFavs;
