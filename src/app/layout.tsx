import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Scholarly - Empower Your Academic Journey",
	description: "Elevate Your Achievements with Personalised Assistance and Advanced Tools Tailored for Academic Excellence.",
	keywords: "AI-Powered Research Analytics, Personalised Learning Pathways, Collaborative AI Tools, Exclusive Content Access",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
