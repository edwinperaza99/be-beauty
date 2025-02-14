"use client";

import useSWR from "swr";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import BrandsMarquee from "@/components/BrandsMarquee";
import { fadeInOut, MotionH1 } from "@/components/motionUtils";

export interface Product {
	id: string;
	name: string;
	description?: string;
	selling_price?: number;
	image_url?: string;
}

// Fetcher function for SWR
const fetcher = (url: string) =>
	fetch(url).then(async (res: Response): Promise<any> => {
		const result = await res.json();

		if (res.status !== 200) {
			return Promise.reject(result);
		} else {
			return result;
		}
	});

export default function Productos() {
	const {
		data: products = [],
		error,
		isValidating,
	} = useSWR<Product[]>("/api/products?active=true", fetcher);
	const [searchQuery, setSearchQuery] = useState("");

	// Filter products based on the search query
	const filteredProducts = useMemo(() => {
		if (!searchQuery.trim()) return products;
		return products.filter((product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery, products]);

	// Handle brand click to update search query
	const handleBrandClick = (brandName: string) => {
		setSearchQuery(brandName);
	};

	if (error) return <p>Error fetching products. Please try again.</p>;

	return (
		<main className="min-h-[calc(100dvh-80px)] bg-gray-100">
			{/* Header Section */}
			<header className="relative h-[35vh] md:h-[40vh] bg-[url('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white flex items-center justify-center">
				<div className="bg-black/50 absolute inset-0"></div>
				<div className="relative z-10 text-center px-4">
					<MotionH1
						variants={fadeInOut}
						initial="hidden"
						animate="visible"
						className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
					>
						Nuestros Mejores Productos
					</MotionH1>
					{/* <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
							Explora nuestra colección cuidadosamente seleccionada para
							ofrecerte lo mejor en calidad y precio.
						</p> */}
				</div>
			</header>

			{/* Brands marquee */}
			<BrandsMarquee onBrandClick={handleBrandClick} />

			{/* Products Section */}
			<section className="pb-10">
				{/* <h2 className="text-3xl font-semibold text-center mb-2">
						Descubre Nuestros Productos
					</h2> */}
				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-8">
					<Input
						type="text"
						placeholder="Buscar productos..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-main-300 transition-colors"
					/>
				</div>

				<div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4">
					{isValidating && products.length === 0 ? (
						<p className="text-center col-span-full text-gray-600">
							Cargando productos...
						</p>
					) : filteredProducts.length > 0 ? (
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
	);
}
