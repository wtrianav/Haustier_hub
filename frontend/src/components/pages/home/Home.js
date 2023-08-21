import React from "react";
import CarouselSection from '../../sections/CarouselSection';
import FormContactSection from "../../sections/FormContactSection";
import IconsGridSection from "../../sections/IconsGridSection";
import BlogSection from "../../sections/BlogSection";
import ShowcaseSection from "../../sections/ShowcaseSection";
import CallToActionSection from "../../sections/CallToActionSection";
import TestimonialSection from "../../sections/TestimonialSection";
import OurPlanSection from "../../sections/OurPlanSection";
import ComparePlanSection from "../../sections/ComparePlanSection";
import './home.css';

export default function Home() {
	return (
		<>
			<CarouselSection />
			<FormContactSection />
			<IconsGridSection />
			<ShowcaseSection />
			<OurPlanSection />
			<ComparePlanSection />
			<BlogSection />
			<TestimonialSection />
			<CallToActionSection />
		</>
	);
}