import React from "react";

import Button from "../components/Button";

const Home = () => {
	return (
		<div className="flex items-end h-full p-[20px] pb-[41px]">
			<div className="flex flex-col space-y-[29px]">
				<div className="space-y-[10px]">
					<div className="text-[#1D2226] font-medium text-[28px] leading-[33px]">
						Welcome to PopX
					</div>
					<div className="text-[#1D2226] opacity-60 text-[18px] leading-[26px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</div>
				</div>
				<div className="flex flex-col gap-[10px]">
					<Button
						className="bg-[#6C25FF] text-[#FFFFFF]"
						to="sign-up"
					>
						Create Account
					</Button>
					<Button
						className="bg-[#6C25FF4B] text-[#1D2226]"
						to="sign-in"
					>
						Already Registered? Login
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;
