import { useState } from "react";
import { validarNombre, validarApellido, validarEmail } from "./ClientValidations";

export function useLoginForm() {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
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
	});

	const [hasError, setHasError] = useState({
		name: false,
		lastName: false,
		email: false,
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
		errors,
		hasError,
		setHasError,
		handleNameChange,
		handleLastNameChange,
		handleEmailChange,
	};
}