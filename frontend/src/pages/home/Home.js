import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
	return (
        <>
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
            <section className="section_1 section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 getInTouch">
                            <h3 className="text-center fw-bold">Escríbenos, nos pondremos en contacto contigo con la mayor brevedad</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corrupti natus. Natus labore aliquid
                                debitis autem quisquam nostrum corrupti illo voluptate expedita, possimus id, recusandae error aperiam?
                                Sunt, cum quis.</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corrupti natus. Natus labore aliquid
                                debitis autem quisquam nostrum corrupti illo voluptate expedita, possimus id, recusandae error aperiam?
                                Sunt, cum quis.</p>
                        </div>
                        <div className="col-md-6">
                            <form className="form-message">
                                <div className="row">
                                    <div className="col-md-0">
                                        <label htmlFor="validacionNombreCompleto" className="form-label fs-5">Nombre completo</label>
                                        <input type="text" className="form-control" id="validacionNombreCompleto"
                                            formControlName="nombre_completo" required/>
                                        <div className="invalid-feedback">
                                            El campo Nombre completo es obligatorio.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-0">
                                        <label htmlFor="validacionEmail" className="form-label fs-5 mt-3">Email</label>
                                        <Link tabIndex="0" className="navbar-brand" role="button" data-bs-toggle="popover"
                                            data-bs-trigger="focus" title="Popover title"
                                            data-bs-content="And here's some amazing content. It's very engaging. Right?"><span
                                                className="bi bi-info-circle fs-6"></span></Link>
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" id="validacionEmail"
                                                aria-describedby="inputGroupPrepend" formControlName="email" required/>
                                            <div className="invalid-feedback">
                                                El campo Email es obligatorio.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5 mt-3">Comentarios</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" formControlName="comentario"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-lg btn-primary rounded-pill mt-3" type="button"><i className="bi bi-send"></i> Enviar comentario</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className="bottom_divider"></div>
            </section>
        </>

    );
}