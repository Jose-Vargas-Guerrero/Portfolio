import React from 'react';
import './Contactecnos.css';

function Contactenos() {
    return (
        <div className="container-fluid" id="contactenos-container">
            <div className="row">
                <div className="col col-12 col-lg 6" id="contactenos-text">
                    <h1 className="t1">Descubra mas sobre nosotros</h1>
                    <h2 className="t2">O cuentenos su propuesta</h2>
                </div>
                <div className="col col-12 col-lg-6" id="informacion">
                <p className="informacion">Email</p>
                <a className="informacion" href="mailto:josevgdesarrollador@gmail.com">josevgdesarrollador@gmail.com</a>
                <a className="informacion" href="mailto:Luisdejesus200122@gmail.com">Luisdejesus200122@gmail.com</a>
                    <p className="informacion">locacion</p>
                    <p className="informacion">Choluteca - Honduras</p>
                    <p className="informacion">Siguenos En</p>
                    <a href="https://www.instagram.com/josevargas3117/" target="_blank" rel="noreferrer"><i class="fab fa-instagram informacion"></i></a>
                    <p className="derechos">© Grupo JM. Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Contactenos
