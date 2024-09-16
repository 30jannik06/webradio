/**
 * @author .jannik
 * @file Discord.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import discord from "@public/img/discord.svg"

export const Discord = () => {
	return (
		<Link
			href={"https://discordapp.com/users/268084996235853824"}
			target={"_blank"}
			rel={"noopener noreferrer"}>
			<Image src={discord} alt={"discord"} height={35} loading={"lazy"}/>
		</Link>
	)
};
