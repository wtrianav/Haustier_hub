import React from "react";
import { Link } from "react-router-dom";
import './backToTableLink.css'

export default function BackToTableLink({ className, to, text }) {
    
    return (
        <Link className={`btn ${className}`} to={to}>
            {text}
        </Link>
    );
}
