"use client";

import { Button } from "@/components/ui/button";
import AddForm from "./AddForm";

export default function Dashboard() {
	return (
		<>
			<main className="mx-auto gap-4 mt-14">
				<AddForm />
			</main>
		</>
	);
}
