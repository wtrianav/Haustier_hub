import React from "react";
import { Link } from "react-router-dom";
import PasswordToggle from "./PasswordToggle";
import { useLoginForm } from "./Validations";

function RegisterForm() {

	const {
		name,
		lastName,
		email,
		errors,
		handleEmailChange,
		handleNameChange,
		handleLastNameChange,
	} = useLoginForm();

	return (
		<form action="" method="POST" id="formRegistro" className="formulario">
			<div className={`error-text ${errors.name.error ? "active" : ""}`}>
				{errors.name.error && <p>{errors.name.message}</p>}
			</div>
			<input type="text" placeholder="Nombres" className="input-text" name="nombre" value={name} onChange={handleNameChange} autoComplete="off" />
			<div className={`error-text ${errors.lastName.error ? "active" : ""}`}>
				{errors.lastName.error && <p>{errors.lastName.message}</p>}
			</div>
			<input type="text" placeholder="Apellidos" className="input-text" name="apellido" value={lastName} onChange={handleLastNameChange} autoComplete="off" />
			<div className={`error-text ${errors.email.error ? "active" : ""}`}>
				{errors.email.error && <p>{errors.email.message}</p>}
			</div>
			<input type="text" placeholder="Correo electrónico" className="input-text" name="correo" value={email} onChange={handleEmailChange} autoComplete="off" />
			<PasswordToggle />

			{/* Checkbox Personalizados */}
			<div className="contenedor-cbx">
				<label className="cbx animate">
					Me gustaría recibir notificaciones sobre productos
					<input type="checkbox" name="cbx_notificaciones" defaultChecked={true} readOnly />
					<span className="cbx-marca"></span>
				</label>
				<label className="cbx animate">
					He leído y acepto los
					<Link to="#" className="link">{" "}Términos y Condiciones</Link>
					<Link to="#" className="link">{" "}y la Política de privacidad de Haustier Hub
					</Link>
					<input type="checkbox" name="cbx_terminos" />
					<span className="cbx-marca"></span>
				</label>
			</div>
			<button className="btn" id="btnRegistro" type="button">
				Crear Cuenta
			</button>
		</form>
	);
}

export default RegisterForm;
