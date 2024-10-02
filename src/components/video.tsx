import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent } from "./ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";

interface Props {
	index: number;
	article: {
		src: string;
		type: string | "YouTube" | "Uploaded" | "Apple Podcast" | "Spotify";
		img?: string;
		title: string;
		loc: string;
	};
}

export default function Video({ index, article }: Props) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.01,
	});

	const [isModalOpen, setModalOpen] = useState(false); // Modal state

	// Animation variants for each article
	const articleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1,
				duration: 0.5,
			},
		}),
	};

	return (
		<>
			<motion.div
				ref={ref}
				key={index}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				custom={index}
				variants={articleVariants}
				className="relative z-30 hover:text-primary duration-300 cursor-pointer shadow-md group rounded overflow-clip"
				onClick={() => article.type !== "Podcast" && setModalOpen(true)} // Open modal on click
			>
				{/* Conditional rendering based on article type */}
				{article.type !== "Podcast" && article.img && (
					<div className="relative">
						<Image
							src={article.img}
							alt=""
							width={958}
							height={541}
							className="md:h-48 w-full object-cover"
						/>
						{/* Centered play button */}
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300">
							<button className="p-3 rounded-full text-white">
								<CirclePlay className="w-10 h-10" />
							</button>
						</div>
					</div>
				)}

				{article.type === "Podcast" && article.img && (
					<Link href={article.src} target="_blank" className="relative block">
						<Image
							src={article.img}
							alt=""
							width={958}
							height={541}
							className="md:h-48 w-full object-cover"
						/>
						{/* Centered play button for podcast */}
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 pointer-events-none">
							<button className="p-3 rounded-full mt-14 text-white">
								<CirclePlay className="w-10 h-10" />
							</button>
						</div>
					</Link>
				)}

				<h1 className="font-bold mt-2 px-5">{article.loc}</h1>
				<p className="text-sm font-light px-5 pb-5">{article.title}</p>
			</motion.div>

			{/* Modal for enlarged video */}
			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="bg-background-secondary border-none md:p-10 md:max-w-[70%]">
					<div className="relative">
						{article.type === "YouTube" ? (
							<iframe
								src={article.src}
								className="w-full md:h-[500px] rounded"
							></iframe>
						) : (
							<video
								src={article.src}
								controls
								autoPlay
								className="w-full h-auto"
							/>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
