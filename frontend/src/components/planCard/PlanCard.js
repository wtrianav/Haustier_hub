import React from "react";

function PlanCard({ border, background, headerText, title, price, features, buttonText, buttonColor}) {
	return (
		<div className="col-md-3">
			<div className={`card mb-4 rounded-3 shadow-sm ${border}`}>
				<div className={`card-header py-3 ${background}`}>
					<h4 className={`my-0 fw-normal ${headerText}`}>{title}</h4>
				</div>
				<div className="card-body">
					<h1 className="card-title pricing-card-title">
						{price}
						<small className="text-muted fw-light">/COP</small>
					</h1>
					<ul className="list-unstyled mt-3 mb-4">
						{features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
					<button type="button" className={`w-100 btn btn-lg ${buttonColor}`}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

export default PlanCard;
