import { Toaster } from "react-hot-toast";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto gap-4 mt-14">
			<Toaster />
			{children}
		</main>
	);
}
