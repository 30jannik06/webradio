/**
 * @author .jannik
 * @file Github.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from "react";
import Image from "next/image";
import github from "@public/img/github.svg";
import Link from "next/link";

export const Github = () => {
    return (
        <Link
            href={"https://github.com/30jannik06/webradio"}
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Image src={github} alt="Github" height={35} loading="lazy" />
        </Link>
    );
};
