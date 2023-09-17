import React from 'react';

function DeleteCompanyModal({ deleteCompany, selectedCompanyId, setSelectedCompanyId }) {
    
    return (
        <div className="modal fade" id="deleteCompanyModal" tabIndex="-1" aria-labelledby="deleteCompanyModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="deleteModal">Eliminar empresa</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Estás seguro de que deseas eliminar la empresa con el ID número {selectedCompanyId}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                        <button className="btn btn-danger mx-1" data-bs-dismiss="modal"
                            onClick={() => {
                                deleteCompany(selectedCompanyId); // Llama a la función deleteCompany con el ID de la empresa
                                setSelectedCompanyId(null); // Resetea el ID de la empresa después de la eliminación
                            }}
                        >
                            ACEPTAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteCompanyModal;
