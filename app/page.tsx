import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { Licorice } from "next/font/google";

const licorice = Licorice({ weight: "400", subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main className="" id="start">
				<section
					className="flex flex-col justify-center landing-bg gap-2 mx-auto my-0"
					id="landing"
				>
					<div className="hero">
						<p className="text-4xl">Es mas que cabello,</p>
						<p className="text-4xl">
							Es un <span className={licorice.className}>sentimiento</span>
						</p>
						<div>
							<a href="" className="p-2 text-white bg-green-400">
								Haz tu cita
							</a>
						</div>
					</div>
				</section>
				<section id="services" className="flex flex-col justify-center">
					<h2 className="text-center text-4xl">SERVICES</h2>
					<p className="text-center">
						Exercitation qui laboris mollit eiusmod officia cupidatat ipsum
						commodo laboris dolore eiusmod. Labore in irure magna occaecat sunt
						est voluptate ullamco amet officia. Lorem ipsum incididunt
						reprehenderit est veniam exercitation nulla aute ad incididunt
						laboris. Id enim ipsum occaecat eiusmod.
					</p>
					<article className="grid grid-cols-3 gap-2">
						<div>
							<Image
								src="https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="teñido de pelo"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-center">Color</h3>
						</div>
						<div>
							<Image
								src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Manicure"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-center">Uñas</h3>
						</div>
						<div>
							<Image
								src="https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Corte de pelo"
								width={300}
								height={300}
								className="p-4"
							/>
							<h3 className="text-center">Corte</h3>
						</div>
					</article>
					<div className="flex justify-center">
						<Link href="" className="py-2 px-4 bg-green-400 text-white">
							Mas
						</Link>
					</div>
				</section>
				<section className="phrase-section bg-green-800">
					<Image src="" alt="" width={300} height={300} />
					<p className="text-5xl text-center">Be Beauty, Be You</p>
				</section>
				<section id="brands">
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
				</section>
			</main>
		</>
	);
}
