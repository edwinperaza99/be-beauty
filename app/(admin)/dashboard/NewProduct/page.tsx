"use client";

import AddForm from "@/app/(admin)/dashboard/NewProduct/AddForm";
import { Toaster } from "react-hot-toast";

export default function Dashboard() {
	return (
		<>
			<main className="mx-auto gap-4 mt-14">
				<Toaster />
				<AddForm />
			</main>
		</>
	);
}
