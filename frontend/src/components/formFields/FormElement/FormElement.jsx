import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { validateInput } from '../../validations/InputsValidations';
import './FormElement.css';

const FormElement = forwardRef(
	({ label, name, placeholder, type, icon, selectOptions, onChange, rows, initialValue, extraClass, disabled }, ref) => {
		const [value, setValue] = useState('');
		const [error, setError] = useState('');

		const elementId = label.replace(/\s+/g, '-').toLowerCase();

		useImperativeHandle(ref, () => ({
			resetInput: () => {
				setValue('');
				setError('');
			},
		}));

		// Function to handle changes to the input/textarea value
		const handleChange = (e) => {
			const { value } = e.target;

			setValue(value);
			setError(validateInput(name, value));

			onChange(value, e);
		};

		useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);

		const inputTypes = {
			textarea: (
				<textarea
					title={elementId}
					className={`form-control ${error ? 'input-error' : ''}`}
					name={name}
					id={elementId}
					value={value}
					onChange={handleChange}
					rows={rows}
					disabled={disabled}
				/>
			),
			select: selectOptions ? (
				<select
					title={elementId}
					className={`form-select ${error ? 'input-error' : ''}`}
					name={name}
					id={elementId}
					value={value}
					onChange={handleChange}
					disabled={disabled}
				>
					{selectOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : null,
			default: (
				<input
					title={elementId}
					className={`form-control ${error ? 'input-error' : ''}`}
					placeholder={placeholder}
					name={name}
					type={type}
					id={elementId}
					value={value}
					onChange={handleChange}
					disabled={disabled}
				/>
			),
		};

		return (
			<div className={`text-start mb-3 col ${extraClass}`}>
				<label htmlFor={elementId} className='form-label fw-bold'>
					{label}
				</label>
				<div className='form-group-input'>
					{inputTypes[type] || inputTypes.default}
					<i
						className={
							type !== 'select'
								? error
									? 'fa-solid fa-circle-xmark error-icon'
									: 'fa-solid fa-circle-check success-icon'
								: ''
						}
					></i>
				</div>

				<div className={`error-text ${error ? 'active' : ''}`}>{error && <p>{error}</p>}</div>
			</div>
		);
	}
);

export default FormElement;
