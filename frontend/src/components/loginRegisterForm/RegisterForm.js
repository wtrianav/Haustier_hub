import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordToggle from "./PasswordToggle";
import { useLoginForm } from "../validations/Validations";

function RegisterForm() {
	const {
		name,
		lastName,
		email,
		errors,
		hasError,
		setHasError,
		handleEmailChange,
		handleNameChange,
		handleLastNameChange,
	} = useLoginForm();

	const [acceptedTerms, setAcceptedTerms] = useState(false);

	const handleAcceptTermsChange = () => {
		setAcceptedTerms(!acceptedTerms);
		// Eliminar la clase .cbx-error si el checkbox se marca
		if (acceptedTerms) {
		  document.querySelector(".contenedor-cbx").classList.remove("cbx-error");
		}
	};

	const handleCreateAccount = () => {
		if (!acceptedTerms) {
			document.querySelector(".contenedor-cbx").classList.add("cbx-error");
			setHasError((prevState) => ({
				...prevState,
				terms: true,
			}));
		} else {
			alert("Cuenta creada exitosamente!");
		}
	};

	return (
		<form action="" method="POST" id="formRegistro" className="formulario">
			<div className="">
				{hasError.terms && (
					<div className="error-text active">
						<p>Por favor acepta los términos y condiciones</p>
					</div>
				)}
			</div>
			<div className={`error-text ${errors.name.error ? "active" : ""}`}>
				{errors.name.error && <p>{errors.name.message}</p>}
			</div>
			<input
				type="text"
				placeholder="Nombres"
				className={`input-text ${hasError.name ? "has-error" : ""}`}
				name="nombre"
				value={name}
				onChange={handleNameChange}
				autoComplete="off"
			/>
			<div className={`error-text ${errors.lastName.error ? "active" : ""}`}>
				{errors.lastName.error && <p>{errors.lastName.message}</p>}
			</div>
			<input
				type="text"
				placeholder="Apellidos"
				className={`input-text ${hasError.lastName ? "has-error" : ""}`}
				name="apellido"
				value={lastName}
				onChange={handleLastNameChange}
				autoComplete="off"
			/>
			<div className={`error-text ${errors.email.error ? "active" : ""}`}>
				{errors.email.error && <p>{errors.email.message}</p>}
			</div>
			<input
				type="text"
				placeholder="Correo electrónico"
				className={`input-text ${hasError.email ? "has-error" : ""}`}
				name="correo"
				value={email}
				onChange={handleEmailChange}
				autoComplete="off"
			/>
			<PasswordToggle hasError={hasError} />

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
					<input
						type="checkbox"
						name="cbx_terminos"
						checked={acceptedTerms}
						onChange={handleAcceptTermsChange}
					/>
					<span
						className={`cbx-marca ${
							acceptedTerms ? "animate" : ""
						}`}
					></span>
				</label>
			</div>
			<button
				className="btn"
				id="btnRegistro"
				type="button"
				onClick={handleCreateAccount}
			>
				Crear Cuenta
			</button>
		</form>
	);
}

export default RegisterForm;
