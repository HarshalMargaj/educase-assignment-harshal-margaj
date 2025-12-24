import React from "react";

import CameraLogo from "../assets/camera.png";
import ProfilePhoto from "../assets/photo.png";

const Profile = () => {
	return (
		<div className="flex flex-col h-full">
			<div>
				<div className="bg-[#FFFFFF] h-[68px] text-primary text-[18px] leading-[21px] px-[15px] pt-[27px] pb-[19px] shadow">
					Account Settings
				</div>
				<div className="pl-[20px] pr-[18px]">
					<div className=" my-[30px]  flex items-start gap-[20px]">
						<div className="relative">
							<img
								src={ProfilePhoto}
								alt="profile-photo"
								height={76}
								width={76}
							/>
							<img
								src={CameraLogo}
								alt="camera-logo"
								height={23}
								width={23}
								className="absolute right-0 bottom-0"
							/>
						</div>
						<div className="text-primary space-y-[6px]">
							<div className="text-[15px] font-medium leading-[19px]">
								Marry Doe
							</div>
							<div className="text-[14px] leading-[19px]">
								Marry@Gmail.Com
							</div>
						</div>
					</div>
					<div className="text-primary leading-[22px] text-[14px]">
						Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
						Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
						Dolore Magna Aliquyam Erat, Sed Diam
					</div>
				</div>
				<hr className="mt-[20px] h-px border-0 bg-[repeating-linear-gradient(to_right,#CBCBCB_0_4px,transparent_4px_8px)]" />
			</div>
			<hr className="mt-auto mb-[40px] h-px border-0 bg-[repeating-linear-gradient(to_right,#CBCBCB_0_4px,transparent_4px_8px)]" />
		</div>
	);
};

export default Profile;
