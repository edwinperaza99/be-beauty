import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });

export default function Hamburger() {
	return (
		<>
			<button className="h-11 w-11 rounded-lg border-white flex justify-center items-center border-2">
				<div className="grid justify-items-center gap-2">
					<span className="h-1 w-8 rounded-full bg-white"></span>
					<span className="h-1 w-8 rounded-full bg-white"></span>
					<span className="h-1 w-8 rounded-full bg-white"></span>
				</div>
			</button>
		</>
	);
}
