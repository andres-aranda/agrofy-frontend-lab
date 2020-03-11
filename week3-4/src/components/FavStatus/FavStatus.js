import React, { useState , useEffect} from 'react';
import './FavStatus.css'

const FavStatus = props => {

    let id = props.id;
    const [flag, setFlag] = useState(props.flag);
    const addRemove = () => {
        if (flag) {
            setFlag(false)

            let temp = JSON.parse(localStorage.getItem('fav'))||[];
            let aux = temp.filter(id => id !== props.id);
            localStorage.setItem('fav',JSON.stringify(aux));
        } else {
            setFlag(true);
            let temp = JSON.parse(localStorage.getItem('fav')) || [];
            temp.push(props.id);
            localStorage.setItem('fav', JSON.stringify(temp));
        }
    }

return <div>{ flag ? <button className="added" id={id} onClick={addRemove} >Remove</button> :
<button className="btn" id={id} onClick={addRemove} >Add to fav</button>}</div>
}
export default FavStatus;