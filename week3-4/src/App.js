import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import { useState } from 'react';

const Myfavs = lazy(() => import('./pages/MyFavs/MyFavs'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Login = lazy(()=>import('./pages/Login/Login'));
const Contact = lazy(()=>import('./components/Contact/Contact'));

const ThemeContext = React.createContext('light');

const App = () => {
  return (
    
  <React.Fragment>
    <Router><ThemeContext.Provider value="dark">
      <Header />
      <Suspense fallback={
      <div id='espera'> <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDov%0D%0AL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5%0D%0AL3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1%0D%0ANSk7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87IiB3aWR0aD0iMjAwcHgi%0D%0AIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlv%0D%0APSJ4TWlkWU1pZCI+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U5MGM1OSIgc3Ryb2tlLXdp%0D%0AZHRoPSI4IiBzdHJva2UtZGFzaGFycmF5PSI0Mi43NjQ4MjEzNzA0NDI3MSA0Mi43NjQ4MjEzNzA0%0D%0ANDI3MSIgZD0iTTI0LjMgMzBDMTEuNCAzMCA1IDQzLjMgNSA1MHM2LjQgMjAgMTkuMyAyMGMxOS4z%0D%0AIDAgMzIuMS00MCA1MS40LTQwIEM4OC42IDMwIDk1IDQzLjMgOTUgNTBzLTYuNCAyMC0xOS4zIDIw%0D%0AQzU2LjQgNzAgNDMuNiAzMCAyNC4zIDMweiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHlsZT0i%0D%0AdHJhbnNmb3JtOnNjYWxlKDAuOCk7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHgiPgogIDxhbmlt%0D%0AYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiByZXBlYXRDb3VudD0iaW5kZWZp%0D%0Abml0ZSIgZHVyPSIxcyIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwOzI1Ni41ODg5MjgyMjI2NTYy%0D%0ANSI+PC9hbmltYXRlPgo8L3BhdGg+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xv%0D%0AYWRpbmcuaW8vIC0tPjwvc3ZnPg=='/>
      </div>}>
        <Switch>     
          <Route exact path="/" component={Home} />}/>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/mifavs" component={Myfavs} />
          <Route exact path="/#HistoryHistory"/>
          <Route exact path="/#contact" component={Contact} />
          <Route exact path="/#videos"/>
          <Route exact path="/login" component={Login} />}/>
        </Switch>
      </Suspense> </ThemeContext.Provider>
    </Router>
  </React.Fragment>
 );
};

export default App;
