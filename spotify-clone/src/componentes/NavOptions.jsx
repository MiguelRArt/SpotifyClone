import React from "react";
import '../stylesheets/NavOptions.css';

function Options(props) {
  return( 
    <div className='Opt'>
      <ion-icon name={`${props.icono}-sharp`}></ion-icon>
      <a href='#'>{props.nickLabel} </a>
    </div>
  );
}

export default Options;
