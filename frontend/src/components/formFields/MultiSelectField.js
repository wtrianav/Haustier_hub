import React from "react";
import Select from "react-select";
import './multiSelectField.css';

function MultiSelectField({ label, name, value, onChange, options }) {
	const handleChange = (selectedOptions) => {
		const selectedValues = selectedOptions.map((option) => option.value);
		onChange(selectedValues);
	};

	return (
		<div className="text-start mb-3 col-6">
			<label className="form-label fw-bold" htmlFor={name}>{label}</label>
			<Select
				name={name}
				value={options.filter((option) => value.includes(option.value))}
				onChange={handleChange}
				isMulti
				options={options}
			/>
		</div>
	);
}

export default MultiSelectField;
