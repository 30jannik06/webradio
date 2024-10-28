/**
 * @author .jannik
 * @file Twitter.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import twitter from "@public/img/twitter.svg"

export const Twitter = () => {
	return (
		<Link
			href={"https://x.com/30jannik06"}
			target={"_blank"}
			rel={"noopener noreferrer"}>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<Image src={twitter} alt={"twitter"} height={35} loading={"lazy"}/>
		</Link>
	)
};
