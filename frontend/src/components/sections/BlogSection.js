import React from "react";
import { Link } from "react-router-dom";

function PostCard({ title, category }) {
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
					<Link to="#" className="icon-link gap-1 icon-link-hover stretched-link">
						Continue reading
						<i class="fa-solid fa-chevron-right"></i>
					</Link>
				</div>
				<div className="col-auto d-none d-lg-block">
					<svg
						className="bd-placeholder-img"
						width="200"
						height="250"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-label="Placeholder: Thumbnail"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#55595c"></rect>
						<text x="50%" y="50%" fill="#eceeef" dy=".3em">
							Thumbnail
						</text>
					</svg>
				</div>
			</div>
		</div>
	);
}

function BlogSection() {
	return (
		<section className="row mb-2 justify-content-center">
			<PostCard title="Featured post" category="World" />
			<PostCard title="Post title" category="Design" />
			<PostCard title="Gatitos" category="Salud" />
			<PostCard title="Perritos" category="Vacunas" />
		</section>
	);
}

export default BlogSection;
