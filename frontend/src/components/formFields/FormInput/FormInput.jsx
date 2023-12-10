import { forwardRef } from 'react';
import './FormInput.css';
import FormElement from '../FormElement/FormElement';

const FormInput = forwardRef((props, ref) => {
	return <FormElement {...props} ref={ref} />;
});

export default FormInput;
