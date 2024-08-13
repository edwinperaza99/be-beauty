import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	return (
		<header>
			<section>
				<p>Banner with promotions here</p>
			</section>
			<nav className="flex flex-row items-center justify-between py-4">
				<Image src="/logo.png" alt="Be Beauty" width={100} height={100} />
				<ul className="flex justify-between">
					<li className="mr-8">
						<Link href="/">Home</Link>
					</li>
					<li className="mr-8">
						<a href="/products">Products</a>
					</li>
					<li className="mr-8">
						<Link href="/about">About</Link>
					</li>
					<li className="mr-8">
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
