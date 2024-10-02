"use client";
import sendMail from "@/server/send-mail";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
	const [isFocused, setIsFocused] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Parent variants for staggered animation
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Stagger by 200ms for more smooth animation
			},
		},
	};

	// Child animation variants for individual elements
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await sendMail(email, message);
		setEmail("");
		setMessage("");
		setSubmitted(true); // Show success message
	};

	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => {
				setSubmitted(false);
			}, 3000); // Hide after 3 seconds

			// Cleanup timer if the component unmounts
			return () => clearTimeout(timer);
		}
	}, [submitted]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={containerVariants}
			className="common-padding grid grid-cols-1 md:grid-cols-6 gap-8 border-t relative"
		>
			{/* Left Column with Name, Description, and Social Links */}
			<motion.div variants={containerVariants} className="z-10 md:col-span-3">
				{/* Input with right arrow */}
				<motion.p variants={childVariants}>Get In Touch</motion.p>
				<motion.form
					onSubmit={handleSubmit}
					variants={childVariants}
					className="relative w-full md:w-2/3 mt-5"
				>
					{/* Email Input */}
					<input
						type="email"
						placeholder="Enter your email"
						className={`p-4 border h-16 border-primary w-[80%] bg-transparent rounded-md focus:outline-none mb-4`}
						autoComplete="off"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						required
					/>

					{/* Message Box */}
					<textarea
						placeholder="Enter your message"
						className="p-4 border border-primary w-full bg-transparent rounded-md focus:outline-none mb-4"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>

					{/* Submit Button */}
					<button
						type="submit"
						className="absolute inset-y-0 right-0 h-16 flex items-center z-40 bg-primary px-5 text-white hover:text-white cursor-pointer"
					>
						<MoveRight />
					</button>
				</motion.form>

				{/* Success Message */}
				{submitted && (
					<motion.p variants={childVariants} className="text-green-500">
						Response has been submitted successfully.
					</motion.p>
				)}

				<motion.p variants={childVariants} className="text-xs pt-5">
					Copyright © 2024 Nina Greenwood - All Rights Reserved.
				</motion.p>
			</motion.div>

			{/* Right Column (Form section) */}
			<motion.div className="flex flex-col gap-4 z-10" variants={containerVariants}>
				<motion.div variants={childVariants}>
					<Link
						href=""
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						Home
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#about"
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						About
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#featured-in"
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						Featured In
					</Link>
				</motion.div>
				{/* <motion.div variants={childVariants}>
					<Link
						href="#publications"
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						Publications
					</Link>
				</motion.div> */}
				<motion.div variants={childVariants}>
					<Link
						href="#articles"
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						Authored Articles
					</Link>
				</motion.div>
				{/* <motion.div variants={childVariants}>
					<Link
						href="#papers"
						className="duration-300 hover:underline hover:text-primary-hover"
					>
						Papers Published
					</Link>
				</motion.div> */}
			</motion.div>

			{/* Contact section */}
			<motion.div className="flex flex-col gap-4 z-10" variants={containerVariants}>
				<motion.p variants={childVariants}>Contact</motion.p>
				<motion.p
					variants={childVariants}
					className="hover:text-basys duration-300 cursor-pointer"
				>
					<Link href="mailto:nina@happy-plum.com">nina@happy-plum.com</Link>
				</motion.p>
			</motion.div>

			{/* Social media links */}
			<motion.div className="flex gap-3 z-20" variants={containerVariants}>
				<motion.div variants={childVariants}>
					<Link
						href="https://www.linkedin.com/in/jingximei/"
						target="_blank"
						className="hover:underline z-20 hover:text-basys duration-300"
					>
						<Linkedin />
					</Link>
				</motion.div>
				{/* <motion.div variants={childVariants}>
					<Link
						href="https://x.com/AmBeRnIgAm"
						target="_blank"
						className="hover:underline z-20 hover:text-basys duration-300"
					>
						<Twitter />
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="https://www.instagram.com/amber.nigam"
						target="_blank"
						className="hover:underline z-20 hover:text-basys duration-300"
					>
						<Instagram />
					</Link>
				</motion.div> */}
			</motion.div>
		</motion.div>
	);
}
