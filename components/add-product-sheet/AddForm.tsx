"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
		.optional(),
	paid_price: z
		.number()
		.positive({ message: "El precio pagado debe ser un número positivo." })
		.optional(),
	image_url: z
		.string()
		.url({ message: "La URL de la imagen debe ser una URL válida." })
		.optional(),
	stock_qty: z
		.number()
		.int({ message: "La cantidad de stock debe ser un número entero." })
		.nonnegative({ message: "La cantidad de stock no puede ser negativa." })
		.optional(),
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
			buy_price: undefined,
			paid_price: undefined,
			image_url: "",
			stock_qty: undefined,
			barcode: "",
			categories: [""],
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 pt-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre</FormLabel>
							<FormControl>
								<Input placeholder="Nombre del producto (olaplex)" {...field} />
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
				<FormField
					control={form.control}
					name="buy_price"
					render={({ field }) => (
						<FormItem>
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
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descripción</FormLabel>
							<FormControl>
								<Input placeholder="olaplex" {...field} />
							</FormControl>
							<FormDescription>
								Esta se vera reflejada en la pagina del producto.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="paid_price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Precio Pagado</FormLabel>
							<FormControl>
								<Input type="number" placeholder="Precio pagado" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>URL de la Imagen</FormLabel>
							<FormControl>
								<Input placeholder="URL de la imagen del producto" {...field} />
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
						<FormItem>
							<FormLabel>Cantidad en Stock</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Cantidad en stock"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

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
								Ingresa al menos una categoría. Separa múltiples categorías con
								comas.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
