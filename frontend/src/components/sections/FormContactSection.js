import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledButton = styled.button`
	font-family: inherit;
	font-size: 20px;
	background: var(--color-celeste);
	color: white;
	padding: 10px 16px;
	padding-left: 0.9em;
	display: flex;
	align-items: center;
	border: none;
	border-radius: 0.5rem;
	overflow: hidden;
	transition: all 0.2s;

	span {
		display: block;
		margin-left: 0.3em;
		transition: all 0.3s ease-in-out;
	}

	svg {
		display: block;
		transform-origin: center center;
		transition: transform 0.3s ease-in-out;
	}

	&:hover .svg-wrapper {
		animation: fly-1 0.6s ease-in-out infinite alternate;
	}

	&:hover svg {
		transform: translateX(1.6em) rotate(45deg) scale(1.1);
	}

	&:hover span {
		transform: translateX(5em);
	}

	&:active {
		transform: scale(0.95);
	}

	@keyframes fly-1 {
		from {
			transform: translateY(0.1em);
		}

		to {
			transform: translateY(-0.1em);
		}
	}
`;

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
                                <div className="mt-4">
                                    <StyledButton>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                            </svg>
                                            </div>
                                        </div>
                                        <span>Enviar</span>
                                    </StyledButton>
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
