import React from "react";
import { Link } from "react-router-dom";

function PostCard({ title, category, image }) {
	return (
		<div className="col-md-5">
			<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="col text-start p-4 d-flex flex-column position-static">
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
						<Link to="#" className="btn btn-primary fs-5" role="button">
							Leer más
							<i className="fa-solid fa-chevron-right"></i>
						</Link>
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
		<section className="row mb-2 justify-content-center">
			<h2 className="mb-5">Publicaciones recientes</h2>
			<PostCard title="Featured post" category="World" image="images/photos/veterinarian-4.jpg" />
			<PostCard title="Post title" category="Design" image="images/photos/veterinarian-13.jpg" />
			<PostCard title="Gatitos" category="Salud" image="images/photos/veterinarian-7.jpg" />
			<PostCard title="Perritos" category="Vacunas" image="images/photos/veterinarian-11.jpg"/>
			<div>
				<button className="btn btn-primary fs-5 mt-5" type="button">Ver todas las publicaciones</button>
			</div>
		</section>
	);
}

export default BlogSection;
