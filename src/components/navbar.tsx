"use client";

import { AlignJustify, X } from "lucide-react"; // Add X icon for closing the drawer
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for managing drawer visibility

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// Scroll Down
				setIsVisible(false);
			} else {
				// Scroll Up
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	// Function to toggle the drawer
	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
			{/* Navbar */}
			<nav
				className={`w-full px-5 lg:px-40 py-5 flex justify-between items-center absolute top-0 left-0 transition-transform duration-300 z-50 `}
			>
				<div className="hidden lg:flex justify-center gap-5 animate-fadeIn ">
					<p className="text-foreground cursor-pointer hover:text-foreground hover:underline duration-300">
						<Link href="#about">About</Link>
					</p>
					<p className="text-foreground cursor-pointer hover:text-foreground hover:underline duration-300">
						<Link href="#featured-in">Featured In</Link>
					</p>
					{/* <p className="text-foreground cursor-pointer hover:text-foreground hover:underline duration-300">
						<Link href="#publications">Publications</Link>
					</p> */}
					<p className="text-foreground cursor-pointer hover:text-foreground hover:underline duration-300">
						<Link href="#articles">Authored Articles</Link>
					</p>
					{/* <p className="text-foreground cursor-pointer hover:text-foreground hover:underline duration-300">
						<Link href="#papers">Papers Published</Link>
					</p> */}
				</div>
				<div className="hidden md:flex justify-end gap-5">
					<Link href="mailto:nina@happy-plum.com">
						<Button className="rounded-full font-bold hover:bg-secondary">
							Get In Touch
						</Button>
					</Link>
					{/* <ModeToggle /> */}
				</div>
				{/* Drawer toggle button */}
				<div className="lg:hidden flex justify-end w-full">
					<AlignJustify onClick={toggleDrawer} className="cursor-pointer" />
				</div>
			</nav>

			{/* Drawer */}
			<div
				className={`fixed inset-0 z-50 transition-transform duration-300 transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
					} lg:hidden`}
			>
				<div className="bg-background-secondary w-3/4 h-full p-5">
					<div className="flex justify-end">
						<X onClick={toggleDrawer} className="cursor-pointer" />
					</div>
					<nav className="flex flex-col gap-5 mt-10">
						<Link href="#about" className="text-lg" onClick={toggleDrawer}>
							About
						</Link>
						<Link
							href="#featured-in"
							className="text-lg"
							onClick={toggleDrawer}
						>
							Featured In
						</Link>

						{/* <Link
							href="#publications"
							className="text-lg"
							onClick={toggleDrawer}
						>
							Publications
						</Link> */}
						<Link href="#articles" className="text-lg" onClick={toggleDrawer}>
							Authored Articles
						</Link>
						{/* <Link href="#papers" className="text-lg" onClick={toggleDrawer}>
							Papers Published
						</Link> */}

						<div>
							<Link href="mailto:nina@happy-plum.com">
								<Button className="rounded-full font-bold hover:bg-secondary px-8 py-6 ">
									Get In Touch
								</Button>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}
