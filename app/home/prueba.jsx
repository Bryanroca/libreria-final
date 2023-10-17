import { useState } from "react";
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import "../prueba.css"
import telefono from '../../public/images/icono-telefeono.png';
import Image from "next/image";
import fondo from '../../public/images/fondo.png'
import '../globals.css';
import hamburger from '../../public/images/hamburger-2-svgrepo-com.svg'
const images = [
    "/images/Img_1.jpg",
    "http://escuelaisladepascua.cl/wp-content/uploads/sites/6/2019/10/Visita-a-la-Biblioteca-Municipal-de-Penco-11.jpg",
    "http://escuelaisladepascua.cl/wp-content/uploads/sites/6/2019/10/Visita-a-la-Biblioteca-Municipal-de-Penco-9.jpg",
    "http://escuelaisladepascua.cl/wp-content/uploads/sites/6/2019/10/Visita-a-la-Biblioteca-Municipal-de-Penco-1.jpg",
    "https://assets.diarioconcepcion.cl/2018/05/BIBLIOTECA-MUNICIPAL-850x400.jpg",
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    };
    const slidersVariants = {
        hover: {
            scale: 1,
            backgroundColor: "#ff00008e",
        },
    };
    const dotsVariants = {
        initial: {
            y: 0,
        },
        animate: {
            y: -10,
            scale: 1.2,
            transition: { type: "spring", stiffness: 1000, damping: "10" },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");

        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    const clic = () => {
        const footerElement = document.getElementById('titulo-principal');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="carousel" style={{
            backgroundImage: `url(${fondo.src})`,
        }}>
            <header>
                <div className='header-container'>
                    <ul className='links'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/socios">Socios</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                            <div className='container-button'>
                                <Image src={telefono} alt="Ícono de teléfono" className="w-4 h-4 mr-2" />
                                <p>412 455 506</p>
                            </div>
                        </button>
                    </ul>

                </div>

                <nav className="container-navbar">
                    <input type="checkbox" id='check' />
                    <label for="check" className="checkbtn">
                        <Image className="hamburger" alt="check" src={hamburger} height={50} width={50}></Image>
                    </label>
                    <ul className="pantalla">
                        <a><Link className="nav_link" href="/">Home</Link></a>
                        <a><Link className="nav_link" href="/socios">Socios</Link></a>
                        <a><Link className="nav_link" href="/contacto">Contacto</Link></a>
                    </ul>
                </nav>
            </header>
            <div className="carousel-container">
                <div className="carousel-images">
                    <AnimatePresence>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                        />
                    </AnimatePresence>
                    <div className="slide_direction">
                        <motion.div
                            variants={slidersVariants}
                            whileHover="hover"
                            className="left"
                            onClick={handlePrevious}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 96 960 960"
                                width="20"
                            >
                                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                            </svg>
                        </motion.div>
                        <motion.div
                            variants={slidersVariants}
                            whileHover="hover"
                            className="right"
                            onClick={handleNext}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 96 960 960"
                                width="20"
                            >
                                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
                <div className="carousel-indicator">
                    {images.map((_, index) => (
                        <motion.div
                            alt="imagen"
                            key={index}
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                            initial="initial"
                            animate={currentIndex === index ? "animate" : ""}
                            whileHover="hover"
                            variants={dotsVariants}
                        ></motion.div>
                    ))}
                </div>
            </div>
            <div className="container-button">

                <button className="btn" onClick={clic}>
                    <span>Algunos libros</span>
                </button>
            </div>
        </div>
    );
};
export default Carousel