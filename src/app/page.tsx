"use client"
/**
 * @author .jannik
 * @file page.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Toaster} from "@/components/ui/toaster";
import React, {Suspense} from "react";
import LoadingScreen from "@/app/loading";
import {Player} from "@/components/Player";

export default function Home() {

	return (
		<main className={"w-screen h-screen bg-gray-100"}>
			<Suspense fallback={<LoadingScreen/>}>
				<Toaster/>
				<Header/>
				<Player/>
				<Footer/>
			</Suspense>
		</main>
	);
}
