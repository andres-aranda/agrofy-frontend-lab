import React, { useState } from 'react';
import './FavStatus.css'

const FavStatus = props => {
    let button;
    let id = props.id;
    const [flag, setFlag] = useState(props.flag);
    const addRemove = () => {
        if (flag == props.id) {
            setFlag(undefined)
            var temp = localStorage.getItem('fav').split(',')
            temp = temp.filter(id => id !== props.id)
            localStorage.setItem('fav', temp)
        } else {
            setFlag(props.id)
            var temp = localStorage.getItem('fav').split(',')
            temp = temp.push(props.id)
            localStorage.setItem('fav', temp)
    }
}
    flag ?
        button = <button class="added" id={id} onClick={addRemove} >Remove</button> :
        button = <button class="btn" id={id} onClick={addRemove} >Add to fav</button>;

    return <div>{button}</div>
}
export default FavStatus;