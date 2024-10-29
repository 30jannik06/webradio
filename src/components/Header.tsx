/**
 * @author .jannik
 * @file Header.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
"use client";
import React from 'react';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import {useToast} from "@/hooks/use-toast";
import {Label} from "@/components/ui/label"
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CalendarIcon} from "@radix-ui/react-icons";

export const Header = () => {
	const router = useRouter();
	const {toast} = useToast();

	const handleDiscordButtonClick = () => {
		toast({
			variant: "destructive",
			title: "Discord",
			description: "Du wirst nun zum Discord weiterleiten!"
		});
		window.open("https://discord.gg/w45as4KZU8", "_blank");
	};

	return (
		<header className={"w-screen h-[8vh] bg-primary flex items-center z-10 fixed top-0"}>
			<div className="container mx-auto flex items-center justify-between">

				<HoverCard>
					<HoverCardTrigger>
						<Link legacyBehavior={true} href={"https://www.youtube.com/watch?v=BBJa32lCaaY"}>
							<Label className={"tracking-tight text-white font-extrabold ml-9 text-4xl"}
								   onClick={() => router.push("#")}>Webradio</Label>
						</Link>
					</HoverCardTrigger>
					<HoverCardContent>
						<div className="flex justify-between space-x-4">
							<Avatar>
								<AvatarImage src="https://github.com/30jannik06.png"/>
								<AvatarFallback>VC</AvatarFallback>
							</Avatar>
							<div className="space-y-1">
								<h4 className="text-sm font-semibold">Webradio</h4>
								<p className="text-sm">
									created by @jannik with 💕.
								</p>
								<div className="flex items-center pt-2">
									<CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
									<span className="text-xs text-muted-foreground">
                Created Oktober 2024
              </span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
				{/**Button Top Right**/}
				{/*
				<div className="flex items-center space-x-4">
					<Button
						className={"border-white border-[1px] hover:transition-transform hover:bg-[#ffffff] hover:text-black"}
						onClick={handleDiscordButtonClick}>Joine unserem Discord</Button>
				</div>
				*/}
			</div>
		</header>
	);
};


