"use client";

import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MotionHeader, slideInFromTop } from "@/components/motionUtils";
import Image from "next/image";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });

export default function NavBar() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);

	const toggleNavbar = () => {
		setNavbarOpen(!isNavbarOpen);
	};
	return (
		<MotionHeader
			variants={slideInFromTop}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="text-white w-full h-auto bg-black/70 fixed top-0 z-20"
		>
			<nav
				// className="flex flex-row items-center justify-between py-4"
				className="md:container mx-auto flex items-center justify-between p-4"
				// id="navbar"
			>
				{/* <Image src="/logo.png" alt="Be Beauty" width={100} height={100} /> */}
				<Link
					href="/#start"
					className={
						(roboto.className, "group justify-start flex items-center gap-1")
					}
				>
					<div>
						<h1 className="text-xl md:text-4xl group-hover:text-green-300 transition-colors duration-300">
							NATALIA
						</h1>
						<h2 className="text-sm md:text-md group-hover:text-green-300 transition-colors duration-300">
							SALON & BEAUTY SUPPLY
						</h2>
					</div>
					<figure className="aspect-square">
						<Image src="/logo.png" alt="Be Beaut logo" width={80} height={80} />
					</figure>
				</Link>
				<ul className="hidden md:flex justify-center">
					<li>
						<Link
							href="/servicios"
							className="p-4 hover:text-green-300 transition-colors"
						>
							Servicios
						</Link>
					</li>
					<li>
						<Link
							href="/productos"
							className="p-4 hover:text-green-300 transition-colors"
						>
							Productos
						</Link>
					</li>
					<li>
						<Link
							href="/promociones"
							className="p-4 hover:text-green-300 transition-colors"
						>
							Promociones
						</Link>
					</li>
				</ul>
				{/* social media links */}
				<ul className="hidden md:flex gap-3 justify-end items-center">
					<li>
						<Link
							href="https://www.instagram.com/nataliasalones/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-green-300 text-2xl p-2 transition-colors"
						>
							<FaInstagram />
						</Link>
					</li>
					<li>
						<Link
							href="https://www.facebook.com/nataliasalones/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-green-300 text-2xl p-2 transition-colors"
						>
							<FaFacebook />
						</Link>
					</li>
					<li>
						<Link
							href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-green-300 text-2xl p-2 transition-colors"
						>
							<FaWhatsapp />
						</Link>
					</li>
				</ul>

				{/* hamburger menu button  */}
				<button
					title="Menu"
					className="md:hidden group h-11 w-11 flex justify-center items-center"
					onClick={toggleNavbar}
				>
					<div className="grid place-content-center gap-2">
						<span
							className={`block h-0.5 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${
								isNavbarOpen ? "transform rotate-45 translate-y-2.5" : ""
							}`}
						></span>
						<span
							className={`block h-0.5 w-8 bg-white rounded-full transition-opacity duration-300 ease-in-out ${
								isNavbarOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block h-0.5 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${
								isNavbarOpen ? "transform -rotate-45 -translate-y-2.5" : ""
							}`}
						></span>
					</div>
				</button>

				{/* mobile menu when toggled  */}
				{isNavbarOpen && (
					<div className="absolute top-full left-0 w-full bg-black/70">
						<ul className="flex flex-col justify-center text-center pt-4 gap-2 text-base">
							<li>
								<Link
									href="/servicios"
									className="p-4 hover:text-green-300 transition-colors"
									onClick={toggleNavbar}
								>
									Servicios
								</Link>
							</li>
							<li>
								<Link
									href="/productos"
									className="p-4 hover:text-green-300 transition-colors"
									onClick={toggleNavbar}
								>
									Productos
								</Link>
							</li>
							<li>
								<Link
									href="/promociones"
									className="p-4 hover:text-green-300 transition-colors"
									onClick={toggleNavbar}
								>
									Promociones
								</Link>
							</li>
						</ul>
						<ul className="flex gap-2 justify-end mr-4 items-center">
							<li>
								<Link
									href="https://www.instagram.com/nataliasalones/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 hover:text-green-300 text-2xl transition-colors"
								>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link
									href="https://www.facebook.com/nataliasalones/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 hover:text-green-300 text-2xl transition-colors"
								>
									<FaFacebook />
								</Link>
							</li>
							<li>
								<Link
									href="https://api.whatsapp.com/send/?phone=50372951072&text&type=phone_number&app_absent=0"
									target="_blank"
									rel="noopener noreferrer hover:text-green-300 text-2xl"
									className="p-2 hover:text-green-300 text-2xl transition-colors"
								>
									<FaWhatsapp />
								</Link>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</MotionHeader>
	);
}
