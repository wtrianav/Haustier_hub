import React from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./inputField.css";

const DateField = ({ label, name, selectedDate, onDateChange }) => {
    const handleDateChange = (date) => {
        onDateChange(name, date); // Llamar a la función onChange con el nombre del campo y la fecha seleccionada
    };

	return (
		<div className={`text-start mb-3 col`}>
			<label htmlFor={name} className="form-label fw-bold">
				{label}
			</label>
			<div className="form-group-input">
				<DateTime
					selected={selectedDate}
					onChange={handleDateChange}
                    inputProps={{ placeholder: "Selecciona una fecha", className: "form-control" }}
					timeFormat={false}
                    dateFormat="DD/MM/YYYY"
					name={name}
                    value={selectedDate ? selectedDate.format("DD/MM/YYYY") : ""} // Formatea la fecha
				/>
			</div>
		</div>
	);
};

export default DateField;
