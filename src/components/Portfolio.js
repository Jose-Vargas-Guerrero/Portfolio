import React from 'react';
import './Portfolio.css';
import weblink from './images/web-link.jpg';
import weblink1 from './images/Capture.JPG';

function Portfolio() {
    return (
        <div className="container-fluid" id="Portfolio">
               <div className="container" id="portfolio-container">
                   <h1 className="portfolio-title">Nuestros trabajos</h1>
                   <p className="portfolio-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layou more-or-less normal distribution</p>
               </div>
               <div className="contenedor-sitios">
                <div className="portfolio-box">
                        <div className="container-page">
                        <div className="overflow">
                        <a href="https://jose-vargas-guerrero.github.io/web-portfolio/" target="_blank" rel="noreferrer"><img className="web-image" src={weblink} alt="web img" width="300px"/></a>
                        </div>
                        </div>
                        {/* segunda pagina */}
                        <div className="container-page">
                        <div className="overflow">
                        <a href="https://transportekariken.com/" target="_blank" rel="noreferrer"><img className="web-image" src={weblink1} alt="web img" width="300px"/></a>
                        </div>
                        </div>
                </div>
               </div>   
        </div>
    )
}

export default Portfolio
