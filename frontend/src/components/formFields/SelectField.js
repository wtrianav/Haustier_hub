import React from "react";
import "./selectField.css";

const SelectField = ({ label, name, value, onChange, options }) => {
	return (
		<div className="text-start mb-3 col">
			<label htmlFor={name} className="form-label fw-bold">
				{label}
			</label>
			<select
				className="form-select"
				name={name}
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectField;
