import React from "react";

export function ActionButtonGroup({ acceptText, cancelText, onCancel, onAccept }) {
    
    return (
        <>
            <button type="button" className="btn btn-primary btn-form" onClick={onAccept}>
                {acceptText}
            </button>
            <button type="button" className="btn btn-danger btn-form" onClick={onCancel}>
                {cancelText}
            </button>
        </>
    );
}
