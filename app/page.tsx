import NavBar from "@/components/NavBar";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="">
				<section className="flex min-h-screen flex-col items-center">
					<h1 className="text-4xl font-bold">Be Beauty</h1>
					<p className="text-lg">
						Bienvenido al lugar donde encontraras todos los productos que
						necesitas
					</p>
				</section>
			</main>
		</>
	);
}
