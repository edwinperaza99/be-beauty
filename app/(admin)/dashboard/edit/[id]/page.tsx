"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Product {
	id: string;
	name: string;
	description?: string;
	selling_price?: number | null;
	purchase_price?: number | null;
	stock_qty?: number | null;
	barcode?: string | null;
}

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "El nombre del producto es obligatorio." }),
	description: z.string().optional(),
	selling_price: z.coerce.number().positive().nullable().optional(),
	purchase_price: z.coerce.number().positive().nullable().optional(),
	stock_qty: z.coerce.number().int().nonnegative().nullable().optional(),
	barcode: z.string().nullable().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function EditProductPage() {
	const { id } = useParams();
	const router = useRouter();
	const [product, setProduct] = useState<Product | null>(null);

	// Fetch product data based on the ID
	useEffect(() => {
		if (id) {
			fetch(`/api/products?id=${id}`)
				.then((response) => response.json())
				.then((data) => setProduct(data))
				.catch((error) => console.error("Error fetching product:", error));
		}
	}, [id]);

	const { register, handleSubmit, reset } = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			selling_price: null,
			purchase_price: null,
			stock_qty: null,
			barcode: null,
		},
	});

	useEffect(() => {
		if (product) {
			reset({
				name: product.name || "",
				description: product.description || "",
				selling_price: product.selling_price ?? null,
				purchase_price: product.purchase_price ?? null,
				stock_qty: product.stock_qty ?? null,
				barcode: product.barcode || null,
			});
		}
	}, [product, reset]);

	const onSubmit = handleSubmit((values) => {
		if (!product) return;

		fetch(`/api/products?id=${product.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((response) => {
				if (response.ok) {
					toast.success("Producto actualizado exitosamente");
					router.push("/dashboard");
				} else {
					throw new Error("Failed to update product");
				}
			})
			.catch((error) => {
				console.error("Error updating product:", error);
				toast.error("Error al actualizar el producto");
			});
	});

	if (!product) return <p>Cargando producto...</p>;

	return (
		<div className="container max-w-4xl">
			<h1 className="font-black text-4xl">Editar Producto</h1>
			<form onSubmit={onSubmit} className="space-y-4 pt-4">
				<div>
					<Label htmlFor="name" className="block text-sm font-medium">
						Nombre
					</Label>
					<Input
						id="name"
						type="text"
						{...register("name")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Nombre del producto"
					/>
				</div>

				<div>
					<Label htmlFor="description" className="block text-sm font-medium">
						Descripción
					</Label>
					<Textarea
						id="description"
						{...register("description")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Descripción del producto"
					/>
				</div>

				<div>
					<Label htmlFor="selling_price" className="block text-sm font-medium">
						Precio de Venta
					</Label>
					<Input
						id="selling_price"
						type="number"
						{...register("selling_price")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Precio de venta"
					/>
				</div>

				<div>
					<Label htmlFor="purchase_price" className="block text-sm font-medium">
						Precio de Compra
					</Label>
					<Input
						id="purchase_price"
						type="number"
						{...register("purchase_price")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Precio de compra"
					/>
				</div>

				<div>
					<Label htmlFor="stock_qty" className="block text-sm font-medium">
						Cantidad en Stock
					</Label>
					<Input
						id="stock_qty"
						type="number"
						{...register("stock_qty")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Cantidad en stock"
					/>
				</div>

				<div>
					<Label htmlFor="barcode" className="block text-sm font-medium">
						Código de Barras
					</Label>
					<Input
						id="barcode"
						type="text"
						{...register("barcode")}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
						placeholder="Código de barras"
					/>
				</div>

				<Button type="submit">Guardar Cambios</Button>
			</form>
		</div>
	);
}
