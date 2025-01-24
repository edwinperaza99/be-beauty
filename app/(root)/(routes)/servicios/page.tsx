import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
	fadeInOut,
	MotionDiv,
	MotionH1,
	MotionH2,
	slideInFromBottom,
	MotionP,
} from "@/components/motionUtils";

type Service = {
	delay: number;
	title: string;
	image: string;
};

const ServiceCard = ({ title, image, delay }: Service) => {
	return (
		<MotionDiv
			variants={slideInFromBottom}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5, delay: delay }}
			className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
		>
			<div className="w-full h-64">
				<Image
					src={image}
					alt={title}
					layout="fill"
					className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>
			<div className="absolute inset-0 bg-black/50 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
				<h3 className="text-2xl font-semibold text-white">{title}</h3>
			</div>
		</MotionDiv>
	);
};

export default function Servicios() {
	const services = [
		{
			title: "Manicure & Pedicure",
			image:
				"https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			title: "Cuidado del Cabello",
			image:
				"https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			title: "Tratamientos Faciales",
			image:
				"https://images.pexels.com/photos/3762642/pexels-photo-3762642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			title: "Maquillaje Profesional",
			image:
				"https://images.pexels.com/photos/1383537/pexels-photo-1383537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			title: "Corte de Cabello",
			image:
				"https://images.pexels.com/photos/7755216/pexels-photo-7755216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			title: "Masajes Relajantes",
			image:
				"https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	return (
		<>
			<main className="bg-gray-100">
				{/* Landing Section */}
				<section
					className="relative min-h-[calc(100vh-80px)] bg-[url('https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center text-white"
					id="landing"
				>
					<div className="text-center px-4">
						<MotionH1
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-5xl font-bold mb-4"
						>
							Nuestros Servicios
						</MotionH1>
						<MotionP
							variants={slideInFromBottom}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							className="text-lg max-w-2xl mx-auto text-gray-200"
						>
							Cuidamos cada detalle para que tu experiencia sea única. Descubre
							nuestros servicios exclusivos diseñados para realzar tu belleza y
							bienestar.
						</MotionP>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-16 px-4 max-w-screen-2xl">
					<MotionH2
						variants={slideInFromBottom}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-4xl font-bold text-center mb-12"
					>
						¿Qué ofrecemos?
					</MotionH2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Service Cards */}
						{services.map((service, index) => (
							<ServiceCard key={index} {...service} delay={index * 0.2} />
						))}
					</div>
				</section>

				{/* Parallax Section */}
				<section className="relative h-screen bg-fixed bg-[url('https://images.pexels.com/photos/1027092/pexels-photo-1027092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center text-white">
					<MotionDiv
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-center px-4"
					>
						{/* <h2 className="text-4xl font-bold mb-4">
							Tu Belleza, Nuestra Pasión
						</h2> */}
						<h2 className="text-4xl font-bold mb-4">
							Resalta Tu Belleza Natural
						</h2>
						<p className="text-lg max-w-2xl mx-auto">
							Confía en nuestras manos expertas para brindarte el cuidado que
							necesitas. Agenda una cita y vive una experiencia inolvidable.
						</p>
						<Button asChild className=" bg-[#CCD580] mt-4">
							<Link
								href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl"
							>
								Haz tu cita
							</Link>
						</Button>
					</MotionDiv>
				</section>
			</main>
		</>
	);
}
