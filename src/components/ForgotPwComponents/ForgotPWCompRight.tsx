import Image from "next/image";
import logo from "@public/RC-Transparent.png";

export const ForgotPWCompRight = () => {
	return (
		<div className="hidden sm:flex sm:w-1/2 justify-center items-center">
			<div className="bg-white p-4 rounded-md flex-col flex justify-center items-center">
				<Image src={logo} alt="Forgot Password Illustration" className="h-40 w-40"/>
				<p className="text-gray-800 font-semibold mt-4 text-center">Need Help?</p>
				<p className="text-gray-500 text-xs mt-2 text-center">
					Provide your email, and we'll send you instructions to reset your password.
				</p>
			</div>
		</div>
	)
}
