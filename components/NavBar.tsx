import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	return (
		<header>
			<nav
				className="flex flex-row items-center justify-between py-4"
				id="navbar"
			>
				{/* <Image src="/logo.png" alt="Be Beauty" width={100} height={100} /> */}
				<div className="justify-start ml-2">
					<h1 className="text-4xl">NATALIA</h1>
					<h2>SALON & BEAUTY SUPPLY</h2>
				</div>
				<ul className="flex justify-center">
					<li>
						<Link href="/" className="p-4 hover:text-green-300">
							Home
						</Link>
					</li>
					<li>
						<Link href="/products" className="p-4 hover:text-green-300">
							Products
						</Link>
					</li>
					<li>
						<Link href="/about" className="p-4 hover:text-green-300">
							About
						</Link>
					</li>
					<li>
						<Link href="/contact" className="p-4 hover:text-green-300">
							Contact
						</Link>
					</li>
				</ul>
				<ul className="flex gap-2 justify-end mr-1">
					<li>
						<a href="" className="p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
								<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
