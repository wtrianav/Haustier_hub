import React from "react";
import "./inputField.css";

const InputField = ({ label, name, value, error, placeholder, onChange, icon, extraClass }) => {
	return (
		<div className={`text-start mb-3 col ${extraClass}`}>
			<label htmlFor={name} className="form-label fw-bold">
				{label}
			</label>
			<div className={`error-text ${error ? "active" : ""}`}>
				{error && <p>{error}</p>}
			</div>
			<div className="form-group-input">
				<input
					type="text"
					className={`form-control ${error ? "input-error" : ""}`}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
				/>
				{value && (
					<i className={error? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}></i>
				)}
				{icon}
			</div>
		</div>
	);
};

export default InputField;
