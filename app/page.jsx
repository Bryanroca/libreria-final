'use client'
import React from 'react';
import './styles/home.css';
import { Carousel } from './home/prueba'
import { Welcome } from './home/welcome'
export default function Home() {


  return (
    <div className='container-container'>
      <Carousel />
      <Welcome />
    </div>
  );
}
