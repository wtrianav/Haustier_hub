import React from "react";

const IconsGridSection = () => {
	return (
		<section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi bi-calendar2-check m-auto text-primary"></i></div>
                            <h3 className="fw-bold">Nuestra Misión</h3>
                            <p className="fs-5 text-muted mb-0">Maximizar el potencial de nuestra empresa a través del trabajo en equipo.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi bi-eye-fill m-auto text-primary"></i></div>
                            <h3 className="fw-bold">Nuestra Visión</h3>
                            <p className="fs-5 text-muted mb-0">Ser una de las mejores empresas en la prestación de servicios a mascotas, reconocida por la innovación, simpleza y generación de valor de sus servicios, con una alta productividad y calidad humana de su equipo.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi bi-person-bounding-box m-auto text-primary"></i></div>
                            <h3 className="fw-bold">Nuestros valores</h3>
                            <p className="fs-5 text-muted mb-0">Honestidad, Lealtad, Respeto, Pasión por los desafíos, Superación Constante y Creatividad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default IconsGridSection;
