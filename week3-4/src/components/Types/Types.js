import React, { useState } from 'react';
import './Types.css'

const Types = props => {
  let CantTypes = props.types.length;
    let types = "Types: ";
    for (let i = 0; i < CantTypes; i++) {
      types += props.types[i].type.name + ", ";
};
return <p>{types}</p>
}


export default Types;