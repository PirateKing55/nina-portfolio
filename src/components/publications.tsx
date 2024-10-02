"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Publication from "./publication";
import { ArrowRight, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { outfit } from "@/app/fonts/fonts";

export default function Publications() {
	// All the articles
	const articles = [
		{
			title: "Forbes",
			year: "2020",
			src: "/pub/forbes.png",
			link: "https://www.forbes.com/sites/frederickdaso/2022/09/05/two-harvard-students-revolutionize-diabetes-treatment-on-a-regular-basys/",
			description:
				"Long-term management of metabolic and chronic diseases represents the largest cost burden on the U.S. healthcare system. Founded in June 2021, basys.ai is a B2B SaaS platform that supports clinical decision-making for doctors using deep learning algorithms. ",
		},
		{
			title: "The Harvard Gazette",
			year: "2022",
			src: "/pub/harvard.png",
			link: "https://news.harvard.edu/gazette/story/newsplus/transforming-public-health-through-social-innovation/",
			description:
				"Amber Nigam, SM '23, co-founded the tech start-up basys.ai with Jie Sun, SM '22. The company's software tool uses artificial intelligence to track, predict, and intervene in the health of patients with diabetes. “Our goal is to impact as many people as possible,” Nigam said.",
		},
		{
			title: "Harvard T.H Chan",
			year: "2022",
			src: "/pub/harvard-chan.png",
			link: "https://www.hsph.harvard.edu/news/features/need-help-managing-diabetes-these-students-made-an-app-for-that/",
			description:
				"Amber Nigam, SM '23, aims to help people with diabetes feel as though they're living without it. As a co-founder of basys.ai, a tech startup, he developed an easy-to-use app that allows diabetes patients to track their blood glucose levels, activities, diet, and more. ",
		},
		{
			title: "The Business Journals",
			year: "2022",
			src: "/pub/tbj.png",
			link: "https://www.bizjournals.com/boston/inno/stories/news/2022/10/04/ai-startup-from-harvard-innovation-labs-launches.html",
			description:
				"A newly launched tech company, founded by two Harvard T.H. Chan School of Public Health students, uses AI to predict and improve outcomes for patients with metabolic health diseases. Their approach aims to enhance patient care and optimize treatment strategies.",
		},
		{
			title: "NASDAQ",
			year: "2022",
			src: "/pub/nasdaq.png",
			link: "https://www.nasdaq.com/articles/amber-nigam%3A-improving-metabolic-health-for-billions-through-ai",
			description:
				"Hey, guys! It's Spiffy, and I'm back again on Planet Earth with an eye out for entrepreneurs making a difference in the world! I have another great interview for you this week. Today, I'm excited to speak with Amber Nigam, the co-founder and CEO of basys.ai. Let's see what inspiring work he's been up to.",
		},
		{
			title: "MIT News",
			year: "2020",
			src: "/pub/mit.png",
			link: "https://news.mit.edu/2020/what-is-covid-19-data-tsunami-telling-policymakers-0701",
			description:
				"Amber Nigam, a data scientist based in New Delhi, India, has watched conspiracy theories spread and multiply on social media as contagiously as Covid-19 itself. “There's a lot of anxiety,” he says. “Even my parents have shown me news on WhatsApp and asked if it was true.”",
		},
		{
			title: "NYC Daily Post",
			year: "2022",
			src: "/pub/nyc.png",
			link: "https://nycdailypost.com/2022/06/16/health/amber-nigam-boston-congress-of-public-health-40-under-40-winner/",
			description:
				"The inaugural 40 Under 40 Public Health Catalyst Awards aim to highlight the rising leaders and innovators of the public health field. The Boston Congress of Public Health (BCPH) and the HPHR Journal selected a group of “leaders, entrepreneurs, researchers, scientists, activists”, and doctors",
		},
		{
			title: "Tech Crunch",
			year: "2023",
			src: "/pub/techchrunch2.png",
			link: "https://techcrunch.com/2023/08/10/basys-ai-2-4m-prior-authorization-mayo-clinic-healthcare/",
			description:
				"One new company taking advantage is Basys.ai, which helps health plans and health systems adopt value-based care, starting with prior authorization. It was founded in early 2022 by Amber Nigam and Jie Sun, who met while in Harvard's health data science program.",
		},
		{
			title: "Adobe",
			year: "2021",
			src: "/pub/adobe2.png",
			link: "https://research.adobe.com/publication/nlp-and-deep-learning-methods-for-curbing-the-spread-of-misinformation-in-india/",
			description:
				"The current fight against COVID-19 is not only around its prevention and cure but it is also about mitigating the negative impact resulting from misinformation around it. The pervasiveness of social media and access to smartphones has propelled the spread of misinformation on such a large scale that it is considered as one of the main threats to our society by the World Economic Forum.",
		},
		{
			title: "Business Insider",
			year: "2023",
			src: "/pub/Business-Insider-Logo.png",
			link: "https://markets.businessinsider.com/news/stocks/basys-ai-raises-an-oversubscribed-pre-seed-funding-round-to-facilitate-seamless-prior-authorization-for-health-plans-and-members-1032554893",
			description:
				"basys.ai, a healthcare technology company co-founded by Harvard alumni Amber Nigam and Jie Sun in 2022 at Harvard University, is excited to announce the successful completion of its latest funding round, securing a total of $2.4 million in investments. This funding will enable basys.ai to further its mission of empowering payers to streamline processes like prior authorization and utilization management.",
		},
	];

	const carouselRef = useRef<HTMLDivElement>(null);
	const carouselRef2 = useRef<HTMLDivElement>(null);

	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (carouselRef.current) {
			const carouselWidth = carouselRef.current.scrollWidth;
			const visibleWidth = carouselRef.current.offsetWidth;

			// Calculate the center position
			const centerPosition = (carouselWidth - visibleWidth) / 2;

			// Scroll to center position
			carouselRef.current.scrollTo({
				left: centerPosition,
				behavior: "smooth",
			});
		}
	}, []);

	const [visibleArticles, setVisibleArticles] = useState(6); // Initially show 6 articles

	// Function to load more articles
	const showMoreArticles = () => {
		setVisibleArticles((prev) => prev + 6); // Show 6 more articles
	};

	return (
		<div className="space-y-5">
			<motion.h1
				ref={ref2}
				initial={{ opacity: 0, y: 100 }}
				animate={inView2 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold z-20 ${outfit.className}`}
			>
				Publications
			</motion.h1>
			<motion.p
				ref={ref2}
				initial={{ opacity: 0, y: 100 }}
				animate={inView2 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-foreground-secondary z-20 ${outfit.className}`}
			>
				Recognized across numerous reputable platforms, basys.ai's pioneering work
				in AI-driven healthcare continues to solidify its position as an industry
				leader and innovator.
			</motion.p>
			<motion.div ref={carouselRef2} transition={{ duration: 0.5 }}>
				{/* Carousel */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{articles.slice(0, visibleArticles).map((article, index) => (
						<Publication publication={article} index={index} key={index} />
					))}
				</div>
				{visibleArticles < articles.length && (
					<div className="flex justify-center mt-10">
						<button
							onClick={showMoreArticles}
							className="z-30  flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover"
						>
							<Image
								src="/icons/sparkles.png"
								alt=""
								width={18}
								height={18}
							/>{" "}
							Show More <ArrowRight className="w-5 h-5" />
						</button>
					</div>
				)}
			</motion.div>
		</div>
	);
}
