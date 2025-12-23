import React, { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = () => {
	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});

	return (
		<div className="px-[20px] py-[40px] space-y-[33px]">
			<div className="space-y-[14px]">
				<div className="text-[#1D2226] font-medium text-[28px] leading-[36px]">
					Signin to your <br />
					PopX account
				</div>
				<div className="text-[#1D2226] opacity-60 text-[18px] leading-[26px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				</div>
			</div>
			<div className="space-y-[14px]">
				<div className="space-y-[23px]">
					<Input
						id="email"
						placeholder="Enter email address"
						label="Email Address"
						value={userInput.email}
						onChange={e =>
							setUserInput({
								...userInput,
								email: e.target.value,
							})
						}
					/>
					<Input
						id="password"
						placeholder="Enter password"
						label="Password"
						type="password"
						value={userInput.password}
						onChange={e =>
							setUserInput({
								...userInput,
								password: e.target.value,
							})
						}
					/>
				</div>
				<Button
					to="profile"
					disabled={!userInput.email || !userInput.password}
					className={`${
						userInput.email && userInput.password
							? "bg-[#6C25FF]"
							: "bg-[#CBCBCB]"
					} text-[#FFFFFF] transition-all`}
				>
					Login
				</Button>
			</div>
		</div>
	);
};

export default SignIn;
