// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

import { prisma } from "@/lib/prisma";

export async function POST(req: Request): Promise<Response> {
	const {
		name,
		description,
		buy_price,
		paid_price,
		image_url,
		stock_qty,
		barcode,
		categories = [],
	} = await req.json();

	try {
		const product = await prisma.product.create({
			data: {
				name,
				description,
				buy_price,
				paid_price,
				image_url,
				stock_qty,
				barcode,
				categories,
			},
		});

		return new Response(JSON.stringify(product), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Failed to create product:", error);
		return new Response(JSON.stringify({ error: "Failed to create product" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
