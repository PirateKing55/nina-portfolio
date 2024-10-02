import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
	index: number;
	article: { link: string; src: string; title: string };
}

export default function Articles({ index, article }: Props) {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger animation only once when scrolled into view
		threshold: 0.01, // 10% of the element is in view before animation starts
	});

	// Animation variants for each article
	const articleVariants = {
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
			ref={ref} // Each article has its own observer
			key={index}
			initial="hidden"
			animate={inView ? "visible" : "hidden"} // Animate only when in view
			custom={index} // Pass the index to variants for staggered delay
			variants={articleVariants}
			className="z-30 hover:text-primary-hover duration-300 hover:shadow-md"
		>
			<Link href={article.link} target="_blank">
				<Image
					src={article.src}
					alt=""
					width={958}
					height={541}
					className="rounded-md md:h-32 w-full object-cover"
				/>
				<p className="p-2">{article.title}</p>
			</Link>
		</motion.div>
	);
}
