import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const generalSans = localFont({
	src: [
		{
			path: "../assets/fonts/GeneralSans-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../assets/fonts/GeneralSans-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-LightItalic.otf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../assets/fonts/GeneralSans-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-MediumItalic.otf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../assets/fonts/GeneralSans-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-SemiboldItalic.otf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../assets/fonts/GeneralSans-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../assets/fonts/GeneralSans-Extralight.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../assets/fonts/GeneralSans-ExtralightItalic.otf",
			weight: "200",
			style: "italic",
		},
	],
	variable: "--font-general-sans",
	display: "swap",
});

const satoshi = localFont({
	src: [
		{
			path: "../assets/fonts/Satoshi-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/Satoshi-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../assets/fonts/Satoshi-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../assets/fonts/Satoshi-LightItalic.otf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../assets/fonts/Satoshi-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/Satoshi-MediumItalic.otf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../assets/fonts/Satoshi-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../assets/fonts/Satoshi-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../assets/fonts/Satoshi-Black.otf",
			weight: "900",
			style: "normal",
		},
		{
			path: "../assets/fonts/Satoshi-BlackItalic.otf",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

export const metadata: Metadata = {
	title: "WalkThePlanet Inc.",
	description: "Created by WalkThePlanet Team ",
	icons: [{ rel: "icon", url: "/Logo.svg", media: "(prefers-color-scheme: dark)" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${generalSans.variable} ${satoshi.variable}`}>
			<body className="font-generalSans">{children}</body>
		</html>
	);
}
