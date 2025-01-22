"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export interface Product {
	id: string;
	name: string;
	description?: string;
	selling_price?: number;
	image_url?: string;
}

export default function Productos() {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetch("/api/products?active=true", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setFilteredProducts(data); // Initialize filteredProducts with all products
			})
			.catch((error) => console.error("Error fetching products:", error));
	}, []);

	// Update filtered products based on search query
	useEffect(() => {
		if (searchQuery.trim() === "") {
			setFilteredProducts(products);
		} else {
			setFilteredProducts(
				products.filter((product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [searchQuery, products]);

	return (
		<>
			<main className="min-h-[calc(100dvh-80px)] bg-gray-100">
				{/* Header Section */}
				<header className="relative h-[50vh] md:h-[70vh] bg-[url('https://placehold.co/1200x800')] bg-cover bg-center text-white flex items-center justify-center">
					<div className="bg-black/50 absolute inset-0"></div>
					<div className="relative z-10 text-center px-4">
						<h1 className="text-5xl md:text-6xl font-bold mb-4">
							Nuestros Mejores Productos
						</h1>
						<p className="text-lg md:text-xl max-w-2xl mx-auto">
							Explora nuestra colección cuidadosamente seleccionada para
							ofrecerte lo mejor en calidad y precio.
						</p>
					</div>
				</header>

				{/* Products Section */}
				<section className="py-10">
					<h2 className="text-3xl font-semibold text-center mb-2">
						Descubre Nuestros Productos
					</h2>
					{/* Search Bar */}
					<div className="max-w-2xl mx-auto mb-8">
						<input
							type="text"
							placeholder="Buscar productos..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4">
						{filteredProducts.length > 0 ? (
							filteredProducts.map((product: Product) => (
								<ProductCard key={product.id} product={product} />
							))
						) : (
							<p className="text-center col-span-full text-gray-600">
								No hay productos que coincidan con tu búsqueda.
							</p>
						)}
					</div>
				</section>
			</main>
		</>
	);
}
