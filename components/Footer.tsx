import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-500 flex justify-center text-white py-3 px-2">
			<p className="text-sm text-center">
				&copy; {currentYear} Natalia Salon. Todos los derechos reservados.
			</p>
		</footer>
	);
}
