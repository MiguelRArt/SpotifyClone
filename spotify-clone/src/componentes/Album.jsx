import React from "react";
import '../stylesheets/Album.css';

function Album(props){
  return(
      <a draggable='true' className='linkAlbum' href="#">
        <div className='albumContenedor'>
          <img draggable='false' className='img' src={require(`../imgs/${props.img}.png`)} />
          <h3 className='title'>{props.title}</h3>
          <p className='description'>{props.description}</p>
          <a target='blank' href={`https://www.youtube.com/results?search_query=${props.title}`}><ion-icon class='playIcon' name="play-circle"></ion-icon></a>
        </div>
      </a>
  );
}

export default Album;