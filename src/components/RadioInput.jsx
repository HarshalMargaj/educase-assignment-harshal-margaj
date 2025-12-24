import React from "react";

const RadioInput = ({ label, value, name, onChange, checked }) => {
	return (
		<label className="flex items-center space-x-[12px]">
			<input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				className="h-[22px] w-[22px] text-primary  accent-[#6C25FF] "
				onChange={onChange}
			/>
			<span className="leading-[17px] text-[14px] text-primary">
				{label}
			</span>
		</label>
	);
};

export default RadioInput;
