"use client";
import { outfit } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Papers from "./papers";

export default function PublishedPapers() {
	const papers = [
		{
			title: "System and method for providing job recommendations based on users' latent skills",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:_FxGoFyzp5QC",
			author: "A Nigam",
			year: 2021,
			description:
				"This paper explores a system that recommends jobs based on a user’s latent skills using advanced AI techniques.",
		},
		{
			title: "NLP and deep learning methods for curbing the spread of misinformation in India",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:ufrVoPGSRksC",
			author: "A Nigam, P Jaiswal, S Sundar, M Poddar, N Kumar, F Dernoncourt, ...",
			year: 2021,
			description:
				"A study on using natural language processing and deep learning to combat misinformation in India.",
		},
		{
			title: "SkillBERT: 'Skilling' the BERT to classify skills!",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:eQOLeE2rZwMC",
			author: "A Nigam, S Tyagi, K Tyagi, A Saxena",
			year: 2020,
			description:
				"A modification of the BERT model tailored to classify job-related skills more accurately.",
		},
		{
			title: "A Data-Driven Approach for Addressing Sexual and Reproductive Health Needs Among Youth Migrants",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:zYLM7Y9cAGgC",
			author: "P Jaiswal, A Nigam, T Arora, U Girkar, LA Celi, KE Paik",
			year: 2020,
			description:
				"This paper discusses using data science to improve sexual and reproductive health services for youth migrants.",
		},
		{
			title: "Job recommendation through progression of job selection",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:9yKSN-GCB0IC",
			author: "A Nigam, A Roy, H Singh, H Waila",
			year: 2019,
			description:
				"Presents an approach for job recommendation systems based on job selection progressions.",
		},
		{
			title: "Migration through Machine Learning Lens—Predicting Sexual and Reproductive Health Vulnerability of Young Migrants",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:2osOgNQ5qMEC",
			author: "A Nigam, P Jaiswal, U Girkar, T Arora, LA Celi",
			year: 2019,
			description:
				"A machine learning study predicting health vulnerabilities in young migrant populations.",
		},
		{
			title: "Understand the effect of environmental and structural migration factors on the sexual and reproductive health of youth in central Asia and Africa: a modeling study",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:qjMakFHDy7sC",
			author: "U Girkar, P Jaiswal, A Nigam, T Arora",
			year: 2019,
			description:
				"Modeling the influence of migration factors on youth health in central Asia and Africa.",
		},
		{
			title: "Intent detection and slots prompt in a closed-domain chatbot",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:d1gkVwhDpl0C",
			author: "A Nigam, P Sahare, K Pandya",
			year: 2019,
			description:
				"Explores techniques for intent detection in closed-domain chatbots using deep learning.",
		},
		{
			title: "Role of intonation in scoring spoken English",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:u-x6o8ySG0sC",
			author: "A Nigam, A Saxena, I Sodhi",
			year: 2018,
			description:
				"Investigates the role of intonation patterns in assessing spoken English fluency.",
		},
		{
			title: "Exploring Automated Essay Scoring for Nonnative English Speakers",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:u5HHmVD_uO8C",
			author: "A Nigam",
			year: 2017,
			description:
				"Examines techniques for automating essay scoring for non-native English speakers.",
		},
		{
			title: "SkillBERT: Skilling the BERT to classify skills using Electronic Recruitment Records",
			link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=ii4T2eMAAAAJ&sortby=pubdate&citation_for_view=ii4T2eMAAAAJ:WF5omc3nYNoC",
			author: "Amber Nigam, Shikha Tyagi, Kuldeep Tyagi",
			year: "Nill",
		},
	];

	const [visiblePapers, setVisiblePapers] = useState(6); // Initially show 6 papers

	const showMorePapers = () => {
		setVisiblePapers((prev) => prev + 6); // Show 6 more papers when clicked
	};

	const { ref: ref4, inView: inView4 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div className="space-y-5">
			<motion.h1
				ref={ref4}
				initial={{ opacity: 0, y: 20 }}
				animate={inView4 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold ${outfit.className}`}
			>
				Papers Published
			</motion.h1>

			<motion.p
				ref={ref4}
				initial={{ opacity: 0, y: 20 }}
				animate={inView4 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`${outfit.className} text-foreground-secondary`}
			>
				Published research papers focused on advancements in AI and health data
				science
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{papers.slice(0, visiblePapers).map((paper, index) => (
					<Papers index={index} paper={paper} key={index} />
				))}
			</div>

			{visiblePapers < papers.length && (
				<div className="flex justify-center">
					<button
						onClick={showMorePapers}
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
