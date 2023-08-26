import React from 'react'

function DeletePetModal( { deletePet, selectedPetId, setSelectedPetId }) {
    
	return (
        <div className="modal fade" id="deletePetModal" tabIndex="-1" aria-labelledby="deletePetModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="deletePetModal">Eliminar mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Estás seguro que deseas eliminar la mascota con el id número {selectedPetId}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                        <button className="btn btn-danger mx-1" data-bs-dismiss="modal"
                            onClick={() => {
                                deletePet(selectedPetId); // Llama a la función deletePet con el ID del cliente
                                setSelectedPetId(null); // Resetea el ID de la mascota después de la eliminación
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

export default DeletePetModal;