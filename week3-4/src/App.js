import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';

const Myfavs = lazy(() => import('./pages/MyFavs/MyFavs'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Login = lazy(()=>import('./pages/Login/Login'));

const App = (props) => {
 let pokemones= props.pokemones;
  return (<React.Fragment>
    <Router>
      <Header />
      <Suspense fallback={<div><img url="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif"/></div>}>
        <Switch>     
          <Route exact path="/" component={Home} />}/>
          <Route exact path="/pokedex" render={(props) => <Pokedex {...props} pokemones={pokemones} />} />
          <Route exact path="/mifavs" render={(props) => <Myfavs {...props} pokemones={pokemones} />} />
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
