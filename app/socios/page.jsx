'use client'
import React from 'react';
import telefono from '../../public/images/icono-telefeono.png'
import Link from "next/link";
import Image from "next/image";
import fondo from "../../public/images/fondo.png"
import hamburger from '../../public/images/hamburger-2-svgrepo-com.svg'
import '../styles/socios.css'
import '../globals.css';
export default function Socios() {
    return (
        <div className="socios-container" style={{
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
            <div className="container-socios">
                <div className="container-socios-text">


                    <h1>¿Cómo hacerse Socio?</h1>
                    <h2>Requisitos para Préstamo de Libros a Domicilio</h2>

                    <div className="requisitos">
                        <h3>Para Adultos:</h3>
                        <div>
                            <li>Carnet de Identidad</li>
                            <li>Verificar domicilio con Boleta de luz o agua</li>
                            <li>O bien Certificado de Residencia</li>
                        </div>
                    </div>

                    <div className="requisitos">
                        <h3>Para Estudiantes:</h3>
                        <div>
                            <li>Carnet de Identidad</li>
                            <li>Verificar domicilio de los padres con Boleta de luz o agua</li>
                            <li>Certificado de Residencia o Certificado de Alumno regular</li>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
