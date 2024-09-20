"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation"; // No need for useRouter here
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Link from "next/link";

// Define the product type explicitly
interface Product {
	id: string; // Assuming id is a string, adjust accordingly if it's a different type
	name: string;
	description?: string;
	selling_price?: number | null;
	purchase_price?: number | null;
	stock_qty?: number | null;
	barcode?: string | null;
}

// Define the form schema
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

export default function EditProduct() {
	const searchParams = useSearchParams();
	const productString = searchParams.get("product"); // Get the serialized product object

	// Explicitly type the product state with Product | null
	const [product, setProduct] = useState<Product | null>(null); // State to hold product data

	// Deserialize the product once it's available from query parameters
	useEffect(() => {
		if (productString) {
			const productObject: Product = JSON.parse(productString); // Deserialize the product string and type it
			setProduct(productObject); // Set the product state
			reset(productObject); // Reset form with the product data
		}
	}, [productString]);

	// Initialize the form with react-hook-form and zod
	const { reset, ...form } = useForm({
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

	// Handle form submission to update the product
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Ensure product is not null before accessing `id`
		if (!product) return;

		fetch(`/api/products?id=${product.id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then(() => {
				toast.success("Producto actualizado exitosamente");
				// Redirect back to the dashboard
				window.location.href = "/dashboard";
			})
			.catch((error) => {
				console.error("Error updating product:", error);
				toast.error("Error al actualizar el producto");
			});
	}

	// Display loading state while the product data is being fetched
	if (!product) return <p>Cargando producto...</p>;

	return (
		<div className="container max-w-4xl">
			<div className="flex justify-between items-center flex-row">
				<h1 className="font-black text-4xl">Editar Producto</h1>
				<Button>
					<Link href="/dashboard">Regresar</Link>
				</Button>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 pt-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre</FormLabel>
								<FormControl>
									<Input placeholder="Nombre del producto" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Descripción</FormLabel>
								<FormControl>
									<Textarea placeholder="Descripción del producto" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* More fields like selling_price, purchase_price, etc. */}
					<Button type="submit">Guardar Cambios</Button>
				</form>
			</Form>
		</div>
	);
}
