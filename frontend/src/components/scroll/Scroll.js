import React, { useState, useEffect } from "react";
import './scroll.css';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{isVisible && (
				<button id="button" className="show" onClick={scrollToTop}>
					<i class="fas fa-angle-up"></i>
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;
