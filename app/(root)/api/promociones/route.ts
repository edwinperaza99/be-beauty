import { NextResponse } from "next/server";

export async function GET() {
	const FACEBOOK_PAGE_ACCESS_TOKEN =
		process.env.FACEBOOK_PAGE_ACCESS_TOKEN ?? "";

	try {
		const response = await fetch(
			`https://graph.facebook.com/v22.0/388526188164301/feed?fields=message,full_picture,attachments&limit=12&access_token=${FACEBOOK_PAGE_ACCESS_TOKEN}`
		);
		const data = await response.json();

		return NextResponse.json(data); // Ensure correct structure is returned
	} catch (error) {
		console.error("Error fetching Facebook posts:", error);
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
