import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "@/app/globals.css";
import SessionProvider from "@/components/SessionProvider";
import { authorizeAccess } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

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
		<html
			lang="en"
			className={`${libreBaskerville.className}`}
			suppressHydrationWarning
		>
			<body className="">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="min-h-screen">
						<SessionProvider session={session}>
							<SidebarProvider>
								<AppSidebar />
								<SidebarInset>
									<header className="sticky top-0 left-0 h-11 flex items-center z-50">
										<SidebarTrigger className="p-4 m-2 bg-muted hover:bg-muted-foreground" />
									</header>
									{children}
									<SpeedInsights />
								</SidebarInset>
							</SidebarProvider>
						</SessionProvider>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
