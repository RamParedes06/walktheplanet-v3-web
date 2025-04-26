import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 490) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		handleResize(); // Set initial state on mount
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isMobile;
}

export default useIsMobile;