import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../lib/db";  // Achte auf den korrekten relativen Pfad zu deiner db.ts Datei

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const streams = await db.streams.findMany();  // Prüfe, ob das Prisma Modell korrekt definiert ist
		res.status(200).json(streams);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch streams" });
	}
}
