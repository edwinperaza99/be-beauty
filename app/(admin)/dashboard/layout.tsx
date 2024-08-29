import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Administrador | Natalia Salon",
	description: "Administrador de Natalia Salon",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={libreBaskerville.className}>
			<body className="">
				<div className="min-h-[calc(100vh-80px)]">
					{children}
					<SpeedInsights />
				</div>
			</body>
		</html>
	);
}
