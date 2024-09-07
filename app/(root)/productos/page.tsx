"use client";

import { useEffect, useState } from "react";
import "../index.css";

interface Product {
	id: string;
	name: string;
	description?: string;
	selling_price?: number;
	image_url?: string;
}

export default function Productos() {
	const [products, setProducts] = useState([]);

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
			<main className="mt-[80px] md:mt-[120px]">
				<section className="flex flex-col items-center">
					<h1 className="text-4xl font-bold">Nuestros mejores productos</h1>
					<p className="text-lg">
						Bienvenido al lugar donde encontraras todos los productos que
						necesitas
					</p>
				</section>
				{/* products cards  */}
				<section className="container-sm md:container max-w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-6 mx-2">
					{products.length > 0 ? (
						products.map((product: Product) => (
							<article
								key={product.id}
								className="shadow-sm hover:shadow-lg overflow-hidden h-auto w-full max-w-xs bg-white"
							>
								<div className="h-48">
									<img
										src={product.image_url}
										alt={product.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-4">
									<h2 className="text-lg font-semibold mb-2 truncate">
										{product.name}
									</h2>
									<p className="text-sm text-gray-600 line-clamp-3">
										{product.description}
									</p>
								</div>
							</article>
						))
					) : (
						<p>No products available</p>
					)}
				</section>
			</main>
		</>
	);
}
