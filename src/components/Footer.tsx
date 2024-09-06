import React from "react";
import {Discord} from "@/components/social/Discord";
import {Label} from "@/components/ui/label";
import {Twitter} from "@/components/social/Twitter";
import {Github} from "@/components/social/Github";
import {Youtube} from "@/components/social/Youtube";
import {Instagram} from "@/components/social/Instagram";

export const Footer = () => {
	return (
		<footer className="bg-primary p-6 text-white text-center fixed bottom-0 w-full z-10">
			<div className="flex justify-center space-x-4">
				<Discord/>
				<Twitter/>
				<Github/>
				<Youtube/>
				<Instagram/>
			</div>
			<Label className="mt-4">
				&copy; 2024 Dein Web Radio Player des Vertrauens. Alle Rechte vorbehalten.
			</Label>
		</footer>
	)
};
