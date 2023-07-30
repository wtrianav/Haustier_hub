import React from "react";
import { Link } from "react-router-dom";
import PasswordToggle from "./PasswordToggle";

function RegisterForm() {

	return (
		<form
			action=""
			method="POST"
			id="formRegistro"
			className="formulario"
		>
			<div className="error-text "></div>
			<input
				type="text"
				placeholder="Nombre y Apellidos"
				className="input-text"
				name="nombre"
				autoComplete="off"
			/>
			<input
				type="text"
				placeholder="Correo electrónico"
				className="input-text"
				name="correo"
				autoComplete="off"
			/>
			<PasswordToggle />

			{/* Checkbox Personalizados */}
			<div className="contenedor-cbx">
				<label className="cbx animate">
					Me gustaría recibir notificaciones sobre productos
					<input
						type="checkbox"
						name="cbx_notificaciones"
                        defaultChecked={true} 
                        readOnly
					/>
					<span className="cbx-marca"></span>
				</label>
				<label className="cbx animate">
					He leído y acepto los
					<Link to="#" className="link">
						{" "}
						Términos y Condiciones
					</Link>
					<Link to="#" className="link">
						{" "}
						y la Política de privacidad de Haustier Hub
					</Link>
					<input type="checkbox" name="cbx_terminos" />
					<span
						className="cbx-marca"
					></span>
				</label>
			</div>
			<button className="btn" id="btnRegistro" type="button">
				Crear Cuenta
			</button>
		</form>
	);
}

export default RegisterForm;
