import React from "react";

import Button from "../components/Button";

const Home = () => {
	return (
		<div className="flex items-end h-full p-[20px] pb-[41px]">
			<div className="flex flex-col space-y-[29px]">
				<div className="space-y-[10px]">
					<div className="text-primary font-medium text-[28px] leading-[33px]">
						Welcome to PopX
					</div>
					<div className="text-primary opacity-60 text-[18px] leading-[26px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</div>
				</div>
				<div className="flex flex-col gap-[10px]">
					<Button className="bg-primary text-[#FFFFFF]" to="sign-up">
						Create Account
					</Button>
					<Button
						className="bg-[#6C25FF4B] text-primary"
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
