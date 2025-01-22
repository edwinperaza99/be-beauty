export default function Servicios() {
	return (
		<>
			<main className="bg-gray-100">
				{/* Landing Section */}
				<section
					className="relative h-screen bg-[url('https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center text-white"
					id="landing"
				>
					<div className="text-center px-4">
						<h1 className="text-5xl font-bold mb-4">Nuestros Servicios</h1>
						<p className="text-lg max-w-2xl mx-auto">
							Explora nuestros servicios exclusivos diseñados para realzar tu
							belleza y bienestar.
						</p>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-16 px-4 max-w-screen-2xl">
					<h2 className="text-4xl font-bold text-center mb-12">
						Nuestros Servicios
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Service Cards */}
						{[
							{
								title: "Manicure & Pedicure",
								image: "https://placehold.co/600x400",
							},
							{
								title: "Cuidado del Cabello",
								image: "https://placehold.co/600x400",
							},
							{
								title: "Tratamientos Faciales",
								image: "https://placehold.co/600x400",
							},
							{
								title: "Maquillaje Profesional",
								image: "https://placehold.co/600x400",
							},
							{
								title: "Corte de Cabello",
								image: "https://placehold.co/600x400",
							},
							{
								title: "Masajes Relajantes",
								image: "https://placehold.co/600x400",
							},
						].map((service, index) => (
							<div
								key={index}
								className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<h3 className="text-2xl font-semibold text-white">
										{service.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Parallax Section */}
				<section className="relative h-screen bg-fixed bg-[url('https://images.pexels.com/photos/1027092/pexels-photo-1027092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center text-white">
					<div className="text-center px-4">
						<h2 className="text-4xl font-bold mb-4">
							Tu Belleza, Nuestra Pasión
						</h2>
						<p className="text-lg max-w-2xl mx-auto">
							Déjanos consentirte con nuestros servicios de primera calidad. Tu
							bienestar y satisfacción son nuestra prioridad.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
