import React from "react";
import { Link } from "react-router-dom";

export default function ButtonForm({ type, text, onClick, to, className }) {
	if (to) {
		return (
			<Link to={to} className={`btn ${className}`}>
				{text}
			</Link>
		);
	}

	return (
		<button type={type} className={`btn ${className}`} onClick={onClick}>
			{text}
		</button>
	);
}
