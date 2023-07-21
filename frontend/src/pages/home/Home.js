import React from "react";
import CarouselSection from '../../components/sections/CarouselSection';
import FormContactSection from "../../components/sections/FormContactSection";
import IconsGridSection from "../../components/sections/IconsGridSection";
import BlogSection from "../../components/sections/BlogSection";
import ShowcaseSection from "../../components/sections/ShowcaseSection";
import CallToActionSection from "../../components/sections/CallToActionSection";
import TestimonialSection from "../../components/sections/TestimonialSection";
import OurPlans from "../../components/sections/OurPlans";
import './home.css';

export default function Home() {
	return (
		<>
			<CarouselSection />
			<FormContactSection />
			<IconsGridSection />
			<ShowcaseSection />
			<OurPlans />
			<BlogSection />
			<TestimonialSection />
			<CallToActionSection />
		</>
	);
}