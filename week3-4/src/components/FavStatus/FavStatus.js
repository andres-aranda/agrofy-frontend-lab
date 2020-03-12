import React, { useState , useEffect} from 'react';
import './FavStatus.css'

const FavStatus = props => {
    const [flag, setFlag] = useState(props.pokemon.flag);
    let id = props.pokemon.id;

    const addRemove = () => {
        if (flag) {
            setFlag(false)
            let temp = JSON.parse(localStorage.getItem('fav'))||[];
            let aux = temp.filter(poke => poke.id !== props.pokemon.id);
            localStorage.setItem('fav',JSON.stringify(aux));
            if(props.fav){props.fav()};
        } else {
            setFlag(true);
            let temp = JSON.parse(localStorage.getItem('fav')) || [];
            let aux = props.pokemon;
            aux.flag=true;
            temp.push(aux);
            localStorage.setItem('fav', JSON.stringify(temp));
        }
    }

return <div>{ flag ? <button className="added" onClick={addRemove} >Remove</button> :
<button className="btn"  onClick={addRemove} >Add to fav</button>}</div>
}
export default FavStatus;