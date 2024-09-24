"use client";
import React from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

export default function Problem() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push("/");
	};
	return (
		<div className="flex items-center justify-center h-screen bg-[#ffffff] text-white">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-4 text-black">
					404 - Radiosender Problem
				</h1>
				<Label className="text-lg text-black">
					Entschuldigung, aktuell gibt es Probleme mit der
					Radioliste.
				</Label>
				<Button
					className="text-white hover:underline mt-4 block"
					onClick={handleButtonClick}
				>
					Zurück zur Startseite
				</Button>
			</div>
		</div>
	);
}
