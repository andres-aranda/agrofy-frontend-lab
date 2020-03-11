import React from 'react';
import './Home.css';
import Portada from '../../components/Portada/Portada.js'
import History from '../../components/History/History'
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';

const Home = () => (

  <div className="home page">
<Portada />
<History />
<Video />
<Contact />
  </div>
);

export default Home;
