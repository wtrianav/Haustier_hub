import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class MultiSelectField extends React.Component {
	render() {
		const { options, name } = this.props;

		return <DropdownMultiselect options={options} name={name} />;
	}
}

export default MultiSelectField;
