'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import '../styles/contactos.css';
import telefono from '../../public/images/icono-telefeono.png';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import fondo from '../../public/images/fondo.png'
import hamburger from '../../public/images/hamburger-2-svgrepo-com.svg'
import '../globals.css';
export default function Contacto() {
    const [buttonText, setButtonText] = useState('Send Email');

    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonText('Sending...');

        const serviceID = 'default_service';
        const templateID = 'template_0rgo99m';

        emailjs
            .sendForm(serviceID, templateID, event.target)
            .then(
                () => {
                    setButtonText('Send Email');
                    alert('¡El mensaje a sido enviado!');
                },
                (err) => {
                    setButtonText('Send Email');
                    alert(JSON.stringify(err));
                }
            );
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;

        script.onload = () => {
            emailjs.init(process.env.REACT_APP_SECRET);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="div-form" style={{
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
                        <Image className="hamburger" alt='hamburgesa' src={hamburger} height={50} width={50}></Image>
                    </label>
                    <ul className="pantalla">
                        <a><Link className="nav_link" href="/">Home</Link></a>
                        <a><Link className="nav_link" href="/socios">Socios</Link></a>
                        <a><Link className="nav_link" href="/contacto">Contacto</Link></a>
                    </ul>
                </nav>
            </header>
            <h1 className="title-form">Contactanos :)</h1>
            <div className='container-form'>

                <form id="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="from_name">Nombre</label>
                        <input type="text" name="from_name" id="from_name" />
                    </div>
                    <div className="field">
                        <label htmlFor="use_email">Email</label>
                        <input type="email" name="use_email" id="use_email" />
                    </div>
                    <div className="field">
                        <label htmlFor="use_message">Mensaje</label>
                        <textarea name="use_message" id="use_message" rows="4" cols="50"></textarea>
                    </div>

                    <input type="submit" className='btn' value={buttonText} />
                </form>
            </div>
        </div>
    );

}
