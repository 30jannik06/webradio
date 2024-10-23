import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export const LoginCompLeft = () => {
	const router = useRouter();
	return (
		<div className="w-full sm:w-1/2 pr-6">
			<h1 className="text-white font-bold text-2xl sm:text-3xl mb-2">Welcome back!</h1>
			<p className="text-gray-400 mb-6 text-sm">We&quot;re so excited to see you again!</p>

			{/* Email or Phone Number */}
			<div className="mb-4">
				<Label htmlFor="email" className="text-white font-semibold">
					Email or Phone Number<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Email or Phone Number"
					id="email"
					type="text"
					className="bg-gray-700 text-white rounded-md mt-1 h-10 w-full border border-gray-600"
				/>
			</div>

			{/* Password */}
			<div className="mb-4">
				<Label htmlFor="password" className="text-white font-semibold">
					Password<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Password"
					id="password"
					type="password"
					className="bg-gray-700 text-white rounded-md mt-1 h-10 w-full border border-gray-600"
				/>
			</div>

			{/* Forgot Password */}
			<div className="text-right mb-4">
				<a href="/forgot-password" className="text-blue-400 text-sm">Forgot your password?</a>
			</div>

			{/* Login Button */}
			<Button
				className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full h-10 rounded-md"
				onClick={() => router.push("/")}
			>
				Log In
			</Button>

			{/* Register */}
			<div className="text-center mt-4">
				<span className="text-gray-400 text-sm">Need an account? </span>
				<a className="text-blue-400 text-sm cursor-pointer"
				   onClick={() => router.push("/register")}>Register</a>
			</div>
		</div>
	)
}
