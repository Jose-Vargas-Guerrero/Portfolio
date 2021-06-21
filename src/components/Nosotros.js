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
            <p className="nosotros-text" data-aos="slide-up" data-aos-duration="500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
            </p>
        </div>
    )
}

export default nosotros
