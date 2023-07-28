import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-3 shadow-sm" id="navbar">
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
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contáctanos</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Registrar
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Administradores</Link></li>
                                    <li><Link className="dropdown-item" to="#">Asesores</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/tableclients">Clientes</Link></li>
                                    <li><Link className="dropdown-item" to="#">Mascotas</Link></li>
                                    <li><Link className="dropdown-item" to="#">Empresas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/loginregister">Iniciar sesión</NavLink>
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
