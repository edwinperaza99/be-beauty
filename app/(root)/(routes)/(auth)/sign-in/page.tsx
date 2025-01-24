"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
	const { data: session } = useSession(); // Get the user's session

	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] bg-gray-100">
			<h1 className="mb-6 text-3xl font-bold text-gray-800">
				{session
					? `Welcome, ${session.user?.name || "User"}!`
					: "Sign in to your account"}
			</h1>

			{session ? (
				// Sign Out Button (if the user is logged in)
				<div className="flex flex-col gap-4">
					<h2>Hello {session.user?.email}</h2>
					<Button
						className="bg-red-500 text-white hover:bg-red-600"
						onClick={() => signOut()}
					>
						Sign Out
					</Button>
					<Button asChild>
						<Link href="/dashboard">access dashboard</Link>
					</Button>
				</div>
			) : (
				// Sign In Button (if the user is not logged in)
				<Button
					className="bg-blue-500 text-white hover:bg-blue-600"
					onClick={() => signIn()}
				>
					Sign In
				</Button>
			)}
		</div>
	);
}
