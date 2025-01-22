export async function GET(req: Request): Promise<Response> {
	try {
		// Mock Facebook posts
		const mockFacebookPosts = [
			{
				id: "1",
				content: "¡Descubre nuestras nuevas promociones en Natalia Salon!",
				image: "https://placehold.co/600x400",
				postedAt: "2025-01-20",
			},
		];

		// Return the mock posts
		return new Response(JSON.stringify(mockFacebookPosts), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Failed to retrieve Facebook posts:", error);

		return new Response(
			JSON.stringify({ error: "Failed to retrieve Facebook posts" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
