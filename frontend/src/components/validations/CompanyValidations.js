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

export function validarNombreEmpresa(empresa) {
	// Expresión regular para verificar que el nombre solo contiene letras, espacios, tildes y la letra "ñ"
	const regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;

	if (empresa.length >= 3 && regex.test(empresa)) {
		return {
			empresa: {
				error: false,
				message: "",
			},
		};
	} else {
		return {
			empresa: {
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