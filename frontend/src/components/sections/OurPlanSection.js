import React from "react";
import PlanCard from "../planCard/PlanCard";

function OurPlans() {
	const plans = [
		{
			title: "Haustier Basic",
			price: "$30.000",
			features: [
				"10 users included",
				"2 GB of storage",
				"Email support",
				"Help center access",
			],
			buttonText: "Sign up for free",
			buttonColor: "btn-outline-primary",
		},
		{
			title: "Haustier Local",
			price: "$35.000",
			features: [
				"20 users included",
				"10 GB of storage",
				"Priority email support",
				"Help center access",
			],
			buttonText: "Get started",
			buttonColor: "btn-primary",
		},
		{
			title: "Haustier Nacional",
			price: "$45.000",
			features: [
				"20 users included",
				"10 GB of storage",
				"Priority email support",
				"Help center access",
			],
			buttonText: "Get started",
			buttonColor: "btn-primary",
		},
		{
            border: "border-primary",
            background: "bg-primary",
            headerText: "text-white",
			title: "Haustier Plus",
			price: "$50.000",
			features: [
				"30 users included",
				"15 GB of storage",
				"Phone and email support",
				"Help center access",
			],
			buttonText: "Contact us",
			buttonColor: "btn-primary",
		},
	];

	return (
		<section>
			<div className="container mt-5">
				<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
					<h2 className="fw-bold">Nuestros Planes</h2>
					<p className="fs-5 text-muted">
						Quickly build an effective pricing table for your
						potential customers with this Bootstrap example. It’s
						built with default Bootstrap components and utilities
						with little customization.
					</p>
				</div>
				<div className="d-flex justify-content-sm-center gap-5">
					{plans.map((plan, index) => (
						<PlanCard
							key={index}
							title={plan.title}
							price={plan.price}
							features={plan.features}
							buttonText={plan.buttonText}
							buttonColor={plan.buttonColor}
                            border={plan.border}
                            background={plan.background}
                            headerText={plan.headerText}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default OurPlans;
