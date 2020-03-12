import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
const [mov,setMov]= useState(true)
    const checkHeader = () => {
        console.log('se movio')
        let position = Math.round(window.scrollY);
        position> 1? setMov(false):setMov(true);
    }
    window.addEventListener('scroll',checkHeader)

    const [showMenu, setShowMenu] = useState(false);
    const getMenuItems = () => <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/pokedex"><li>Pokedex</li></Link>
        <Link to="/mifavs"><li>MyFavs</li></Link>
        <Link to="/#videos"><li>Videos</li></Link>
        <Link to="/#contact"><li>Contact</li></Link>
        <Link to="/#Histoty"><li>History</li></Link>
        <Link to="/login"><li><button className='btnh'>Login</button></li></Link>
    </ul>;
//
    return <header className={mov ?'header':'movin'} >
        <div className="header__logo">
          <Link to="/">
              <img className="header__logo__image" src="/pokeball.png" alt="logo" />
              <h2>Pokedex</h2>    
          </Link>
        </div>
        <div className="header__menu__desktop">
            {getMenuItems()}
        </div>
        <div className="header__menu__mobile">
            <button className="header__menu__mobile__icon" onClick={() => setShowMenu(!showMenu)}>
              <svg height="24px" viewBox="0 -53 384 384" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
            </button>
            { showMenu ?
                <div className="header__menu__mobile__items" onClick={() => setShowMenu(false)}>
                    {getMenuItems()}
                </div>
                : null
            }
        </div>
    </header>
}

export default Header;