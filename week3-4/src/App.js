import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';

const Myfavs = lazy(() => import('./pages/MyFavs/MyFavs'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Login = lazy(()=>import('./pages/Login/Login'));

let pokemones = [];
//let fav = JSON.parse(localStorage.getItem("fav")) || [];
//Lamada a la API

const App = () => {
  return (
  <React.Fragment>
    <Router>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>     
          <Route exact path="/" component={Home} />}/>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/mifavs" component={Myfavs} />
          <Route exact path="/history"/>
          <Route exact path="/contact"/>
          <Route exact path="/videos"/>
          <Route exact path="/login" component={Login} />}/>
        </Switch>
      </Suspense>
    </Router>
  </React.Fragment>);
};

export default App;
