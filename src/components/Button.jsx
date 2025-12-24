import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, to, disabled = false }) => {
	return (
		<Link to={`/${to}`}>
			<button
				disabled={disabled}
				className={`p-[6px] rounded-[6px] text-[16px] font-medium h-[46px] ${
					disabled ? "cursor-not-allowed" : "cursor-pointer"
				} w-full leading-[17px] ${className}`}
			>
				{children}
			</button>
		</Link>
	);
};

export default Button;
