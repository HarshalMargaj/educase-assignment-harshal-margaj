import React from "react";

const MobileLayout = ({ children }) => {
	return (
		<div className="flex justify-center items-center h-full">
			<div className="h-[812px] w-[375px] bg-[#F7F8F9]">{children}</div>
		</div>
	);
};

export default MobileLayout;
