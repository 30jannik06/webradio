/**
 * @author .jannik
 * @file AudioPlayer.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {LayoutDashboard, LogIn} from "lucide-react";
import React from "react";
import {useRouter} from "next/navigation";

export const PlayerButtons = () => {
	const router = useRouter();
	return (
		<div
			className="bg-gray-100 flex justify-center items-center m-1 p-1 h-[6vh] w-auto rounded-lg shadow-md">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Button
							className={"bg-gray-100 rounded-lg shadow-md hover:bg-gray-300 m-1 transition duration-300 ease-in-out transform hover:scale-105"}
							onClick={() => router.push("/api/auth/signin")}>
							<LogIn className={"w-[2vh] text-black"}/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						Login
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			{/*<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Button
							className={"bg-gray-100 rounded-lg shadow-md hover:bg-gray-300 m-1 transition duration-300 ease-in-out transform hover:scale-105"}
							onClick={() => router.push("/admin")}>
							<LayoutDashboard className={"w-[2vh] text-black"}/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						Dashboard
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>*/}
		</div>
	)
}
