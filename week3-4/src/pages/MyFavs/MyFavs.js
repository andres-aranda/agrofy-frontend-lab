import React from 'react';
import "./MyFavs.css";
import Cartilla from '../../components/Cartilla/Cartilla';
import Footer from '../../components/Footer/Footer';

const MyFavs = (props) => {
let localPoke = JSON.parse(localStorage.getItem('fav'))||[];
  return(
  <div className='bloque'>
 <section className="portada" >  
    <p>My Fav </p>
  </section>
    <Cartilla pokemones={localPoke} />
    <Footer />
  </div>  
);}

export default MyFavs;
