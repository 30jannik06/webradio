"use client"
import {IRadioStation} from "@/interface/IRadioStation";
import {db} from "@/server/db";

export default async function Home() {
	const streams: IRadioStation[] = [];
	let streamList = await db.streams.findMany({});
	if (!streamList) streamList = [];
	for (const stream of streamList) {
		streams.push({
			id: stream.id,
			name: stream.name,
			streamURL: stream.streamURL,
			group: stream.group
		})
	}

	return (
		<div>
			{streams.map(x => {
				return (
					<div key={x.id}>{x.name}</div>
				)
			})}
		</div>
	);
}
