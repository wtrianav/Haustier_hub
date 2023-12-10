export function validateInput(name, value) {
	// Regex for validation
	const documentRegex = /^[0-9]{6,11}$/;
	const nameRegex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#!%*?&])([A-Za-z\d$@$#!%*?&]|[^ ]){6,}$/;
	const phoneRegex = /^\d{0,10}[0-9]$/;
	const departmentRegex = /^.{3,}$/;
	const cityRegex = /^.{3,}$/;
	const addressRegex = /^.{3,}$/;

	// Validating the input value based on the input name and regex
	const validation = {
		documentNumber: name === 'documentNumber' ? documentRegex.test(value) : true,
		namePerson: name === 'namePerson' ? (value.length >= 3 &&  nameRegex.test(value)): true,
		lastNamePerson: name === 'lastNamePerson' ? (value.length >= 3 &&  nameRegex.test(value)) : true,
		emailAddress: name === 'emailAddress' ? emailRegex.test(value) : true,
		password: name === 'password' ? (value.length >= 6 &&  passwordRegex.test(value)) : true,
		phoneNumber: name === 'phoneNumber' ? (value.length >= 6 &&  phoneRegex.test(value)) : true,
		department: name === 'department' ? departmentRegex.test(value) : true,
		city: name === 'city' ? cityRegex.test(value) : true,
		address: name === 'address' ? addressRegex.test(value) : true,
	};

	// Setting the error message based on the validation
	const errorMessages = {
		documentNumber: validation.documentNumber ? '' : 'Debe contener entre 6 y 11 dígitos y ser solo números',
		namePerson: validation.namePerson ? '' : 'Debe ser al menos 3 caracteres y no se permiten números ni caracteres especiales',
		lastNamePerson: validation.lastNamePerson
			? ''
			: 'Debe ser al menos 3 caracteres y no se permiten números ni caracteres especiales',
		emailAddress: validation.emailAddress ? '' : 'Debe ser un email válido',
		password: validation.password
			? ''
			: 'Debe contener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial',
		phoneNumber: validation.phoneNumber ? '' : 'Debe contener entre 6 y 11 dígitos y ser solo números',
		department: validation.department ? '' : 'Debe ser al menos 3 caracteres',
		city: validation.city ? '' : 'Debe ser al menos 3 caracteres',
		address: validation.address ? '' : 'Debe ser al menos 3 caracteres',
	};

	return errorMessages[name];
}

// Validate the form based on the input values
export function validateForm() {
	const inputs = Array.from(document.querySelectorAll('input'));

	const isValid = inputs.every((input) => {
		return input.name === 'confirmPassword' || !validateInput(input.name, input.value);
	});

	return isValid;
}
