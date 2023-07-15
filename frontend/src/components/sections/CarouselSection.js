import React from "react";
import { Link } from "react-router-dom";

const CarouselSection = () => {
	return (
        <section className="carousel-header">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-slide1">
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 className="fw-bold">Consultas veterinarias virtuales.</h1>
                                <p className="lead">Solicita a través de nuestros canales de atención tu consulta veterinaria u orientación virtual completamente GRATIS.</p>
                                <p><Link className="btn btn-lg btn-primary btn-carousel" to="">Leer más</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-slide2">
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="fw-bold">Chequeos de control, promoción y prevención.</h1>
                                <p className="lead">Una vez te afilias recibes una visita domiciliaria de un médico veterinario para realizar un chequeo general, y se repite cada tres meses.</p>
                                <p><Link className="btn btn-lg btn-primary btn-carousel" to="#">Saber más</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-slide3">
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1 className="fw-bold">Beneficios trimestrales.</h1>
                                <p className="lead">Cada tres meses, durante las visitas de promoción y prevención, recibiras: Desparasitación interna y vitaminas GRATIS.</p>
                                <p><Link className="btn btn-lg btn-primary btn-carousel" to="#">Saber más</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
	);
};

export default CarouselSection;
