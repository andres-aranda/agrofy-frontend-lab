import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';

const Myfavs = lazy(() => import('./pages/MyFavs/MyFavs'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));


const App = (props) => {
  let pokemones= props.pokemones;
  return (<React.Fragment>
    <Router>
      <Header />
      <Suspense fallback={<div><img url="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif"/></div>}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} pokemones={pokemones} />}/>
          <Route exact path="/pokedex" render={(props) => <Pokedex {...props} pokemones={pokemones} />} />
          <Route exact path="/mifavs" render={(props) => <Myfavs {...props} pokemones={pokemones} />} />
        </Switch>
      </Suspense>
    </Router>
  </React.Fragment>);
};

export default App;
