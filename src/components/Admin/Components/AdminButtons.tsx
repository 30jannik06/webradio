/**
 * @author .jannik
 * @file AudioControls.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {Home, Plus} from "lucide-react";
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export const AdminButtons = () => {
	const router = useRouter()
	return (
		<div
			className="bg-gray-800 rounded-md flex justify-center items-center p-1 h-[6vh] w-auto shadow-lg">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Button className={"bg-gray-950 hover:bg-gray-700 m-1"} onClick={() => router.push("/")}>
							<Plus className={"w-[2vh]"}/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						Add Stream
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Button className={"bg-gray-950 hover:bg-gray-700 m-1"} onClick={() => router.push("/")}>
							<Home className={"w-[2vh]"}/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						Home
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
};
