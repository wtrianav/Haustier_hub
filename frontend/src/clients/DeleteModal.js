import React from 'react'

function DeleteModal( { deleteClient, selectedClientId, setSelectedClientId }) {
    
	return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="exampleModalLabel">Eliminar cliente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Estás seguro que deseas eliminar el cliente con el id número {selectedClientId}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                        <button className="btn btn-danger mx-1" data-bs-dismiss="modal"
                            onClick={() => {
                                deleteClient(selectedClientId); // Llama a la función deleteClient con el ID del cliente
                                setSelectedClientId(null); // Resetea el ID del cliente después de la eliminación
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

export default DeleteModal