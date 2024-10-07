import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export const RegisterCompLeft = () =>{
	const router = useRouter();
	return (
		<div className="w-full sm:w-1/2 pr-6">
			<h1 className="text-white font-bold text-2xl sm:text-3xl mb-2">Create an account</h1>
			<p className="text-gray-400 mb-6 text-sm">Join us! It&quot;s quick and easy.</p>

			{/* Username */}
			<div className="mb-4">
				<Label htmlFor="username" className="text-white font-semibold">
					Username<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Username"
					id="username"
					type="text"
					className="bg-gray-700 text-white rounded-md mt-1 h-10 w-full border border-gray-600"
				/>
			</div>

			{/* Email */}
			<div className="mb-4">
				<Label htmlFor="email" className="text-white font-semibold">
					Email<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Email"
					id="email"
					type="email"
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

			{/* Confirm Password */}
			<div className="mb-4">
				<Label htmlFor="confirm-password" className="text-white font-semibold">
					Confirm Password<span className="text-red-400 font-extrabold">*</span>
				</Label>
				<Input
					placeholder="Confirm Password"
					id="confirm-password"
					type="password"
					className="bg-gray-700 text-white rounded-md mt-1 h-10 w-full border border-gray-600"
				/>
			</div>

			{/* Register Button */}
			<Button
				className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full h-10 rounded-md"
				onClick={() => router.push("/")}
			>
				Register
			</Button>

			{/* Already have an account */}
			<div className="text-center mt-4">
				<span className="text-gray-400 text-sm">Already have an account? </span>
				<a href="#" className="text-blue-400 text-sm" onClick={() => router.push("/login")}>Log In</a>
			</div>
		</div>
	)
}
