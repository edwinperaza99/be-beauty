import Map from "@/components/map/Map";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
	FaFacebook,
	FaInstagram,
	FaPhoneAlt,
	FaWhatsapp,
} from "react-icons/fa";

export function Contactanos() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Ubicación</AccordionTrigger>
				<AccordionContent>
					<h3 className="text-md">Autopista Sur</h3>
					<p className="text-[0.7rem] pt-0.5">
						Dirección: Centro Comercial Autopista Sur, Local #43, San Salvador
					</p>
					<Map />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Contacto</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<FaPhoneAlt className="" /> <span>+503 2248-0105</span>
					</div>
					<ul className="flex gap-2 md:gap-4">
						<li>
							<Popover>
								<PopoverTrigger>
									<div className="bg-green-900 text-white text-2xl p-2 rounded-full shadow hover:bg-green-700">
										<FaInstagram />
									</div>
								</PopoverTrigger>
								<PopoverContent className="w-fit bg-[#CCD580]">
									<ul className="text-white flex flex-col justify-center items-center text-center overflow-hidden">
										<li>
											<a
												href="https://www.instagram.com/nataliasalones/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Natalia Salon
											</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a
												href="https://www.instagram.com/bebeautysalones/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Be Beauty Salon
											</a>
										</li>
									</ul>
								</PopoverContent>
							</Popover>
						</li>
						<li>
							<Popover>
								<PopoverTrigger>
									<div className="bg-green-900 text-2xl text-white p-2 rounded-full shadow hover:bg-green-700">
										<FaFacebook />
									</div>
								</PopoverTrigger>
								<PopoverContent className="w-fit bg-[#CCD580]">
									<ul className="text-white flex flex-col justify-center items-center text-center overflow-hidden">
										<li>
											<a
												href="https://www.facebook.com/nataliasalones/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Natalia Salon
											</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a
												href="https://www.facebook.com/bebeautysalones"
												target="_blank"
												rel="noopener noreferrer"
											>
												Be Beauty Salon
											</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a
												href="https://www.facebook.com/Beautysupplyenlinea"
												target="_blank"
												rel="noopener noreferrer"
											>
												Be Beauty Supply
											</a>
										</li>
									</ul>
								</PopoverContent>
							</Popover>
						</li>

						<li>
							<div className="bg-green-900 text-white p-2 text-2xl rounded-full shadow hover:bg-green-700">
								<Link
									href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaWhatsapp />
								</Link>
							</div>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Horario</AccordionTrigger>
				<AccordionContent>
					<ul className="text-[0.7rem] md:text-md">
						<li>Lunes - Sábado: 7:00 AM - 7:00 PM</li>
						{/* <li>Lunes: 9am - 5pm</li>
                        <li>Martes: 9am - 5pm</li>
                        <li>Miércoles: 9am - 5pm</li>
                        <li>Jueves: 9am - 5pm</li>
                        <li>Viernes: 9am - 5pm</li>
                        <li>Sábado: 9am - 5pm</li> */}
						<li>Domingo: 9:00 AM - 5:00 PM</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
