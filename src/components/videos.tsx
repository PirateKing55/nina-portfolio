"use client";
import { outfit } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Video from "./video";

export default function FeaturedVideos() {
	// All the videos
	const videos = [
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/tedx.mp4",
			type: "Uploaded",
			title: "Aligning incentives among key stakeholders of healthcare",
			loc: "TEDx",
			img: "/thumb/tedx.webp",
		},
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Mayo+Clinic+%232.mp4",
			type: "Uploaded",
			title: "Mayo Clinic Platform_Accelerate: basys.ai",
			loc: "Mayo Clinic Platform",
			img: "/thumb/mayo.webp",
		},
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Halcyon+Fellowship+-+Halcyon+2024+Health+Showcase+%233.mp4",
			type: "Uploaded",
			title: "Halcyon 2024 Health Showcase",
			loc: "Halcyon",
			img: "/thumb/halcyon.png",
		},

		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Cheng+Fellowship+%234.mp4",
			type: "Uploaded",
			title: "2023 SICI Showcase",
			loc: "Harvard University",
			img: "/thumb/sici.png",
		},
		{
			src: "https://www.youtube.com/embed/JotFXZFmAO4?autoplay=1&mute=1",
			type: "YouTube",
			title: "Data Scientist Raises $2.4M to Automate Healthcare Authorizations and Reimbursements",
			loc: "The SaaS CFO",
			img: "/thumb/saas.png",
		},
		{
			src: "https://podcasts.apple.com/us/podcast/bringing-artificial-intelligence-into-prior-authorization/id1485735357?i=1000669672537",
			type: "Podcast",
			img: "/podcast/stratgy.webp",
			title: "Bringing artificial intelligence into prior authorization processes",
			loc: "Healthcare Strategies",
		},
		{
			src: "https://podcasts.apple.com/fr/podcast/can-ai-align-incentives-in-healthcare-basys-ai-ceo/id1760505254?i=1000669245124",
			type: "Podcast",
			img: "/podcast/theory.webp",
			title: "Can AI Align Incentives in Healthcare?",
			loc: "The Healthcare Theory Podcast",
		},
		{
			src: "https://open.spotify.com/episode/5omEkOwR0DNuaAuVKVgZas",
			type: "Podcast",
			img: "/podcast/next-in-time.png",
			title: "Redefining Healthcare",
			loc: "Next In Time",
		},
	];

	const [visibleVideos, setVisibleVideos] = useState(6); // Initially show 6 videos

	// Function to load more videos
	const showMoreVideos = () => {
		setVisibleVideos((prev) => prev + 6); // Show 6 more videos
	};

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div className="space-y-5">
			<motion.h1
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold ${outfit.className}`}
			>
				Featured In
			</motion.h1>

			<motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`${outfit.className} text-foreground-secondary`}
			>
				Presented on renowned platforms such as TEDx, and at institutions like the
				Mayo Clinic, Harvard, and MIT.
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{videos.slice(0, visibleVideos).map((article, index) => (
					<Video article={article} index={index} key={index} />
				))}
			</div>

			{/* Show More Button */}
			{visibleVideos < videos.length && (
				<div className="flex justify-center pt-5">
					<button
						onClick={showMoreVideos}
						className="z-30  flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover"
					>
						<Image src="/icons/sparkles.png" alt="" width={18} height={18} />{" "}
						Show More <ArrowRight className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	);
}
