import { Sentimiento } from "@/components/AnimatedSVG";
import { Contactanos } from "@/components/Contactanos";
import {
	fadeInOut,
	MotionDiv,
	MotionH2,
	MotionP,
	MotionSection,
	slideInFromBottom,
} from "@/components/motionUtils";
import salon_inside from "@/public/salon.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="overflow-hidden" id="start">
				<section
					className="flex flex-col justify-center landing-bg gap-2 mx-auto my-0 min-h-dvh w-full relative"
					id="landing"
				>
					<div className="flex flex-col px-2 md:px-0 min-w-0 md:min-w-[800px] md:mx-auto">
						<MotionP
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-4xl md:text-5xl mb-1"
						>
							Es más que cabello,
						</MotionP>
						<MotionP
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-4xl md:text-5xl mb-6"
						>
							Es un
							<span className="pl-2 inline-block">
								<Sentimiento width="190px" height="auto" />
							</span>
						</MotionP>
						<MotionDiv
							variants={slideInFromBottom}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Link
								href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg p-2 text-white bg-main-300 hover:bg-main-500 transition-colors"
							>
								Haz tu cita
							</Link>
						</MotionDiv>
					</div>
				</section>
				<section className="flex flex-col justify-center py-16 gap-4 px-4 mx-auto max-w-4xl">
					<MotionH2
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-center text-4xl"
					>
						SERVICIOS
					</MotionH2>
					<div className="text-center text-sm md:text-md">
						<MotionP
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							Queremos ser parte de tus momentos, tu estilo transforma tu look
							por completo. En Natalia Salon sabemos que cada momento tiene su
							estilo y cuenta una historia.
						</MotionP>
						<MotionP
							variants={fadeInOut}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							Ya sea un liso más brillante , un color más radiante, tus manos y
							pies impecable y más ¡Impresiona y lúce con el poder de un nuevo
							look!
						</MotionP>
					</div>
					<article className="grid grid-cols-3">
						<MotionDiv
							variants={slideInFromBottom}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<Image
								src="https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="teñido de pelo"
								width={300}
								height={300}
								className="p-2 md:p-4"
							/>
							<h3 className="text-xl text-center font-black">Color</h3>
						</MotionDiv>
						<MotionDiv
							variants={slideInFromBottom}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<Image
								src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Manicure"
								width={300}
								height={300}
								className="p-2 md:p-4"
							/>
							<h3 className="text-xl text-center font-black">Uñas</h3>
						</MotionDiv>
						<MotionDiv
							variants={slideInFromBottom}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							<Image
								src="https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Corte de pelo"
								width={300}
								height={300}
								className="p-2 md:p-4"
							/>
							<h3 className="text-xl text-center font-black">Corte</h3>
						</MotionDiv>
					</article>
					<MotionDiv
						variants={slideInFromBottom}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex justify-center"
					>
						<Link
							href="/servicios"
							className="py-2 px-8 bg-main-300 text-white hover:bg-main-500 transition-colors"
						>
							Más
						</Link>
					</MotionDiv>
				</section>
				<section className="bg-main-500 flex justify-center items-center relative w-full h-[400px] md:h-[650px]">
					<Image
						src={salon_inside}
						alt=""
						width={800}
						placeholder="blur"
						className="px-4 md:px:0 absolute z-0 opacity-20 hover:opacity-25 object-cover object-center max-h-[80%] transition-opacity"
					/>
					<MotionDiv
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.7 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="absolute text-3xl md:text-5xl text-center place-content-center z-10 text-[#CCD580]"
					>
						Be Beauty, <wbr /> Be You
					</MotionDiv>
				</section>
				<div className="bg-main-700 h-12 md:h-20"></div>
				<div className="bg-main-500">
					<MotionSection
						variants={fadeInOut}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="px-4 bg-main-500 text-white py-8"
					>
						<h2 className="text-4xl text-center py-2">CONTACTANOS</h2>
						<article className="flex gap-4 md:gap-8 text-sm md:text-md space-between items-center max-w-4xl mx-auto">
							<div className="contact-image-container overflow-hidden">
								<Image
									src="https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt="Corte de pelo"
									height={300}
									width={300}
									className=""
								/>
							</div>
							<Contactanos />
						</article>
					</MotionSection>
				</div>
			</main>
		</>
	);
}
