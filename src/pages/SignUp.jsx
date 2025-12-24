import React, { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput";
import RequiredStar from "../components/RequiredStar";

const inputFields = [
	{
		id: "fullname",
		label: "Full Name",
		placeholder: "Enter full name",
		type: "text",
		required: true,
	},
	{
		id: "phone",
		label: "Phone Number",
		placeholder: "Enter phone number",
		type: "tel",
		required: true,
	},
	{
		id: "email",
		label: "Email Address",
		placeholder: "Enter email address",
		type: "email",
		required: true,
	},
	{
		id: "password",
		label: "Password",
		placeholder: "Enter password",
		type: "password",
		required: true,
	},
	{
		id: "company",
		label: "Company Name",
		placeholder: "Enter company name",
		type: "text",
		required: false,
	},
];

const SignUp = () => {
	const [userInput, setUserInput] = useState({
		fullname: "",
		phone: "",
		email: "",
		password: "",
		company: "",
		agency: "yes",
	});

	return (
		<div className="flex flex-col justify-between px-[20px] pt-[40px] pb-[30px] h-full">
			<div className="space-y-[31px]">
				<div className="text-primary text-[28px]  font-medium leading-[36px]">
					Create your <br />
					PopX account
				</div>
				<div className="space-y-[18px]">
					<div className="flex flex-col gap-[29px]">
						{inputFields.map(field => (
							<Input
								key={field.id}
								placeholder={field.placeholder}
								label={
									<span>
										{field.label}
										{field.required && <RequiredStar />}
									</span>
								}
								id={field.id}
								type={field.type}
								required={field.required}
								value={userInput[field.id]}
								onChange={e => {
									let value = e.target.value;

									if (field.id === "phone") {
										value = value.replace(/[^0-9]/g, "");
									}
									setUserInput({
										...userInput,
										[field.id]: value,
									});
								}}
							/>
						))}
					</div>
					<div className="space-y-[10px]">
						<div className="text-[13px] text-primary leading-[17px]">
							Are you an Agency?
							<RequiredStar />
						</div>
						<div className="flex space-x-[23px]">
							<RadioInput
								name="agency"
								value="yes"
								label="Yes"
								checked={userInput.agency === "yes"}
								onChange={e =>
									setUserInput({
										...userInput,
										agency: e.target.value,
									})
								}
							/>
							<RadioInput
								name="agency"
								value="no"
								label="No"
								checked={userInput.agency === "no"}
								onChange={e =>
									setUserInput({
										...userInput,
										agency: e.target.value,
									})
								}
							/>
						</div>
					</div>
				</div>
			</div>
			<Button
				disabled={
					!userInput.fullname ||
					!userInput.phone ||
					!userInput.email ||
					!userInput.password
				}
				to="profile"
				className={`text-white ${
					userInput.fullname &&
					userInput.phone &&
					userInput.email &&
					userInput.password
						? "bg-primary "
						: "bg-secondary"
				}`}
			>
				Create Account
			</Button>
		</div>
	);
};

export default SignUp;
