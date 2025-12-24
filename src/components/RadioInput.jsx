import React from "react";

const RadioInput = ({ label, value, name, onChange, checked }) => {
	return (
		// <label className="flex items-center space-x-[12px]">
		// 	<input
		// 		type="radio"
		// 		name={name}
		// 		value={value}
		// 		checked={checked}
		// 		className="h-[22px] w-[22px] text-primary  accent-[#6C25FF] "
		// 		onChange={onChange}
		// 	/>
		// 	<span className="leading-[17px] text-[14px] text-primary">
		// 		{label}
		// 	</span>
		// </label>
		<label className="relative flex items-center space-x-[12px] cursor-pointer">
			{/* Radio input */}
			<input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				className="
      appearance-none
      w-[22px] h-[22px] border-[1px] border-[#6C25FF] rounded-full
      peer
      cursor-pointer
    "
			/>

			{/* Inner dot */}
			<div className="absolute left-[5px] top-[5px] w-[12px] h-[12px] rounded-full bg-[#6C25FF] scale-0 peer-checked:scale-100 transition-transform"></div>

			{/* Label */}
			<span className="text-primary text-[14px] leading-[17px]">
				{label}
			</span>
		</label>
	);
};

export default RadioInput;
