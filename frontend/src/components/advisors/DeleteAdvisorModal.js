import React from 'react'

function DeleteAdvisorModal({ deleteAdvisor, selectedAdvisorId, setSelectedAdvisorId }) {
    
    return (
        <div className="modal fade" id="deleteAdvisorModal" tabIndex="-1" aria-labelledby="deleteAdvisorModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="deleteModal">Eliminar asesor</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Estás seguro que deseas eliminar el asesor con el id número {selectedAdvisorId}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                        <button className="btn btn-danger mx-1" data-bs-dismiss="modal"
                            onClick={() => {
                                deleteAdvisor(selectedAdvisorId); // Llama a la función deleteAdvisor con el ID del asesor
                                setSelectedAdvisorId(null); // Resetea el ID del asesor después de la eliminación
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

export default DeleteAdvisorModal;
