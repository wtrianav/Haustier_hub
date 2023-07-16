import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormContactSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
		event.preventDefault();
		// Lógica para enviar el formulario
	};

	return (
		<section className="section_1 section_2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 getInTouch">
                        <h3 className="text-center fw-bold">Escríbenos, nos pondremos en contacto contigo con la mayor brevedad</h3>
                        <p className="text-start lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corrupti natus. Natus labore aliquid
                            debitis autem quisquam nostrum corrupti illo voluptate expedita, possimus id, recusandae error aperiam?
                            Sunt, cum quis.</p>
                        <p className="text-start lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corrupti natus. Natus labore aliquid
                            debitis autem quisquam nostrum corrupti illo voluptate expedita, possimus id, recusandae error aperiam?
                            Sunt, cum quis.</p>
                    </div>
                    <div className="col-md-6">
                        <form className="form-message" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="text-start">
                                    <label htmlFor="validacionNombreCompleto" className="form-label fs-5">Nombre completo</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        El campo Nombre completo es obligatorio.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-start">
                                    <label htmlFor="validacionEmail" className="form-label fs-5 mt-3">Email</label>
                                    <Link tabIndex="0" className="navbar-brand" role="button" data-bs-toggle="popover"
                                        data-bs-trigger="focus" title="Popover title"
                                        data-bs-content="And here's some amazing content. It's very engaging. Right?"><span
                                            className="bi bi-info-circle fs-6"></span></Link>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                                            aria-describedby="inputGroupPrepend" required/>
                                        <div className="invalid-feedback">
                                            El campo Email es obligatorio.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-start row">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5 mt-3">Comentarios</label>
                                    <textarea className="form-control" rows="3" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-lg btn-primary rounded-pill mt-3" type="button"><i className="bi bi-send"></i> Enviar comentario</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom_divider"></div>
        </section>
	);
};

export default FormContactSection;
