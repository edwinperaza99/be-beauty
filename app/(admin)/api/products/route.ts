// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

import { prisma } from "@/lib/prisma";

export async function PUT(req: Request): Promise<Response> {
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
		const url = new URL(req.url);
		const activeParam = url.searchParams.get("active");

		// If activeParam is 'true', filter by active products only
		const isActive = activeParam === "true";

		const products = await prisma.product.findMany({
			// If isActive is true, only return active products
			// Otherwise, return all products
			where: isActive ? { active: true } : undefined,
		});

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

export async function PATCH(req: Request): Promise<Response> {
	const url = new URL(req.url);
	const id = url.searchParams.get("id");

	if (!id) {
		return new Response(JSON.stringify({ error: "ID is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		// Fetch the current product's active status
		const product = await prisma.product.findUnique({
			where: { id },
		});

		if (!product) {
			return new Response(JSON.stringify({ error: "Product not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Toggle the active status
		const updatedProduct = await prisma.product.update({
			where: { id },
			data: { active: !product.active },
		});

		return new Response(JSON.stringify(updatedProduct), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Failed to update product:", error);
		return new Response(JSON.stringify({ error: "Failed to update product" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

export async function POST(req: Request): Promise<Response> {
	const url = new URL(req.url);
	const id = url.searchParams.get("id");

	if (!id) {
		return new Response(JSON.stringify({ error: "ID is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Parse the request body to get updated product data
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
		// Find the existing product to make sure it exists
		const existingProduct = await prisma.product.findUnique({
			where: { id },
		});

		if (!existingProduct) {
			return new Response(JSON.stringify({ error: "Product not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Update the product in the database
		const updatedProduct = await prisma.product.update({
			where: { id },
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

		return new Response(JSON.stringify(updatedProduct), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Failed to update product:", error);
		return new Response(JSON.stringify({ error: "Failed to update product" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
