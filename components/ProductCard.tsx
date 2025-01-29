import { Product } from "@/app/(root)/(routes)/productos/page";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }: { product: Product }) {
	const WhatsAppMessage = encodeURIComponent(
		`Hola, estoy interesado en el producto "${product.name}". ¿Está disponible?`
	);
	const WhatsAppUrl = `https://api.whatsapp.com/send/?phone=50372951072&text=${WhatsAppMessage}&type=phone_number&app_absent=0`;

	return (
		<article className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg duration-300 hover:scale-105 transition-transform">
			<div className="aspect-square">
				<img
					src={product.image_url || "https://placehold.co/600x400"}
					alt={`${product.name} image`}
					className="aspect-square object-cover object-center"
				/>
			</div>
			<div className="p-4">
				<h2 className="font-base font-bold line-clamp-2">{product.name}</h2>
				<div className="mt-4 flex justify-between items-center">
					<div className="flex-1">
						{product.selling_price ? (
							<p className="text-base ">${product.selling_price}</p>
						) : (
							<div className="h-6" />
						)}
					</div>
					<button
						title="Pregunte por este producto por medio de WhatsApp"
						className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
					>
						<Link href={WhatsAppUrl} target="_blank" rel="noopener noreferrer">
							<FaWhatsapp size={24} />
						</Link>
					</button>
				</div>
			</div>
		</article>
	);
}
