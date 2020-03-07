import React, { useState } from 'react';
import './FavStatus.css'

const FavStatus = props => {
    let button;
props.flag ?
button = <button class="added" id="{props.id}" onclick="a(this.id)">Remove</button>:
button = <button class="btn" id="{props.id}" onclick="a(this.id)">Add to fav</button>;
return {button}
}


export default FavStatus;