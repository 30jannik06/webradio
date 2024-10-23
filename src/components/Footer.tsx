/**
 * @author .jannik
 * @file Footer.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
"use client";
import React from "react";
import {Discord} from "@/components/social/Discord";
import {Label} from "@/components/ui/label";
import {Twitter} from "@/components/social/Twitter";
import {Github} from "@/components/social/Github";
import {Youtube} from "@/components/social/Youtube";
import {Instagram} from "@/components/social/Instagram";
import {useRouter} from "next/navigation";
import {toast} from "@/hooks/use-toast";

export const Footer = () => {
	const router = useRouter()

	const handleLoginButtonClick = () => {
		router.push("/admin")
		//toast({
		//	variant: "destructive",
		//	title: "Login Fail",
		//	description: "Dieser Login Button hat noch keine Funktion!"
		//});
	};

	return (
		<footer className="bg-primary p-6 text-white text-center fixed bottom-0 w-full z-10">
			<div className="flex justify-center space-x-4">
				<Discord/>
				<Twitter/>
				<Github/>
				<Youtube/>
				<Instagram/>
			</div>
			<Label className="mt-4 select-none">
				&copy; 2024 Dein Web Radio Player des Vertrauens. Alle Rechte vorbehalten.<span
				className={"text-transparent hover:text-white hover:font-extrabold cursor-pointer"} onClick={handleLoginButtonClick}>login</span>
			</Label>
		</footer>
	)
};
