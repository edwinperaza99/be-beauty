"use client";

import { useEffect, useState } from "react";
import "@/app/(root)/index.css";
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

	useEffect(() => {
		fetch("/api/products?active=true", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error fetching products:", error));
	}, []);

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
					<h2 className="text-3xl font-semibold text-center mb-8">
						Descubre Nuestros Productos
					</h2>
					<div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4">
						{products.length > 0 ? (
							products.map((product: Product) => (
								<ProductCard key={product.id} product={product} />
							))
						) : (
							<p className="text-center col-span-full text-gray-600">
								No hay productos disponibles
							</p>
						)}
					</div>
				</section>
			</main>
		</>
	);
}
