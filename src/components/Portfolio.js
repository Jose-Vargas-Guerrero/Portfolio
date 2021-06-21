import React from 'react';
import './Portfolio.css';
import weblink from './images/web-link.jpg';
import weblink1 from './images/Capture.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Portfolio() {
    return (
        <div className="container-fluid" id="Portfolio">
               <div className="container" id="portfolio-container">
                   <h1 className="portfolio-title" data-aos="zoom-in">Nuestros trabajos</h1>
                   <p className="portfolio-text" data-aos="slide-up">
                       Algunos de los trabajos que hemos hecho, como muestra de nuestro potencial de desarrollo.
                   </p>
               </div>
               <div className="contenedor-sitios">
                <div className="portfolio-box">
                        <div className="container-page" data-aos="zoom-in">
                        <div className="overflow">
                        <a href="https://jose-vargas-guerrero.github.io/web-portfolio/" target="_blank" rel="noreferrer"><img className="web-image" src={weblink} alt="web img" width="300px"/></a>
                        <p className="descripcion">Travexls</p>
                        </div>
                        </div>
                        {/* segunda pagina */}
                        <div className="container-page" data-aos="zoom-in">
                        <div className="overflow">
                        <a href="https://transportekariken.com/" target="_blank" rel="noreferrer"><img className="web-image" src={weblink1} alt="web img" width="300px"/></a>
                        <p className="descripcion">transporte kariken</p>
                        </div>
                        </div>
                </div>
               </div>   
        </div>
    )
}

export default Portfolio
