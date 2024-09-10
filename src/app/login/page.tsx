import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button";

export default function Login() {
	return (
		<main className={"bg-slate-800 h-screen w-screen flex justify-center items-center"}>
			<div className={"h-[45%] w-[30%] bg-[#35393f] rounded-md flex items-center flex-col border-[#202225] border"}>
				<a className={"font-semibold text-white mt-8 text-4xl"}>Welcome back</a>
				<a className={"font-light text-white mt-3 text-sm"}>We love to see you again!</a>
				<div className={"grid w-full max-w-sm items-center gap-1.5 mt-5"}>
					<Label htmlFor={"username"} className={"text-white font-semibold select-none"} >Username
						<span className={"text-red-400 font-extrabold"}>*</span>
					</Label>
					<Input placeholder={"Username"} id={"username"} type={"text"}
						   className={"text-white bg-[#202225] rounded-sm h-[5vh] border-[#35393f]"}/>
				</div>
				<div className={"grid w-full max-w-sm items-center gap-1.5 mt-5"}>
					<Label htmlFor={"password"} className={"text-white font-semibold select-none"}>Password
						<span className={"text-red-400 font-extrabold"}>*</span>
					</Label>
					<Input placeholder={"Password"} id={"password"} type={"password"}
						   className={"text-white bg-[#202225] rounded-sm h-[5vh] border-[#35393f]"}/>
				</div>
				<div className={"w-[80%] h-fit flex flex-row mt-7 justify-center items-center "}>
					<Button className={"text-white bg-[#5765f2] m-2 rounded-sm h-[5vh] w-[45%] font-semibold text-lg hover:bg-[#]"}>Login</Button>
					<Button className={"text-white bg-[#5765f2] m-2rounded-sm h-[5vh] w-[45%] font-semibold text-lg hover:bg-[#]"}>Register</Button>
				</div>
			</div>
		</main>
	)
}
