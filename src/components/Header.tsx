/**
 * @author .jannik
 * @file Header.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from 'react';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

export const Header = () => {
	const router = useRouter();
	const {toast} = useToast();

	const loginButtonFuctions = () => {
		toast({
			variant: "destructive",
			title: "Login Fail",
			description: "Dieser Login Button hat noch keine Funktion!"
		})
	}

	return (
		<header className={"w-screen h-[8vh] bg-primary flex items-center z-10 fixed top-0"}>
			<div className="container mx-auto flex items-center justify-between">
				<Link legacyBehavior={true} href={"https://www.youtube.com/watch?v=BBJa32lCaaY"}>
					<a className={"tracking-tight text-white font-extrabold ml-9 text-4xl"}
					   onClick={() => router.push("#")}>Webradio</a>
				</Link>
				<div className="flex items-center space-x-4">
					<Button className={"border-white border-[1px] hover:transition-transform hover:bg-[#ffffff] hover:text-black"} onClick={() => loginButtonFuctions()}>Login</Button>
				</div>
			</div>
		</header>
	);
};


