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

export function Contactanos() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Ubicación</AccordionTrigger>
				<AccordionContent>
					<h3>Autopista Sur</h3>
					<p>
						Dirección: Centro Comercial Autopista Sur, Local #43, San Salvador
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Contacto</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-2">
					<p>Telefono: +503 2248-0105</p>
					<ul className="flex gap-4">
						<li>
							<Popover>
								<PopoverTrigger>
									<div className="bg-green-900 text-white p-2 rounded-full shadow hover:bg-green-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram hover:text-green-300"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
											<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
											<path d="M16.5 7.5l0 .01" />
										</svg>
									</div>
								</PopoverTrigger>
								<PopoverContent className="w-fit bg-[#CCD580]">
									<ul className="text-white flex flex-col justify-center items-center text-center overflow-hidden">
										<li>
											<a href="">Natalia Salon</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a href="">Be Beauty Salon</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a href="">Be Beauty Supply</a>
										</li>
									</ul>
								</PopoverContent>
							</Popover>
						</li>
						<li>
							<Popover>
								<PopoverTrigger>
									<div className="bg-green-900 text-white p-2 rounded-full shadow hover:bg-green-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook hover:text-green-300"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
										</svg>
									</div>
								</PopoverTrigger>
								<PopoverContent className="w-fit bg-[#CCD580]">
									<ul className="text-white flex flex-col justify-center items-center text-center overflow-hidden">
										<li>
											<a href="">Natalia Salon</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a href="">Be Beauty Salon</a>
										</li>
										<Separator className="my-2" />
										<li>
											<a href="">Be Beauty Supply</a>
										</li>
									</ul>
								</PopoverContent>
							</Popover>
						</li>

						<li>
							<div className="bg-green-900 text-white p-2 rounded-full shadow hover:bg-green-700">
								<a
									href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp hover:text-green-300"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
										<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
									</svg>
								</a>
							</div>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Horario</AccordionTrigger>
				<AccordionContent>
					<ul>
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
