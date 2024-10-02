"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface Props {
	index: number;
	paper: {
		link: string;
		author: string;
		title: string;
		year: string | number;
		description?: string;
	};
}

export default function Papers({ index, paper }: Props) {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger animation only once when scrolled into view
		threshold: 0.01, // 10% of the element is in view before animation starts
	});

	// Animation variants for each paper
	const paperVariants = {
		hidden: { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1, // Stagger delay based on index
				duration: 0.5, // Animation duration
			},
		}),
	};

	return (
		<motion.div
			ref={ref} // Each paper has its own observer
			key={index}
			initial="hidden"
			animate={inView ? "visible" : "hidden"} // Animate only when in view
			custom={index} // Pass the index to variants for staggered delay
			variants={paperVariants}
			className={`rounded-md shadow-md hover:shadow-xl hover:text-primary-hover duration-300 p-5 z-20 border`}
		>
			<Link href={paper.link} target="_blank">
				<h2 className="text-lg mb-2">{paper.title}</h2>
			</Link>
			<p className="text-sm text-gray-500">{paper.author}</p>
			<p className="text-sm text-gray-500">Year: {paper.year}</p>
		</motion.div>
	);
}
