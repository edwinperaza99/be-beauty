import { Button } from "@/components/ui/button";

export default function Promociones() {
	return (
		<>
			<main className="min-h-screen bg-gray-100">
				{/* Landing Section */}
				<section className="flex flex-col justify-center items-center text-center py-8 bg-gradient-to-b from-gray-200 to-gray-100">
					<h1 className="text-4xl font-bold mb-4">
						Nuestras promociones más recientes
					</h1>
					<p className="text-lg text-gray-700 max-w-2xl">
						Bienvenido al lugar donde encontrarás las mejores promociones en
						productos seleccionados. ¡Aprovecha estas ofertas exclusivas antes
						de que se agoten!
					</p>
				</section>

				{/* Promotions Section */}
				<section className="container mx-auto pb-8 px-4">
					<h2 className="text-2xl font-semibold mb-4">
						Promociones destacadas
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Placeholder items */}
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<div
								key={item}
								className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
							>
								<div className="h-48 bg-gray-300 animate-pulse"></div>
								<div className="p-4">
									<h3 className="font-bold text-lg mb-2 text-gray-800">
										Producto promocional #{item}
									</h3>
									<p className="text-gray-600 text-sm mb-4">
										Descripción breve del producto o promoción. Este contenido
										se rellenará de manera dinámica.
									</p>
									<Button>Ver más</Button>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
