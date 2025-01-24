import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "@/app/globals.css";
import SessionProvider from "@/components/SessionProvider";
import { authorizeAccess } from "@/lib/auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Administrador | Natalia Salon",
	description: "Administrador de Natalia Salon",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Check if the user is authorized
	// NOTE: This is the only difference between this file and app/(root)/layout.tsx
	const session = await authorizeAccess();

	if (!session) {
		// redirect("/not-authorized"); // Redirect unauthorized users
		redirect("/sign-in");
	}
	return (
		<html lang="en" className={libreBaskerville.className}>
			<body className="">
				<div className="min-h-screen">
					<SessionProvider session={session}>
						{children}
						<SpeedInsights />
					</SessionProvider>
				</div>
			</body>
		</html>
	);
}
