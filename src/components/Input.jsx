import React from "react";

const Input = ({ id, placeholder, label, type = "text", onChange, value }) => {
	return (
		<div className="relative border-[1px] border-[#CBCBCB] rounded-[6px]  h-[40px] box-border">
			<div className="px-[16px] py-[6px] flex items-center h-full">
				<input
					type={type}
					id={id}
					placeholder={placeholder}
					className="block mb-0 border-none outline-none w-full h-full placeholder:text-[#919191] placeholder:text-[14px] "
					value={value}
					onChange={onChange}
				/>
			</div>
			<label
				htmlFor={id}
				className="absolute -top-[12px] left-[9px] w-[103px] px-[5px] bg-[#F7F8F9] text-[#6C25FF] text-[13px] font-normal "
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
