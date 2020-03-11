import React from 'react';
import './Home.css';
import Portada from '../../components/Portada/Portada.js'
import History from '../../components/History/History'
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => (

  <div className="homePage">
<Portada />
<History />
<Video />
<Contact />
<Footer />
  </div>
);

export default Home;
