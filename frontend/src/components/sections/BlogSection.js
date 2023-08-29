import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const StyledButton = styled(Link)`
	display: inline-flex;
	align-items: center;
	font-size: 1.25rem;
	text-decoration: none;
	color: var(--color-blanco);
	background-color: var(--color-celeste);
	padding: 6px 0px 6px 18px;
	border-radius: 5px;
	overflow: hidden;
	transition: background-color 0.4s ease, padding-right 0.5s ease; /* Agregamos la transición de padding-right */

	i {
		opacity: 0;
		margin-left: 10px;
		font-size: 1rem;
		transform: translateX(-10px) scale(0);
		transition: opacity 0.2s ease, transform 0.5s ease;
	}

	&:hover {
		background-color: #0056b3;
		padding-right: 18px;
		transition-delay: 0s; /* Eliminamos el retraso aquí */

		i {
			opacity: 1;
			transform: translateX(0) scale(1);
			transition-delay: 0.2s;
		}
	}
`;

function PostCard({ title, category, image }) {
	return (
		<div className="col-md-5">
			<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="col text-start p-4 d-flex flex-column bg-white position-static">
					<strong className="d-inline-block mb-2 text-primary-emphasis">
						{category}
					</strong>
					<h3 className="mb-0">{title}</h3>
					<div className="mb-1 text-body-secondary">Nov 11</div>
					<p className="mb-auto">
						This is a wider card with supporting text below as a
						natural lead-in to additional content.
					</p>
					<div>
						<StyledButton to="#" className="btn btn-primary fs-5" role="button">
							Leer más
							<i className="fa-solid fa-chevron-right"></i>
						</StyledButton>
					</div>
				</div>
				<div className="col-auto d-none d-lg-block">
					<img className="bd-placeholder-img" width="200" height="250" alt="imagen" src={image}/>
				</div>
			</div>
		</div>
	);
}

function BlogSection() {
	return (
		<section className="row mb-2 bg-light justify-content-center">
			<h2 className="mb-5 fw-bold">Publicaciones recientes</h2>
			<PostCard title="El pelo de los gatos" category="World" image="images/veterinarian-4.jpg" />
			<PostCard title="Viajar con tu mascota" category="Design" image="images/veterinarian-13.jpg" />
			<PostCard title="Gatitos" category="Salud" image="images/veterinarian-7.jpg" />
			<PostCard title="Perritos" category="Vacunas" image="images/veterinarian-11.jpg"/>
			<div>
				<button className="btn btn-primary fs-5 mt-5" type="button">Ver todas las publicaciones</button>
			</div>
		</section>
	);
}

export default BlogSection;
