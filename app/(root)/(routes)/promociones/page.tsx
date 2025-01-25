"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
	id: string;
	message: string;
	full_picture?: string;
	video_url?: string;
	link?: string;
}

export default function Promociones() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch("/api/promociones");
				const data = await response.json();

				// Filter and map only reels
				const formattedPosts = data.data
					.filter((post: any) =>
						post.attachments?.data?.some(
							(attachment: any) => attachment.type === "video_inline"
						)
					)
					.map((post: any) => {
						const videoAttachment = post.attachments?.data.find(
							(attachment: any) => attachment.type === "video_inline"
						);

						return {
							id: post.id,
							message: post.message,
							video_url: videoAttachment?.media?.source || videoAttachment?.url,
							link: post.permalink_url,
						};
					});

				setPosts(formattedPosts);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching posts:", error);
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return (
		<>
			<main className="min-h-screen bg-gray-100">
				{/* Landing Section */}
				<section className="flex flex-col justify-center items-center text-center py-8 ">
					<h1 className="text-4xl font-bold mb-4">
						Descubre nuestras promociones más destacadas
					</h1>
					<p className="text-lg text-gray-700 max-w-2xl">
						Encuentra ofertas exclusivas en productos seleccionados. ¡No dejes
						pasar estas oportunidades únicas antes de que se agoten!
					</p>
				</section>

				{/* Promotions Section */}
				<section className="max-w-screen-2xl mx-auto pb-8 px-2">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
						{loading ? (
							Array(8)
								.fill(null)
								.map((_, index) => (
									<article
										className="aspect-[4/5] bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex justify-center items-center"
										key={index}
									>
										<Skeleton className="w-[90%] h-[90%]" />
									</article>
								))
						) : posts.length > 0 ? (
							posts.map((post) => (
								<article
									key={post.id}
									className=" flex flex-col space-between bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative"
								>
									<div className="relative aspect-[4/5] p-0 m-0">
										{post.video_url ? (
											<video
												src={post.video_url}
												className="p-0 m-0 object-cover"
												muted
												controls
											/>
										) : (
											<img
												src={post.full_picture}
												alt="Promotion"
												className="w-full h-full object-cover"
											/>
										)}
									</div>
									<Link
										href={
											post.link || "https://www.facebook.com/bebeautysalones"
										}
										target="_blank"
										rel="noopener noreferrer"
										className="p-4 h-20 block"
									>
										<p className="text-sm text-gray-700 line-clamp-2 hover:text-main-300 transition-colors">
											{post.message || "Visita nuestra página de Facebook"}
										</p>
									</Link>
								</article>
							))
						) : (
							<p>No se encontraron promociones.</p>
						)}
					</div>
				</section>
			</main>
		</>
	);
}
