import {LoginCompRight} from "@/components/LoginComponents/Components/LoginCompRight";
import {LoginCompLeft} from "@/components/LoginComponents/Components/LoginCompLeft";

export const Login = () => {
	return (
		<main className="bg-blue-500 min-h-screen flex justify-center items-center">
			<div className="bg-gray-800 rounded-md flex items-center justify-between p-8 max-w-3xl w-full shadow-lg">
				{/* Left Side (Form) */}
				<LoginCompLeft/>

				{/* Right Side (Image) */}
				<LoginCompRight/>
			</div>
		</main>
	);
};
