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
					Estamos abiertos de lunes a viernes de 9am a 5pm.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
