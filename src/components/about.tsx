"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

export default function AboutSection() {
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	// Parent variants for staggering children animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // 0.3 seconds delay between each item
			},
		},
	};

	// Child variants for individual items animation
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div
			ref={ref1}
			initial="hidden"
			animate={inView1 ? "visible" : "hidden"}
			variants={containerVariants} // Parent container to stagger children
			className="common-style relative grid grid-cols-1 md:grid-cols-2 gap-5"
			id="about"
		>
			{/* Left side: image */}
			<motion.div
				variants={childVariants}
				className="z-10 flex items-center justify-center"
			>
				{/* <Link className="w-fit" href={"https://happy-plum.com"} target="_blank"> */}
				<Image
					src="/happyPlumLogo.jpeg"
					alt="Happy Plum Logo"
					width={950}
					height={955}
					className="w-2/3"
				/>
				{/* </Link> */}
			</motion.div>

			{/* Right side: text and stats */}
			<motion.div className="flex flex-col justify-center gap-5">
				<motion.p variants={childVariants} className="text-card">
					About
				</motion.p>

				<motion.h1 variants={childVariants} className="text-3xl font-bold">
					CEO and founder of <a className='underline' href='https://happy-plum.com' target='_blank'>Happy Plum</a>
				</motion.h1>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					Happy Plum is a gen AI-powered ed-tech platform focused on transforming
					language learning for pre-K to K-12 students by connecting the student,
					the parent, and the teacher in the learning process. Our mission is to
					create engaging, personalized learning experiences that foster a love
					for languages from an early age.
				</motion.p>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					<strong>Vision: </strong>
					To impact the most number of pre-K and K-12 students worldwide with our Ed-Tech platform.
				</motion.p>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					<strong>Future Goals: </strong>
					I see Happy Plum capturing the US market and would like to expand to asia
					and europe, and be the global leader in language learning solutions.
				</motion.p>

				<motion.ul variants={childVariants} className="text-foreground-secondary">
					<strong>Highlighted Achievements:</strong>
					<li>2015 US Department of State <a className='underline' href='https://www.nsliforyouth.org/' target='_blank'>NSLIY</a></li>
					<li>2018 US Department of State <a className='underline' href='https://clscholarship.org/' target='_blank'>CLS</a></li>
					<li>5+ years experience in the education industry</li>
				</motion.ul>

				{/* Stats */}
				{/* <motion.div variants={containerVariants} className="flex gap-5">
					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">14+</h1>
						<p>Years of experience</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">11</h1>
						<p>Papers Published</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">2 M+</h1>
						<p>Funds Raised</p>
					</motion.div>
				</motion.div> */}
				{/* <motion.div variants={childVariants} className="z-30">
					<Dialog>
						<DialogTrigger asChild>
							<button className="z-30 flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover">
								<Image
									src="/icons/sparkles.png"
									alt=""
									width={18}
									height={18}
								/>{" "}
								Show More <ArrowRight className="w-5 h-5" />
							</button>
						</DialogTrigger>
						<DialogContent className="rounded border-none bg-background">
							<DialogHeader>
								<DialogTitle>Amber Nigam</DialogTitle>
								<DialogDescription>
									<ScrollArea className="w-full h-96">
										<div className="pr-2 space-y-3 text-left text-black">
											<p>
												Happy Plum is a gen AI-powered ed-tech platform focused
												on transforming language learning for pre-K to K-12
												students by connecting the student, the parent,
												and the teacher in the learning process. Our mission
												is to create engaging, personalized learning experiences
												that foster a love for languages from an early age.
											</p>
											<p>
												Amber holds an MS in Health Data Science
												from Harvard University, where he was
												recognized as a Cheng Fellow, Roslyn and
												Lisle Payne Scholar, and a recipient of
												the 40 under 40 award from the Boston
												Congress of Public Health. Throughout his
												academic career, he has contributed to
												three patents and authored multiple
												research papers on the intersection of AI
												and healthcare.
											</p>
											<p>
												Previously, Amber founded kydots.ai, where
												he led both business development and
												engineering teams to deliver a SaaS
												product for enterprise clients in the
												financial management and human capital
												sectors. This venture resulted in two
												patents, a research paper, and an
												acquisition.
											</p>
											<p>
												A strong advocate for community and
												collective leadership, Amber actively
												mentors startups at TechStars, Harvard,
												MIT, MassChallenge, and XLerateHealth. He
												has also served as Co-Director of the
												Harvard Business Club, providing strategic
												support and fundraising guidance to
												Harvard-affiliated founders.
											</p>
											<p>
												An applied machine learning enthusiast,
												Amber has contributed to both professional
												and academic initiatives in the AI domain,
												including co-instructing the
												"Collaborative Data Science in Medicine -
												HST.953" course at MIT. His work has been
												featured at leading machine learning
												conferences like NeurIPS and ACL, as well
												as in prestigious journals such as Lancet
												and Springer.
											</p>
											<p>
												Healthcare and technology are personal
												passions for Amber, and he has shared his
												insights on public platforms, speaking at
												events like TEDx, Mayo Clinic, DuPont, and
												Udacity. His startups have been featured
												in outlets such as Forbes and TechCrunch.
											</p>
										</div>
									</ScrollArea>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</motion.div> */}
			</motion.div>
		</motion.div>
	);
}
