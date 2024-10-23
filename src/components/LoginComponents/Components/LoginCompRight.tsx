import Image from "next/image";
import logo from "@public/RC-Transparent.png";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export const LoginCompRight = () => {
	const router = useRouter();
	return (
		<div className="hidden sm:flex sm:w-1/2 justify-center items-center">
			<div className="bg-white p-4 rounded-md flex-col flex justify-center items-center">
				<Image src={logo} alt="Logo" className="h-40 w-40"/>
				<p className="text-gray-800 font-semibold mt-4 text-center">Log in with your account</p>
				<p className="text-gray-500 text-xs mt-2 text-center">
					Welcome back! Log in using your credentials.
				</p>
				{/* Button to Main Page */}
				<Button
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-4"
					onClick={() => router.push("/")}
				>
					Zum Hauptmenu gehen
				</Button>
			</div>
		</div>
	)
}
