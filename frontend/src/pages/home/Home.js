import React from "react";
import CarouselSection from '../../components/sections/CarouselSection';
import FormContactSection from "../../components/sections/FormContactSection";
import IconsGridSection from "../../components/sections/IconsGridSection";
import './home.css';

export default function Home() {
	return (
        <>
            <CarouselSection />
            <FormContactSection />
            <IconsGridSection />   
        </>

    );
}