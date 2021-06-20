import React from 'react'
import './Hero.css';
import { motion } from "framer-motion";

const image = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition:{
            duration: 1
        }
    }
}

const title = {
    hidden: {
        y: "100vh"
    },
    visible:{
        y: 0,
        transition:{
            type: "tween",
            duration: 1.3,
        }
    }
}

const appear = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition:{
            delay: 1.5,
            duration: 1 
        }
    }
}

function Hero() {
    return (
        <div className="container-fluid" id="hero-container">
            <div className="row">
                <div className="col order-1" id="content-col">
                    <motion.h3 variants={title} initial="hidden" animate="visible" className="name">Grupo JM</motion.h3>
                    <motion.div variants={appear} initial="hidden" animate="visible">
                    <h1 className="title">we enginer ecomerce</h1>
                    <p className="sub-text">orem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 150
                     Ipsum.</p>
                     <a href="#nosotros" className="btn btn-dark">Descubre</a>
                    </motion.div>
                </div>
                <motion.div variants={image} initial="hidden" animate="visible" className="col order-2 col-lg-5" id="col-img">
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
