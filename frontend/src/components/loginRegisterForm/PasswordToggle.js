import React, { useState } from "react";
import { validarPassword } from "../validations/Validations";

function PasswordToggle({ hasError }) {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [eyeIcon, setEyeIcon] = useState("fas fa-eye");

	const toggleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
		setEyeIcon((prevIcon) =>
			prevIcon === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash"
		);
	};

	function handlePasswordChange(e) {
		const newPassword = e.target.value;
		setPassword(newPassword);

		// Validar el password y obtener el objeto de error
		const passwordValidation = validarPassword(newPassword);

		// Actualizar el estado con el mensaje de error
		setPasswordError(passwordValidation.password.message);
	}

	return (
		<>
			<div className={`error-text ${passwordError ? "active" : ""}`}>
				{passwordError && <p>{passwordError}</p>}
			</div>
			<div className="grupo-input">
				<input type={showPassword ? "text" : "password"} placeholder="Contraseña" name="password" className={`input-text clave ${hasError.password ? "has-error" : ""}`} value={password} onChange={handlePasswordChange} style={{border: passwordError ? "2px solid #ed0722" : "",}}/>
				<button type="button" className={`icono ${eyeIcon} mostrarClave`} onClick={toggleShowPassword}></button>
			</div>
		</>
	);
}

export default PasswordToggle;
