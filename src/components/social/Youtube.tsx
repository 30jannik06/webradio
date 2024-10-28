/**
 * @author .jannik
 * @file Youtube.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from "react";
import Image from "next/image";
import youtube from "@public/img/youtube.svg";
import Link from "next/link";

export const Youtube = () => {
    return (
        <Link
            href="https://www.youtube.com/channel/UClTsYh2A1Dbh086sh7OyVQg"
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Image src={youtube} alt="YouTube" height={35} loading="lazy"/>
        </Link>
    );
};
