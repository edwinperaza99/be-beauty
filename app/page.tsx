import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { Licorice } from "next/font/google";
import salon_inside from "../public/salon.jpg";
import { Contactanos } from "@/components/Contactanos";

const licorice = Licorice({ weight: "400", subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main className="overflow-hidden" id="start">
				<section
					className="flex flex-col justify-center landing-bg gap-2 mx-auto my-0"
					id="landing"
				>
					<div className="hero">
						<p className="text-4xl">Es más que cabello,</p>
						<p className="text-4xl">
							Es un <span className={licorice.className}>sentimiento</span>
						</p>
						<div>
							<a href="" className="p-2 text-white bg-[#CCD580]">
								Haz tu cita
							</a>
						</div>
					</div>
				</section>
				<section
					id="services"
					className="flex flex-col justify-center py-16 gap-4"
				>
					<h2 className="text-center text-4xl">SERVICIOS</h2>
					<div>
						<p className="text-center">
							Queremos ser parte de tus momentos, tu estilo transforma tu look
							por completo. En Natalia Salon sabemos que cada momento tiene su
							estilo y cuenta una historia.
						</p>
						<p className="text-center">
							Ya sea un liso más brillante , un color más radiante, tus manos y
							pies impecable y más ¡Impresiona y lúce con el poder de un nuevo
							look!
						</p>
					</div>
					<article className="grid grid-cols-3 gap-2">
						<div>
							<Image
								src="https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="teñido de pelo"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-xl text-center font-black">Color</h3>
						</div>
						<div>
							<Image
								src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Manicure"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-xl text-center font-black">Uñas</h3>
						</div>
						<div>
							<Image
								src="https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Corte de pelo"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-xl text-center font-black">Corte</h3>
						</div>
					</article>
					<div className="flex justify-center">
						<Link href="" className="py-2 px-8 bg-[#CCD580] text-white">
							Mas
						</Link>
					</div>
				</section>
				<section className="phrase-section bg-[#242921] flex justify-center items-center relative w-full h-[650px]">
					{/* <div className="p-4 z-0 max-w-[800px] h-[300px]"> */}
					<Image
						src={salon_inside}
						// src="../public/salon_inside.jpg"
						alt=""
						// layout="fill"
						// objectFit="cover"
						// height={450}
						width={800}
						className="absolute z-0 opacity-80 phrase-section-image"
					/>
					{/* </div> */}
					<p className="absolute text-5xl text-center place-content-center z-10 text-[#CCD580]">
						Be Beauty, Be You
					</p>
				</section>
				<div className="divider"></div>
				<section id="contactanos">
					<article className="flex gap-8 space-between items-center contactanos">
						<div className="contact-image-container">
							<Image
								src="https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Corte de pelo"
								height={300}
								width={300}
								// fill
								// objectFit="cover"
								className=""
							/>
						</div>
						<Contactanos />
					</article>
				</section>
				{/* <section id="brands">
					<h2 className="text-4xl text-center">NUESTRAS MARCAS</h2>
					<article className="grid grid-cols-3">
						<Image src="/brand1.jpg" alt="Brand 1" width={300} height={300} />
						<Image src="/brand2.jpg" alt="Brand 2" width={300} height={300} />
						<Image src="/brand3.jpg" alt="Brand 3" width={300} height={300} />
						<Image src="/brand4.jpg" alt="Brand 4" width={300} height={300} />
						<Image src="/brand5.jpg" alt="Brand 5" width={300} height={300} />
						<Image src="/brand6.jpg" alt="Brand 6" width={300} height={300} />
					</article>
				</section>
				<section id="contact" className="bg-green-900">
					<h2 className="text-4xl">Contactanos</h2>
					<div className="flex"></div>
				</section> */}
			</main>
		</>
	);
}
