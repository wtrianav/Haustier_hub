import React from "react";
import CarouselSection from '../../components/sections/CarouselSection';
import FormContactSection from "../../components/sections/FormContactSection";
import IconsGridSection from "../../components/sections/IconsGridSection";
import BlogSection from "../../components/sections/BlogSection";
import ShowcaseSection from "../../components/sections/ShowcaseSection";
import './home.css';
import CallToActionSection from "../../components/sections/CallToActionSection";

export default function Home() {
	return (
		<>
			<CarouselSection />
			<FormContactSection />
			<IconsGridSection />
			<ShowcaseSection />
			<BlogSection />
			<CallToActionSection />
		</>
	);
}