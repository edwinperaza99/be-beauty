import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(admin)/api/auth/[...nextauth]/route";

export async function authorizeAccess() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return null;
	}

	// Get allowed emails from the environment variable
	const allowedEmailsEnv = process.env.ALLOWED_EMAILS || "";

	// Convert the comma-separated string into an array
	const allowedEmails = allowedEmailsEnv
		.split(",")
		.map((email) => email.trim());

	// Check if the session email is in the allowed list
	if (!allowedEmails.includes(session.user?.email || "")) {
		return null;
	}

	return session;
}
