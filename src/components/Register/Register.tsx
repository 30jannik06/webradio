"use client"
import {RegisterCompLeft} from "@/components/Register/Components/RegisterCompLeft";
import {RegisterCompRight} from "@/components/Register/Components/RegisterCompRight";
export const Register = () => {

	return (
		<main className="bg-blue-500 min-h-screen flex justify-center items-center">
			<div className="bg-gray-800 rounded-md flex items-center justify-between p-8 max-w-3xl w-full shadow-lg">
				{/* Left Side (Form) */}
				<RegisterCompLeft/>

				{/* Right Side (Illustration and Button) */}
				<RegisterCompRight/>
			</div>
		</main>
	);
};
