import { useState } from "react";


function validarNombre(nombre) {
	if (nombre.length >= 3) {
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
				message: "Deben ser al menos 3 caracteres",
			},
		};
	}
}

function validarApellido(apellido) {
	if (apellido.length >= 3) {
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
				message: "Deben ser al menos 3 caracteres",
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
	if (password.length >= 6) {
		return {
			password: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			password: {
				error: true,
				message: "La contraseña debe tener al menos 6 caracteres",
			},
		};
	}
}


function useLoginForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({
        name: {
            error: false,
			message: "Deben ser al menos 3 caracteres",
		},
		lastName: {
            error: false,
			message: "Deben ser al menos 3 caracteres",
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

	const [hasError, setHasError] = useState({});

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
		handleEmailChange,
        handleNameChange,
        handleLastNameChange,
	};
}

export { validarNombre, validarApellido, validarEmail, validarPassword, useLoginForm };
