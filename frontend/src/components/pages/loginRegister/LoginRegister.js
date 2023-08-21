import React, { useState } from "react";
import LoginForm from "../../loginRegisterForm/LoginForm.js";
import RegisterForm from "../../loginRegisterForm/RegisterForm.js";
import "./loginRegister.css";


function LoginRegister() {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

	return (
        <div className="contenedor-login">
            <div className="contenedor-texto border rounded shadow">
                <div className="contenedor-form">
                <h1 className="titulo">¡Bienvenido a Haustier Hub!</h1>
                <p className="descripcion">
                    Ingresa a tu cuenta para disfrutar de tus beneficios y de las mejores promociones que tenemos para ti.
                </p>
                <ul className="tabs-links">
                    <li className={`tab-link ${activeTab === 0 ? "active" : ""}`} onClick={() => handleTabClick(0)}>Iniciar Sesión</li>
                    <li className={`tab-link ${activeTab === 1 ? "active" : ""}`} onClick={() => handleTabClick(1)}>Registrate</li>
                </ul>
                {activeTab === 0 ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;