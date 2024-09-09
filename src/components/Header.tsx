/**
 * @author .jannik
 * @file Header.tsx
 * @link https://github.com/30jannik06
 * @link https://discordapp.com/users/268084996235853824
 */
import React from 'react';
import {useRouter} from "next/navigation";

export const Header = () => {
    const router = useRouter();
    return (
        <header className={"w-screen h-[8vh] bg-primary flex items-center z-10 fixed top-0"}>
            <a className={"tracking-tight text-white font-extrabold ml-9 text-4xl"}
               onClick={() => router.push("#")}>Webradio</a>
        </header>
    );
};


