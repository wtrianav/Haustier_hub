import { useState } from "react";
import "./validations.css"


export function validarDocumento(documento) {
    const regex = /^[0-9]{6,11}$/;

    if (regex.test(documento)) {
        return {
            document: {
                error: false,
                message: "",
            },
        };
    } else {
        return {
            document: {
                error: true,
                message: "Debe contener entre 6 y 11 dígitos y ser solo números",
            },
        };
    }
}

export function validarNombre(nombre) {
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

export function validarApellido(apellido) {
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

export function validarEmail(email) {
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

export function validarPassword(password) {
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

export function validarTelefono(telefono) {
    // Expresión regular para verificar que el teléfono contiene solo números y no excede 10 dígitos
    const regex = /^[0-9]+$/;

    if (telefono.length >= 10 && regex.test(telefono)) {
        return {
            phone: {
                error: false,
                message: "",
            },
        };
    } else {
        return {
            phone: {
                error: true,
                message: "Debe contener solo números y tener un máximo de 10 dígitos",
            },
        };
    }
}

export function validarDepartamento(departamento) {
	if (departamento.length >= 3) {
		return {
			department: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			department: {
				error: true,
				message: "Deben ser al menos 3 caracteres",
			},
		};
	}
}

export function validarCiudad(ciudad) {
	if (ciudad.length >= 3) {
		return {
			city: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			city: {
				error: true,
				message: "Deben ser al menos 3 caracteres",
			},
		};
	}
}

export function validarDireccion(direccion) {
	if (direccion.length >= 3) {
		return {
			address: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			address: {
				error: true,
				message: "Deben ser al menos 3 caracteres",
			},
		};
	}
}


export function useLoginForm() {
	const [document, setDocument] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
	const [errors, setErrors] = useState({
		document: {
            error: false,
			message: "Debe contener solo números y tener un máximo de 11 dígitos",
		},
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
		phone: {
            error: false,
			message: "Debe contener solo números y tener un máximo de 10 dígitos",
		},
		department: {
            error: false,
			message: "Deben ser al menos 3 caracteres",
		},
		city: {
            error: false,
			message: "Deben ser al menos 3 caracteres",
		},
		address: {
            error: false,
			message: "Deben ser al menos 3 caracteres",
		},
	});

	const [hasError, setHasError] = useState({
		document: false,
		name: false,
		lastName: false,
		email: false,
		password: false,
		phone: false,
		department: false,
		city: false,
		address: false,
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
		document,
		setDocument,
        name,
        setName,
        lastName,
        setLastName,
		email,
		setEmail,
        password,
        setPassword,
		phone,
		setPhone,
		department,
		setDepartment,
		city,
		setCity,
		address,
		setAddress,
		errors,
		hasError,
		setHasError,
        handleNameChange,
        handleLastNameChange,
		handleEmailChange,
	};
}