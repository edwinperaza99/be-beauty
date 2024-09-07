// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

import { prisma } from "@/lib/prisma";

export async function POST(req: Request): Promise<Response> {
	const {
		name,
		description,
		selling_price,
		purchase_price,
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
				selling_price,
				purchase_price,
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

export async function GET(req: Request): Promise<Response> {
	try {
		const products = await prisma.product.findMany();

		return new Response(JSON.stringify(products), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Failed to retrieve products:", error);
		return new Response(
			JSON.stringify({ error: "Failed to retrieve products" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}

export async function DELETE(req: Request): Promise<Response> {
	const url = new URL(req.url);
	const id = url.searchParams.get("id");

	if (!id) {
		return new Response(JSON.stringify({ error: "ID is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		await prisma.product.delete({
			where: { id },
		});

		return new Response(
			JSON.stringify({ message: "Product deleted successfully" }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Failed to delete product:", error);
		return new Response(JSON.stringify({ error: "Failed to delete product" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
