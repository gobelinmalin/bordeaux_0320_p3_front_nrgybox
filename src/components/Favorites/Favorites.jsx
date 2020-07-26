// modules
import React from 'react';

// css
import './Favorites.css';

const Favorites = () => {
  const local = localStorage.getItem('favorites');
  const arrFav = local ? JSON.parse(local) : [];
  const numberFav = arrFav.length;

  return (
    <div className="ContainerFavorites">
      <h1 className="TitlePage">Favoris</h1>
      <div className="ContainerNumberFav">
        <p>{numberFav}</p>
        <img src={require('../../icons/heartSolid.svg')} />
      </div>
      <div className="ContainerAllCardsFav">
        {arrFav.map((fav, index) => {
          return (
            <div key={index} className="ContainerCardFav">
              <p>{fav}</p>
              <img src={require('../../icons/trashOutline.svg')} />
            </div>
          )}
        )}
      </div>
    </div>
  );
};

export default Favorites;
