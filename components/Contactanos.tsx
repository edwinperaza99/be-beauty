import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function Contactanos() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Ubicación</AccordionTrigger>
				<AccordionContent>Estamos ubicados en 1234 Main St.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Contacto</AccordionTrigger>
				<AccordionContent>Contactanos al 123-456-7890</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Horas</AccordionTrigger>
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
