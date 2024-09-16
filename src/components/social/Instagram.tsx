/**
 * @author .jannik
 * @file Instagram.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import Image from "next/image";
import instagram from "@public/img/insta.svg";
import React from "react";
import Link from "next/link";

export const Instagram = () => {
    return (
        <Link
            href="https://www.instagram.com/jannik.so/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={instagram}
                alt="Instagram"
                height={35}
                loading="lazy"
            />
        </Link>
    );
};
