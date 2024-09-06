"use client"
import Header from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Player} from "@/components/Player";

export default function Home() {

    return (
        <main className={"w-screen h-screen bg-gray-100"}>
            <Header/>
            <Player/>
            <Footer/>
        </main>
    );
}
