import React from 'react';
import '../stylesheets/NavOptions.css';

function BackOptions() {
  return( 
    <div className='OptBehind'>
      <a href="https://www.spotify.com/co-es/legal/cookies-policy/" target='blank'>Cookies</a>
      <div className='btnLang'>
        <ion-icon name='globe-sharp'></ion-icon>
        <label>Español de Latinoamérica</label>
      </div>
    </div>
  );
}

export default BackOptions;