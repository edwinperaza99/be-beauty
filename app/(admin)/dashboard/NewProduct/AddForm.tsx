"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { nullable, z } from "zod";
import Link from "next/link";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "El nombre del producto es obligatorio." }),
	description: z.string().optional(), // Campo opcional sin mensaje de validación específico
	selling_price: z.coerce
		.number()
		.positive({ message: "El precio de compra debe ser un número positivo." })
		.optional()
		.nullable(),
	purchase_price: z.coerce
		.number()
		.positive({ message: "El precio pagado debe ser un número positivo." })
		.optional()
		.nullable(),
	image_url: z
		.string()
		.url({ message: "La URL de la imagen debe ser una URL válida." })
		.optional()
		.nullable(),
	stock_qty: z.coerce
		.number()
		.int({ message: "La cantidad de stock debe ser un número entero." })
		.nonnegative({ message: "La cantidad de stock no puede ser negativa." })
		.optional()
		.nullable(),
	barcode: z.string().optional().nullable(), // Opcional, puede ser nulo, no se necesita mensaje específico
	categories: z
		.array(z.string())
		.min(1, { message: "Se requiere al menos una categoría." }),
	// createdAt: z.date().optional(), // Opcional, manejado por la base de datos
	// updatedAt: z.date().optional(), // Opcional, manejado por la base de datos
});
export default function AddForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			selling_price: null,
			purchase_price: null,
			image_url: null,
			stock_qty: null,
			barcode: null,
			categories: [""],
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Product created successfully:", data);
				toast.success("Producto creado exitosamente");
				// TODO: Handle successful product creation, either navigate to a new page or show a success message
			})
			.catch((error) => {
				console.error("Error creating product:", error);
				toast.error("Error al crear el producto");
				// Handle the error, show an error message, etc.
			});
		setIsLoading(false); // Reset loading state
		form.reset(); // Clear form fields
		console.log(values);
	}
	return (
		<div className="container max-w-4xl">
			<div className="flex justify-between items-center flex-row">
				<h1 className="font-black text-4xl">Agregar Producto</h1>
				<Button>
					<Link href="./">Regresar</Link>
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
									<Input
										placeholder="Nombre del producto (olaplex)"
										{...field}
									/>
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
								<FormDescription>
									Esta se verá reflejada en la página del producto. Es opcional.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex w-full justify-between gap-2">
						<FormField
							control={form.control}
							name="selling_price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Precio de Venta</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="0.00"
											{...field}
											value={field.value === null ? "" : field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="purchase_price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Precio Pagado</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="0.00"
											{...field}
											value={field.value === null ? "" : field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex w-full justify-between gap-2">
						<FormField
							control={form.control}
							name="image_url"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>URL de la Imagen</FormLabel>
									<FormControl>
										<Input
											placeholder="https://example.com/image.jpg"
											{...field}
											value={field.value === null ? "" : field.value}
										/>
									</FormControl>
									<FormDescription>
										Proporciona un enlace a la imagen del producto.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="stock_qty"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Cantidad en Stock</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="0"
											{...field}
											value={field.value === null ? "" : field.value}
										/>
									</FormControl>
									<FormDescription>
										Este valor es opcional y puede ser modificado más adelante.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="barcode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Código de Barras</FormLabel>
								<FormControl>
									<Input
										placeholder="1234567890"
										{...field}
										value={field.value === null ? "" : field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* <FormField
						control={form.control}
						name="categories"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Categorías</FormLabel>
								<FormControl>
									<Input placeholder="Categorías del producto" {...field} />
								</FormControl>
								<FormDescription>
									Ingresa al menos una categoría. Separa múltiples categorías
									con comas.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/> */}
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Submit"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
