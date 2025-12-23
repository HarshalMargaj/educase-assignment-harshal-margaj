import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, to }) => {
	return (
		<Link to={`/${to}`}>
			<button
				className={`p-[6px] rounded-[6px] text-[16px] font-medium h-[46px] cursor-pointer w-full ${className}`}
			>
				{children}
			</button>
		</Link>
	);
};

export default Button;
