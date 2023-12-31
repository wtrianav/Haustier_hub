import React from "react";
import { Link } from "react-router-dom";
import PasswordToggle from "./PasswordToggle";
import { useLoginForm } from "../validations/LoginRegisterValidations";

function LoginForm() {

	const {
		email,
		errors,
		hasError,
		handleEmailChange,
	} = useLoginForm();

	return (
		<form action="" method="POST" id="formLogin" className="formulario active">
			<div className={`error-text ${errors.email.error ? "active" : ""}`}>
				{errors.email.error && <p>{errors.email.message}</p>}
			</div>
			<input type="text" placeholder="Correo electrónico" className={`input-text ${hasError.email ? "has-error" : ""}`} name="correo" value={email} onChange={handleEmailChange} aria-invalid={errors.email.error ? "true" : "false"} autoComplete="off" />
			<PasswordToggle hasError={hasError} />
			<Link href="#" className="link">
				¿Ovidaste tu contraseña?
			</Link>
			<button className="btn" id="btnLogin" type="button">
				Iniciar Sesión
			</button>
		</form>
	);
}

export default LoginForm;
