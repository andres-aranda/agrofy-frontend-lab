import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';

const Myfavs = lazy(() => import('./pages/MyFavs/MyFavs'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Login = lazy(()=>import('./pages/Login/Login'));
const Contact = lazy(()=>import('./components/Contact/Contact'));

/*{<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{margin:'auto',background:'rgb(255, 255, 255)', display:'block', shapeRendering:'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path fill="none" stroke="#e90c59" strokeWidth="8" strokeDasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
  <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"></animate></path></svg>}*/

const App = () => {
  return (
  <React.Fragment>
    <Router>
      <Header />
      <Suspense fallback={<div>loading</div>}>
        <Switch>     
          <Route exact path="/" component={Home} />}/>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/mifavs" component={Myfavs} />
          <Route exact path="/#HistoryHistory"/>
          <Route exact path="/#contact" component={Contact} />
          <Route exact path="/#videos"/>
          <Route exact path="/login" component={Login} />}/>
        </Switch>
      </Suspense>
    </Router>
  </React.Fragment>);
};

export default App;
