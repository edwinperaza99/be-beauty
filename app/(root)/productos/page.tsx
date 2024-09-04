"use client";

import { useEffect, useState } from "react";
import "../index.css";

interface Product {
	id: string;
	name: string;
	description?: string;
	price?: number;
	image_url?: string;
}

export default function Productos() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/products", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error fetching products:", error));
	}, []);
	return (
		<>
			<main className="">
				<section className="flex flex-col items-center">
					<h1 className="text-4xl font-bold">Nuestros mejores productos</h1>
					<p className="text-lg">
						Bienvenido al lugar donde encontraras todos los productos que
						necesitas
					</p>
				</section>
				{/* products cards  */}
				<section className="container max-w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 py-6">
					{products.length > 0 ? (
						products.map((product: Product) => (
							<article
								key={product.id}
								className="h-62 w-52 border border-sm rounded-sm p-4"
							>
								<div className="h-40">
									<img
										src={product.image_url}
										alt="${product.name} image"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="mt-4">
									<h2 className="text-lg">{product.name}</h2>
									<p className="text-sm truncate">{product.description}</p>
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
