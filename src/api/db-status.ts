import type {NextApiRequest, NextApiResponse} from "next";

import {db} from "../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		await db.$connect();
		res.status(200).json({message: "Successfully connected to the database"});
	} catch (err) {
		res.status(500).json({error: "Failed to connect to the database"});
	}
}
