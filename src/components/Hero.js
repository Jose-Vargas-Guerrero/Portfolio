import React from 'react'
import './Hero.css';
import logo from './images/logo.png';

function Hero() {
    return (
        <div className="container-fluid" id="hero">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo"/>
                    <ul>
                        <li><a href="#hero">home</a></li>
                        <li><a href="#nosotros">quienes somos</a></li>
                        <li><a href="#habilidades-container">habilidades</a></li>
                        <li><a href="#Portfolio">nuestros trabajos</a></li>
                    </ul>
            </div>
            <div className="content">
                <h1>Grupo JM</h1>
                <p>Creamos la solucion que necesitas para Automatiza tu Proyecto</p>
                <p>pidelo nosotros lo creamos.</p>
                <div>
                    <button type="button"><a href="#nosotros">Descubrenos</a></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
