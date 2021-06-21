import React from 'react';
import './nosotros.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function nosotros() {
    return (
        <div className="container-fluid nosotros" id="nosotros">
            <h1 className="nosotros-title" id="center" data-aos="zoom-in" data-aos-duration="500">Quienes somos</h1>
            <p className="nosotros-text" data-aos="slide-up" data-aos-duration="500">
            Grupo JM es una agencia dirigida por Desarrolladores Web que desarrollan soluciones avanzadas y profesionales que el cliente necesita, implementando las teconolgias mas recientes para un desarrollo optimo.
            </p>
        </div>
    )
}

export default nosotros
