import React from 'react';

export default function Footer() {
    return (
        <div className="footer bg-white fixed-bottom">
            <div className="mx-5 my-3">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto d-none d-sm-none d-md-block">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="#!">Nosotros</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contáctanos</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Términos de uso</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Política de privacidad</a></li>
                        </ul>
                        <p className="text-muted mb-4 mb-lg-0">&copy; 2021-2022 Todos los derechos reservados</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                        <p className="text-muted mb-4 mb-lg-0 d-block d-sm-block d-md-none">&copy; 2021–2022 Todos los
                            derechos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
