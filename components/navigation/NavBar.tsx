import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Hamburger from "./hamburger";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });

export default function NavBar() {
	return (
		<header className="text-white w-full h-auto bg-black/30 fixed top-0 z-20">
			<nav
				// className="flex flex-row items-center justify-between py-4"
				className="container mx-auto flex items-center justify-between py-2"
				// id="navbar"
			>
				{/* <Image src="/logo.png" alt="Be Beauty" width={100} height={100} /> */}
				<a href="/#start" className={(roboto.className, "justify-start ml-4")}>
					<h1 className="text-xl md:text-4xl">NATALIA</h1>
					<h2 className="text-sm md:text-md">SALON & BEAUTY SUPPLY</h2>
				</a>
				<ul className="hidden md:flex justify-center">
					<li>
						<Link href="/servicios" className="p-4 hover:text-green-300">
							Servicios
						</Link>
					</li>
					<li>
						<Link href="/productos" className="p-4 hover:text-green-300">
							Productos
						</Link>
					</li>
					<li>
						<Link href="/staff" className="p-4 hover:text-green-300">
							Staff
						</Link>
					</li>
				</ul>
				<ul className="hidden md:flex gap-2 justify-end mr-4">
					<li>
						<a href="" className="p-2">
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
						</a>
					</li>
					<li>
						<a href="" className="p-2">
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
						</a>
					</li>
					<li>
						<a
							href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
							className="p-2"
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
					</li>
				</ul>
				<Hamburger />
			</nav>
		</header>
	);
}
