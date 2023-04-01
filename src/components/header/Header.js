import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-3 shadow-sm" id="navbar">
                <div className="container-fluid">
                    <div>
                        <img className="img-logo" src="./images/logo.png" alt="logo haustier hub" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contáctanos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addclient">Crear cliente</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Iniciar sesión</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control-header me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
                            <button type="submit" className="btn-blue">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
