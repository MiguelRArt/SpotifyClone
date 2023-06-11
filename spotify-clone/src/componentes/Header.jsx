import React from "react";
import '../stylesheets/Header.css';

function Header(){
  return(
    <div className='principal'>
      <div className='leftHeader'>
        <ion-icon name="chevron-back-circle"></ion-icon>
        <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
      </div>

      <div className='rightHeader'>
        <a href="https://www.spotify.com/co-es/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F">Regístrate</a>
        <a href="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2F" class="iniciarSesion">Iniciar sesión</a>
      </div>
    </div>
  );
}

export default Header;