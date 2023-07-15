import React from "react";
import CarouselSection from '../../components/sections/CarouselSection';
import ContactSection from "../../components/sections/ContactSection";
import IconsGridSection from "../../components/sections/IconsGridSection";
import './home.css';

export default function Home() {
	return (
        <>
            <CarouselSection />
            <ContactSection />
            <IconsGridSection />   
        </>

    );
}