import React, { useState } from 'react';
import './Types.css'

const Types = props => {
    let types = "Types: ";
    for (let i = 0; i < props.types.length; i++) {
      types += props.types[i].type.name + " ";
};
return <p>{types}</p>
}


export default Types;