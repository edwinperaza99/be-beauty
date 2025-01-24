import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID ?? "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
};

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
