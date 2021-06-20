import React from 'react';
import './Contactecnos.css';

function Contactenos() {
    return (
        <div className="container-fluid" id="contactenos-container">
            <div className="row">
                <div className="col col-12" id="contactenos-text">
                    <h1 className="t1">find out more about us</h1>
                    <h2 className="t2">or tell us about you.   </h2>
                </div>
                <div className="col col-12" id="informacion">
                <p className="informacion">Email</p>
                <a className="informacion" href="prevent-default">emailexample@gmail.com</a>
                    <p className="informacion">locacion</p>
                    <p className="informacion">Choluteca - Honduras</p>
                    <p className="informacion">Siguenos En</p>
                    <a href="https://www.instagram.com/josevargas3117/"><i class="fab fa-instagram informacion"></i></a>
                    <p className="informacion">©Grupo JM. Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Contactenos
