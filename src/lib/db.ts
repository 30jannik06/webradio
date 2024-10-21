import {PrismaClient} from "@prisma/client";

export const db = new PrismaClient()

async function connectToDatabase() {
	try {
		await db.$connect();
		console.log("Connected to Database");
	} catch (error) {
		console.error("Fehler bei der Verbindung zur Datenbank:", error);
	}
}

connectToDatabase()
