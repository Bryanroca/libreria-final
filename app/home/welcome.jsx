import Image from 'next/image';
import React from 'react';
import sala from '../../public/images/sala.jpg';
import "../prueba.css";
import Img_1 from '../../public/images/book1.png'
import Img_2 from '../../public/images/book2.png'
import Img_3 from '../../public/images/book3.png'
import Img_4 from '../../public/images/book4.png'
import Img_5 from '../../public/images/book5.png'

export const Welcome = () => {

    return (
        <div className='container-bottom'>
            <h1 id='titulo-principal' className='titulo-principal'>Mira alguno de nuestros libros</h1>
            <div className='book-container'>

                <div className='book'>
                    <Image src={Img_1} alt='imagen1' width={230} height={500} />
                    <p>Embárcate en un viaje intelectual fascinante más allá de los límites de la moral y la filosofía convencionales. Descubre las profundidades de la mente humana y la búsqueda incansable de la verdad en Más allá del bien y del mal de Friedrich Nietzsche. Una exploración audaz que desafía las normas y te invita a cuestionar todo lo que creías saber sobre la moralidad y la ética. ¿Estás listo para adentrarte en el abismo de la filosofía?</p>
                </div>
                <div className='book'>
                    <Image src={Img_2} alt='imagen2' width={300} height={500} />
                    <p>Explora el misterio de nuestra existencia en Somos Polvo de Estrellas, un viaje asombroso que revela cómo cada átomo en tu cuerpo se forjó en el núcleo ardiente de las estrellas. Desde la creación del universo hasta la formación de la vida en la Tierra, esta fascinante historia te hará apreciar aún más la maravilla de nuestra conexión cósmica.</p>
                </div>
                <div className='book'>
                    <Image src={Img_3} alt='imagen3' width={300} height={500} />
                    <p>La Riqueza de las Naciones, escrito por Adam Smith en 1776, es un tratado revolucionario que defiende la idea de que cuando las personas buscan sus intereses personales en un mercado libre y competitivo, de manera no regulada, esto puede conducir al bienestar general de la sociedad, gracias a lo que Smith llamó la mano invisible. Esta obra influyente promueve la competencia, la división del trabajo y el libre comercio como pilares fundamentales para el crecimiento económico y la prosperidad de las naciones</p>
                </div>
                <div className='book'>
                    <Image src={Img_4} alt='image4' width={300} height={500} />
                    <p>Descubre el fascinante mundo de la teoría de la mente en este libro de Henry Wellman. Explora cómo los niños desarrollan una comprensión sofisticada de los estados mentales desde una edad temprana y cómo esta habilidad se desarrolla con el tiempo. Con un enfoque en la evolución, las bases cerebrales y conceptos más avanzados, este libro ofrece una visión profunda pero accesible de un tema fundamental en psicología y desarrollo cognitivo.</p>
                </div>
                <div className='book'>
                    <Image src={Img_5} alt='imagen5' width={300} height={500} />
                    <p>Descubre el inquietante misterio que se oculta en el Cementerio de Animales, una novela de Stephen King. Adéntrate en un lugar donde los secretos enterrados nunca descansan en paz y donde las decisiones pueden tener consecuencias mortales. Una historia de horror que te hará cuestionar hasta dónde llegarías por amor y la naturaleza de la muerte misma.</p>
                </div>

                <div className='container-images'>
                    <div className="container-text">
                        <h1>Bienvenido a la Biblioteca Pública de Penco</h1>
                        <p><strong>Dirección</strong>: Freire 600, Penco</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3197.36588802998!2d-72.99650386680219!3d-36.73778772918302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbibliotec%C4%83%20near%20Penco!5e0!3m2!1sen!2scl!4v1696279974716!5m2!1sen!2scl"
                        width="400"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        className='mapa'
                        title="Mapa de la Biblioteca Pública de Penco"
                    ></iframe>
                </div>

            </div>
            <footer className="pie-pagina">
                <div className="grupo-1">
                    <div className="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>La Biblioteca de Penco es un espacio cultural y educativo enclavado en el corazón de la comunidad de Penco. Este acogedor refugio del conocimiento y la imaginación se erige como un faro de sabiduría, donde las palabras y las historias se entrelazan para nutrir las mentes y los corazones de quienes la visitan.</p>
                    </div>
                    <div className="box">
                        <h2>SIGUENOS</h2>
                        <div className="red-social">
                            <a href="https://www.facebook.com/profile.php?id=100057180321020&locale=es_ES&paipv=0&eav=AfYDyua_ag6rbsXR4pQucq56G7ZYwR4KyfEhHb8rhDsPGPqNNkgG3bpEjEvUM6m8y6w" className="fa fa-facebook"></a>
                            <a href="https://www.instagram.com/bibliotecapenco/?hl=en" className="fa fa-instagram"></a>
                            <a href="https://twitter.com/penco_de?lang=ar-x-fm" className="fa fa-twitter"></a>
                            <a href="https://www.youtube.com/@bibliotecapenco9423/about" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};
