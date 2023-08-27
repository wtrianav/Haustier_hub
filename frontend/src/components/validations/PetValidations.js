

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

export function validarRaza(raza) {
	// Expresión regular para verificar que el nombre solo contiene letras, espacios, tildes y la letra "ñ"
	const regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;

	if (raza.length >= 3 && regex.test(raza)) {
		return {
			breed: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			breed: {
				error: true,
				message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
			},
		};
	}
}

export function validarColor(color) {
	// Expresión regular para verificar que el nombre solo contiene letras, espacios, tildes y la letra "ñ"
	const regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;

	if (color.length >= 3 && regex.test(color)) {
		return {
			color: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			color: {
				error: true,
				message: "Deben ser al menos 3 caracteres y no se permiten números ni caracteres especiales",
			},
		};
	}
}
