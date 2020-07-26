// modules
import React from 'react';

// components

// css
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="ContainerAboutUs">
      <h1 className="TitlePage">A propos de NRGYBox</h1>
      <div className="containerBlock">
        <div className="block1">
          <div className="img1">
            <img src="https://zupimages.net/up/20/30/ficy.png" alt="" />
          </div>
          <div className="text1">
          NRGYBox exploite le potentiel de l’intelligence artificielle et de l’IOT pour un usage optimisé et durable
      de l’éclairage public.
          </div>
        </div>

        <div className="block2">
          <div className="img2">
            <img src="https://zupimages.net/up/20/30/a1au.png" alt="" />
          </div>
          <div className="text2">
          Notre solution se
      compose d’un boitier connecté à installer sur les candélabres, et d’un
      service de pilotage dynamique et intelligent de l’éclairage.
          </div>
        </div>

        <div className="block3">
          <div className="img3">
            <img src="https://zupimages.net/up/20/30/1hji.png" alt="" />
          </div>
          <div className="text3">
          Le service d’éclairage public comprend la mise à jour des périodes d’éclairage qui
      s’adapte à l’évolution des activités de la ville, et un service de
      maintenance prédictive sur le parc supervisé.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
