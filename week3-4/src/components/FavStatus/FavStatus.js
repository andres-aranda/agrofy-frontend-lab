import React, { useState } from 'react';
import './FavStatus.css'

const FavStatus = props => {
    let button;
    let id = props.id;
props.flag ?
button = <button class="added" id={id} >Remove</button>:
button = <button class="btn" id={id} >Add to fav</button>;

return  <div>{button}</div>
}


export default FavStatus;