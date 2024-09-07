"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Ellipsis } from "lucide-react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableFooter,
	TableRow,
} from "@/components/ui/table";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Product {
	id: string;
	name: string;
	description?: string;
	selling_price?: number;
	purchase_price?: number;
	stock_qty?: number;
	barcode?: string;
	active?: boolean;
}

export default function Dashboard() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/products", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
				setLoading(false);
			});
	}, []);
	return (
		<>
			<main className="mx-auto gap-4 mt-14">
				<section className="container flex flex-col items-center" id="landing">
					<details className="text-lg container">
						<summary className="text-4xl font-bold text-center">
							Panel de Administrador
						</summary>
						<p className="text-center">
							En este panel de administrador podrás gestionar los productos,
							categorías, usuarios y pedidos.
						</p>
					</details>
				</section>
				<section className="container flex justify-between py-6">
					{/* <ul className="flex gap-2">
						<li>
							<Button>Todo</Button>
						</li>
						<li>
							<Button>Cabello</Button>
						</li>
						<li>
							<Button>Uñas</Button>
						</li>
						<li>
							<Button>Caballero</Button>
						</li>
					</ul> */}
					<Button>
						<Link href="./dashboard/NewProduct">Agregar Producto</Link>
					</Button>
				</section>
				{/* table goes here  */}
				<section className="container-sm md:container">
					{loading ? (
						<p>Cargando productos...</p>
					) : products.length > 0 ? (
						<Table>
							<TableCaption>Lista de todos tus productos</TableCaption>
							<TableHeader>
								<TableRow>
									<TableHead className="hidden lg:table-cell w-[100px]">
										ID
									</TableHead>
									<TableHead>Nombre</TableHead>
									<TableHead className="hidden md:table-cell">
										Precio de Venta
									</TableHead>
									<TableHead className="hidden lg:table-cell">
										Precio de Compra
									</TableHead>
									<TableHead className="hidden md:table-cell">Stock</TableHead>
									<TableHead>Status</TableHead>
									<TableHead className="text-right">Acciones</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{products.map((product) => (
									<TableRow key={product.id}>
										<TableCell className="hidden lg:table-cell">
											{product.id}
										</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell className="hidden md:table-cell">
											{product.selling_price
												? `$${product.selling_price.toFixed(2)}`
												: "N/A"}
										</TableCell>
										<TableCell className="hidden lg:table-cell">
											{product.purchase_price
												? `$${product.purchase_price.toFixed(2)}`
												: "N/A"}
										</TableCell>
										<TableCell className="hidden md:table-cell">
											{product.stock_qty ?? "N/A"}
										</TableCell>
										<TableCell>
											{product.active ? "Activo" : "Inactivo"}
										</TableCell>
										<TableCell className="text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline" size="sm">
														<Ellipsis />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent className="text-center">
													<DropdownMenuLabel className="font-black">
														Acciones
													</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuItem>Editar</DropdownMenuItem>
													<DropdownMenuItem>Eliminar</DropdownMenuItem>
													<DropdownMenuItem>
														{product.active ? "Desactivar" : "Activar"}
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<p>No hay productos disponibles</p>
					)}
				</section>
			</main>
		</>
	);
}
