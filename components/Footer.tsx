import {
	MotionFooter,
	MotionP,
	slideInFromBottom,
	slideInFromLeft,
} from "@/components/motionUtils";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black flex justify-center text-white py-3 px-2">
			<MotionP
				variants={slideInFromLeft}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-xs md:text-sm text-center"
			>
				&copy; {currentYear} Natalia Salon. Todos los derechos reservados.
			</MotionP>
		</footer>
	);
}
