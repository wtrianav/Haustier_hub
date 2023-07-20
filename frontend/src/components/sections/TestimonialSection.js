import React from 'react'
import testimonial1 from "../../assets/Testimonials/Testimonials-1.png";
import testimonial2 from "../../assets/Testimonials/Testimonials-2.png";
import testimonial3 from "../../assets/Testimonials/Testimonials-3.png";

function TestimonialSection() {
    return (
        <section className="testimonials text-center bg-white">
            <div className="container">
                <h2 className="mb-5 fw-bold">Lo que nuestros clientes dicen...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonial1} alt="testimonial1" />
                            <h5>Margaret Rodríguez.</h5>
                            <p className="fs-5 text-muted font-weight-light mb-0">"Todo es excelente, siempre responden cuando lo he necesitado y están super pendientes de mi cachorrito."</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonial2} alt="testimonial2" />
                            <h5>Fred Suárez.</h5>
                            <p className="fs-5 text-muted font-weight-light mb-0">"Gracias a ustedes mi gato ha estado mucho mejor, gracias a la atención médica y cuidados que le han brindado ha mejorado su calidad de vida."</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonial3} alt="testimonial3" />
                            <h5>Sarah Wilches.</h5>
                            <p className="fs-5 text-muted font-weight-light mb-0">"Me ha parecido un servicio muy bueno, con precios justos, se tiene buena interacción con las personas encargadas de brindar el servicio y me ha parecido muy práctico, el domicilio llegó a tiempo."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection;
