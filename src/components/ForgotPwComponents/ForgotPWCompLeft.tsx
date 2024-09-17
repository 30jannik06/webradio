import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export const ForgotPWCompLeft = () => {
	const router = useRouter();
	return (
		<div className="w-full sm:w-1/2 pr-6">
			<h1 className="text-white font-bold text-2xl sm:text-3xl mb-2">Forgot Your Password?</h1>
			<p className="text-gray-400 mb-6 text-sm">No worries, we'll help you reset it!</p>

			{/* Email */}
			<div className="mb-4">
				<Label htmlFor="email" className="text-white font-semibold">
					Email<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Enter your email"
					id="email"
					type="email"
					className="bg-gray-700 text-white rounded-md mt-1 h-10 w-full border border-gray-600"
				/>
			</div>

			{/* Reset Password Button */}
			<Button
				className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full h-10 rounded-md"
				onClick={() => router.push("/reset-password")}
			>
				Reset Password
			</Button>

			{/* Back to Login */}
			<div className="text-center mt-4">
				<span className="text-gray-400 text-sm">Remembered your password? </span>
				<a className="text-blue-400 text-sm cursor-pointer" onClick={() => router.push("/login")}>Log In</a>
			</div>
		</div>
	)
}
