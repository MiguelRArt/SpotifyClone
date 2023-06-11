import React from "react";
import '../stylesheets/NavOptions.css';

function Options(props) {
  return( 
    <div className='Opt'>
      <ion-icon name={`${props.icono}-sharp`}></ion-icon>
      <label>{props.nickLabel} </label>
    </div>
  );
}

export default Options;
