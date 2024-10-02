import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { outfit } from "./fonts/fonts";

export const metadata: Metadata = {
	title: "Nina Greenwood",
	description:
		"Nina Greenwood is the founder and CEO of Happy Plum, an Ed-Tech startup revolutionising the language learning space. A lifelong educator and passionate teacher and entrepreneur who's worked with students of all ages ranging from 1- high school.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.className}  antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
