"use client";
import AboutSection from "@/components/about";
import AuthoredArticles from "@/components/authored-articles";
import FeaturedCompanies from "@/components/featured-companies";
import FirstSection from "@/components/first-section";
import Media from "@/components/media";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PublishedPapers from "@/components/papers-published";
import Publications from "@/components/publications";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { outfit } from "./fonts/fonts";
import FeaturedVideos from "@/components/videos";
import Mobile from "@/components/mobile";

export default function Home() {
	const { ref, inView } = useInView({
		threshold: 0.5, // Trigger when 10% of the element is visible
		triggerOnce: true, // Trigger only once
	});

	return (
		<div className="bg-background text-foreground">
			<Navbar />
			<div className="hidden md:block pt-12">
				<FirstSection />

				<AboutSection />
			</div>
			<Mobile />

			<div className="px-5 md:px-40 min-h-fit py-5 md:py-10" id="featured-in">
				<Media />
			</div>
			<div className="px-5 md:px-40 min-h-fit py-5 md:py-10 mb-10" id="articles">
				<AuthoredArticles />
			</div>

			<Footer />
		</div>
	);
}
