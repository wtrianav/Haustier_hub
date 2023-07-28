import React from "react";
import { Link } from "react-router-dom";


function LoginForm() {
	return (
        <form action="" method="POST" id="formLogin" className="formulario active">
            <div className="error-text">
                <p>aqui los errores del formulario</p>
            </div>
            <input type="text" placeholder="Correo electrónico" className="input-text" name="correo" autoComplete="off"/> 
            <div className="grupo-input">
                <input type="password" placeholder="Contraseña" name="password" className="input-text clave"/>
                <button type="button" className="icono fas fa-eye mostrarClave"></button>  
            </div>
            <Link href="#" className="link">¿Ovidaste tu contraseña?</Link>
            <button className="btn" id="btnLogin" type="button">Iniciar Sesión</button>
        </form>
    );
}

export default LoginForm;
