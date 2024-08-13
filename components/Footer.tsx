import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-500 flex justify-between text-white py-3 px-2">
			<p className="block">
				&copy; {currentYear} Beauty Market. All rights reserved.
			</p>
			<ul className="flex gap-5 items-center">
				<li>
					<a
						href="https://whatsapp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp />
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook />
					</a>
				</li>
				<li>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>
				</li>
			</ul>
		</footer>
	);
}
