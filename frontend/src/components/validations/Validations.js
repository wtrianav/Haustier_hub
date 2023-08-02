import { useState } from "react";
import "./validations.css"


function validarNombre(nombre) {
	// Expresión regular para verificar que el nombre solo contiene letras, espacios, tildes y la letra "ñ"
	const regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;

	if (nombre.length >= 3 && regex.test(nombre)) {
		return {
			name: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			name: {
				error: true,
				message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
			},
		};
	}
}

function validarApellido(apellido) {
	// Expresión regular para verificar que el apellido solo contiene letras, espacios, tildes y la letra "ñ"
	const regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;

	if (apellido.length >= 3 && regex.test(apellido)) {
		return {
			lastName: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			lastName: {
				error: true,
				message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
			},
		};
	}
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        return {
            email: {
                error: false,
                message: "",
            },
        };
    } else {
        return {
            email: {
                error: true,
                message: "Debe ser una dirección de correo electrónico válida",
            },
        };
    }
}

function validarPassword(password) {
	// Longitud mínima de 6 caracteres
	if (password.length < 6) {
		return {
			password: {
				error: true,
				message: "La contraseña debe tener al menos 6 caracteres",
			},
		};
	}

	// Expresiones regulares para verificar carácter especial, mayúscula y número
	const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
	const hasUpperCase = /[A-Z]/.test(password);
	const hasNumber = /\d/.test(password);

	// Verificar si se cumplen todas las condiciones
	if (!hasSpecialCharacter || !hasUpperCase || !hasNumber) {
		return {
			password: {
				error: true,
				message:
					"La contraseña debe contener al menos un carácter especial, una mayúscula y un número",
			},
		};
	}

	// Si se cumplen todas las condiciones, la contraseña es válida
	return {
		password: {
			error: false,
			message: "",
		},
	};
}


function useLoginForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({
        name: {
            error: false,
			message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
		},
		lastName: {
            error: false,
			message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
		},
        email: {
            error: false,
            message: "Debe ser una dirección de correo electrónico válida",
        },
		password: {
            error: false,
			message: "La contraseña debe tener al menos 6 caracteres",
		},
	});

	const [hasError, setHasError] = useState({
		name: false,
		lastName: false,
		email: false,
		password: false,
		terms: false,
	});

    function handleNameChange(e) {
		const newName = e.target.value;
		setName(newName);
		const nameValidation = validarNombre(newName);
		setErrors((prevState) => ({
			...prevState,
			...nameValidation,
		}));

		setHasError((prevState) => ({
			...prevState,
			name: nameValidation.name.error,
		}));
	}

	function handleLastNameChange(e) {
		const newLastName = e.target.value;
		setLastName(newLastName);
		const lastNameValidation = validarApellido(newLastName);
		setErrors((prevState) => ({
			...prevState,
			...lastNameValidation,
		}));

		setHasError((prevState) => ({
			...prevState,
			lastName: lastNameValidation.lastName.error,
		}));
	}

	function handleEmailChange(e) {
		const newEmail = e.target.value;
		setEmail(newEmail);
		const emailValidation = validarEmail(newEmail);
		setErrors((prevState) => ({
			...prevState,
			...emailValidation,
		}));

		setHasError((prevState) => ({
			...prevState,
			email: emailValidation.email.error,
		}));
	}

	return {
        name,
        setName,
        lastName,
        setLastName,
		email,
		setEmail,
        password,
        setPassword,
		errors,
		hasError,
		setHasError,
		handleEmailChange,
        handleNameChange,
        handleLastNameChange,
	};
}

export { validarNombre, validarApellido, validarEmail, validarPassword, useLoginForm };
