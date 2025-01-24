"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Brand {
	id: string;
	name: string;
	image_url: string;
}

interface BrandMarqueeProps {
	onBrandClick: (brandName: string) => void;
}

export default function BrandsMarquee({ onBrandClick }: BrandMarqueeProps) {
	const brands: Brand[] = [
		{
			id: "1",
			name: "Alfaparf",
			image_url: "/brands/alfaparf.svg",
		},
		{
			id: "2",
			name: "Olaplex",
			image_url: "/brands/olaplex.svg",
		},
		{
			id: "3",
			name: "BabyLiss",
			image_url: "/brands/babyliss.svg",
		},
		{
			id: "4",
			name: "Il Salone Milano",
			image_url: "/brands/il-salone-milano.svg",
		},
		{
			id: "5",
			name: "Bionic",
			image_url:
				"https://bioionic.com/cdn/shop/files/Logo_Collection_BioIonic.png?height=80&v=1691374304&width=350",
		},
		{
			id: "6",
			name: "OPI",
			image_url: "/brands/opi.svg",
		},
		{
			id: "7",
			name: "Wella",
			image_url: "/brands/wella.svg",
		},
		{
			id: "8",
			name: "Tigi",
			image_url: "/brands/tigi.svg",
		},
	];

	return (
		<Marquee
			speed={60}
			gradient={true}
			gradientColor="rgba(245,245,245,0.5)"
			// pauseOnHover
			gradientWidth={100}
			autoFill
			direction="left"
			delay={0}
			className="flex items-center"
		>
			{brands.map((brand) => (
				<div key={brand.id} className="h-32 px-8 flex items-center">
					<Image
						src={brand.image_url}
						alt={brand.name}
						className=" cursor-pointer hover:scale-125 transition-transform"
						width={100}
						height={80}
						onClick={() => onBrandClick(brand.name)}
					/>
				</div>
			))}
		</Marquee>
	);
}
