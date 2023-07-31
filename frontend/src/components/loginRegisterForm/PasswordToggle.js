import React, { useState } from "react";
import { validarPassword } from "./Validations";

function PasswordToggle() {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [eyeIcon, setEyeIcon] = useState("fas fa-eye");
	const [passwordError, setPasswordError] = useState("");

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
				<input type={showPassword ? "text" : "password"} placeholder="Contraseña" name="password" className="input-text clave" value={password} onChange={handlePasswordChange}/>
				<button type="button" className={`icono ${eyeIcon} mostrarClave`} onClick={toggleShowPassword}></button>
			</div>
		</>
	);
}

export default PasswordToggle;
