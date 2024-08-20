import "./index.css";

export default function Home() {
	return (
		<>
			<main className="">
				<section
					className="flex flex-col justify-start landing-bg"
					id="landing"
				>
					<p className="text-4xl">Es mas que cabello,</p>
					<p className="text-4xl">
						Es un <span>sentimiento</span>
					</p>
					<a href="" className="p-2 text-white bg-green-400">
						Haz tu cita
					</a>
				</section>
			</main>
		</>
	);
}
