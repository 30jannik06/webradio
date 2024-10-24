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
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";
import {Label} from "@/components/ui/label"

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
				<Link legacyBehavior={true} href={"https://www.youtube.com/watch?v=BBJa32lCaaY"}>
					<Label className={"tracking-tight text-white font-extrabold ml-9 text-4xl"}
						   onClick={() => router.push("#")}>Webradio</Label>
				</Link>
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


