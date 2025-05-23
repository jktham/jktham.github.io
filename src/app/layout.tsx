import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<head>

			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
