import React, { useState } from "react";

function PasswordToggle() {
	const [showPassword, setShowPassword] = useState(false);
	const [eyeIcon, setEyeIcon] = useState("fas fa-eye");

	const toggleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
		setEyeIcon((prevIcon) =>
			prevIcon === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash"
		);
	};

	return (
		<div className="grupo-input">
			<input type={showPassword ? "text" : "password"} placeholder="Contraseña" name="password" className="input-text clave" />
			<button type="button" className={`icono ${eyeIcon} mostrarClave`} onClick={toggleShowPassword}></button>
		</div>
	);
}

export default PasswordToggle;
