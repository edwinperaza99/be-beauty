import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Natalia Salon",
	description:
		"Descubre el mejor salón de belleza en San Salvador. Ofrecemos manicure, pedicure, tratamientos faciales, cuidado del cabello y más.",
	keywords: [
		"salon",
		"belleza",
		"cabello",
		"uñas",
		"spa",
		"estetica",
		"peluqueria",
		"salon de belleza",
		"salon de uñas",
		"salon de spa",
		"salon de estetica",
		"salon de peluqueria",
		"salon de belleza en el salvador",
		"salon de belleza en san salvador",
		"salon de belleza en san salvador",
		"sala de belleza en san salvador",
		"pedicure",
		"manicure",
		"corte de cabello",
		"tinte de cabello",
		"extensiones de cabello",
		"peinados",
		"maquillaje",
		"depilación",
		"tratamientos faciales",
		"productos de belleza",
		"productos de peluquería",
		"shampoo",
		"cremas",
		"mascarillas",
		"aceites",
		"tratamientos capilares",
		"tratamientos corporales",
		"tratamientos de uñas",
		"tratamientos de piel",
		"tratamientos de spa",
		"tratamientos de estética",
		"tratamientos de peluquería",
		"tratamientos de belleza",
		"tratamientos de cabello",
	],
	openGraph: {
		title: "Natalia Salon y Beauty Supply",
		description:
			"Descubre el mejor salón de belleza en San Salvador. Ofrecemos manicure, pedicure, tratamientos faciales, cuidado del cabello y más.",
		images: [
			{
				url: "https://futureurl/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Natalia Salon",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${libreBaskerville.className} bg-black`}>
			<body className="">
				<div className="min-h-[calc(100vh-80px)]">
					<NavBar />
					{children}
					<SpeedInsights />
					<Footer />
				</div>
			</body>
		</html>
	);
}
