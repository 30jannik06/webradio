import {ForgotPWCompLeft} from "@/components/ForgotPwComponents/ForgotPWCompLeft";
import {ForgotPWCompRight} from "@/components/ForgotPwComponents/ForgotPWCompRight";

export const ForgotPasswordComp = () => {

	return (
		<main className="bg-blue-500 min-h-screen flex justify-center items-center">
			<div className="bg-gray-800 rounded-md flex items-center justify-between p-8 max-w-3xl w-full shadow-lg">
				{/* Left Side (Form) */}
				<ForgotPWCompLeft/>

				{/* Right Side (Illustration) */}
				<ForgotPWCompRight/>
			</div>
		</main>
	);
};
