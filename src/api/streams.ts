import {NextApiRequest, NextApiResponse} from "next"
import {db} from "../lib/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const streams = await db.streams.findMany();
		res.status(200).json(streams);
	} catch (error) {
		console.log("Error fetching streams:", error)
		res.status(500).json({error: "Failed to fetch streams"});
	}
}
