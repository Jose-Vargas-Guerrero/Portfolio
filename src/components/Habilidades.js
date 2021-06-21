import React from 'react';
import './Habilidades.css';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/java-script.png';
import php from './images/php.png';
import fluter from './images/flutter.png';
import firebase from './images/firebase.png';
import sql from './images/sql-server.png';
import python from './images/py.png';
import c from './images/c#.png';
import react from './images/react.png';
import bootstrap from './images/bootstrap.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




function Habilidades() {
    return (
        <div className="container-fluid" id="habilidades-container">
            <div className="banner">
                <h1 className="banner-title" data-aos="zoom-in" data-aos-duration="600">Habilidades</h1>
            </div>
            {/* habilidades */}
            <div className="container-fluid" id="habilidad-container">
                <div className="habilidad" data-aos="zoom-in">
                    <img src={html} alt="html icon" height="60px"/>
                    <p>HTML</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={css} alt="html icon" height="60px"/>
                    <p>CSS</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={javascript} alt="html icon" height="60px"/>
                    <p>Java Script</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={php} alt="html icon" height="60px"/>
                    <p>PHP</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={fluter} alt="html icon" height="60px"/>
                    <p>Flutter</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={firebase} alt="html icon" height="60px"/>
                    <p>Firebase</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={sql} alt="html icon" height="60px"/>
                    <p>MySQL</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={python} alt="html icon" height="60px"/>
                    <p>Python</p>
                </div>
                <div className="habilidad" data-aos="zoom-in"> 
                    <img src={c} alt="html icon" height="60px"/>
                    <p>C#</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={react} alt="html icon" height="60px"/>
                    <p>React</p>
                </div>
                <div className="habilidad" data-aos="zoom-in">
                    <img src={bootstrap} alt="html icon" height="60px"/>
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>
    )
}

export default Habilidades
