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
import {AdminEdit} from "@/components/Admin/Edit/AdminEdit";
import {db} from "@/server/db";
import type {IRadioStation} from "@/interface/Player/IRadioStation";

export default async function AdminEditPage({params}: { params: { id: string } }) {
	const pageId = parseInt(params.id);

	const streamList = await db.streams.findMany({where: {id: pageId}});
	const streams: IRadioStation[] = streamList.map((stream) => ({
		id: stream.id,
		name: stream.name,
		streamURL: stream.streamURL,
		group: stream.group,
	}));

	return (
		<main className={"w-screen h-screen bg-gray-100"}>
			<Suspense fallback={<LoadingScreen/>}>
				<Toaster/>
				<Header/>
				<AdminEdit streams={streams}/>
				<Footer/>
			</Suspense>
		</main>
	);
}
