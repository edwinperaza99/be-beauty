"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { nullable, z } from "zod";
import Link from "next/link";

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

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "El nombre del producto es obligatorio." }),
	description: z.string().optional(), // Campo opcional sin mensaje de validación específico
	buy_price: z
		.number()
		.positive({ message: "El precio de compra debe ser un número positivo." })
		.optional()
		.nullable(),
	paid_price: z
		.number()
		.positive({ message: "El precio pagado debe ser un número positivo." })
		.optional()
		.nullable(),
	image_url: z
		.string()
		.url({ message: "La URL de la imagen debe ser una URL válida." })
		.optional()
		.nullable(),
	stock_qty: z
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
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			buy_price: null,
			paid_price: null,
			image_url: null,
			stock_qty: null,
			barcode: null,
			categories: [""],
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
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
				// You can also navigate back or show a success message
			})
			.catch((error) => {
				console.error("Error creating product:", error);
				// Handle the error, show an error message, etc.
			});
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
									<Input placeholder="Descripción del producto" {...field} />
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
							name="buy_price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Precio de Compra</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Precio de compra"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="paid_price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Precio Pagado</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Precio pagado"
											{...field}
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
											placeholder="URL de la imagen del producto"
											{...field}
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
											placeholder="Cantidad en stock"
											{...field}
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
									<Input placeholder="Código de barras" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
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
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
