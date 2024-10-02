"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import FeaturedCompanies from "./featured-companies";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ArrowRight } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export default function Mobile() {
	// useInView for scroll-triggered animation
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: true, // Trigger animation only once
		threshold: 0.1, // Start animation when 10% of the element is visible
	});

	// Parent motion variants with staggered animation for children
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // Stagger animation by 300ms
			},
		},
	};

	// Children motion variants
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	return (
		<motion.div
			ref={ref1}
			variants={containerVariants}
			initial="hidden"
			animate={inView1 ? "visible" : "hidden"}
			className="px-5 pt-5 md:hidden space-y-10"
		>
			<motion.h1
				className={`text-3xl md:text-5xl font-bold text-foreground z-20`}
				variants={childVariants}
			>
				Nina Greenwood
			</motion.h1>
			<motion.p className="text-foreground  z-20" variants={childVariants}>
				Nina Greenwood is the founder and CEO of Happy Plum, an Ed-Tech startup revolutionising
				the language learning space. A lifelong educator and passionate teacher and entrepreneur
				who's worked with students of all ages ranging from 1-high school.
			</motion.p>

			<motion.div
				variants={childVariants}
				className="flex items-center justify-center"
			>
				<Image
					src="/nina.jpg"
					alt="Nina Greenwood"
					width={400}
					height={400}
					priority
					className="z-10 rounded-full"
				/>
			</motion.div>
			{/* <motion.div variants={childVariants} className="px-5 relative">
				<div className="fade-effect-wrapper relative flex overflow-x-hidden space-x-14">
					<div className="space-x-14 animate-marquee whitespace-nowrap">
						<FeaturedCompanies />
					</div>
					<div className="absolute top-0 space-x-14 animate-marqueeOpposite whitespace-nowrap">
						<FeaturedCompanies />
					</div>
				</div>
			</motion.div> */}
			<motion.div
				variants={childVariants}
				className="z-10 flex items-center justify-center"
			>
				<Image
					src="/happyPlumLogo.jpeg"
					alt="Happy Plum Logo"
					width={950}
					height={955}
					className="w-2/4"
				/>
			</motion.div>

			<div className="space-y-5 py-5">
				<motion.p variants={childVariants} className="text-card">
					About
				</motion.p>

				<motion.h1 variants={childVariants} className="text-3xl font-bold">
					CEO and co-founder of <a className='underline' href='https://happy-plum.com' target='_blank'>Happy Plum</a>
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
												Amber Nigam, with over a dozen years of
												experience in healthcare and AI, is the
												co-founder and CEO of basys.ai, a
												healthtech startup focused on utilizing
												generative AI to enhance prior
												authorization and utilization management
												for health plans and health systems. In
												this role, he leads business development,
												strategy, and fundraising efforts, driven
												by a deep passion for driving cost savings
												and improving outcomes in healthcare.
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
			</div>
		</motion.div>
	);
}
