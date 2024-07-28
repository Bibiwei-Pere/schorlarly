import { Bell, Book, Bookmark, FileSpreadsheetIcon, Folder, Layers, LayoutGrid, LucidePhoneCall, Search, Settings, Share } from "lucide-react";

// LANDING PAGE
export const navContent = [
	{
		url: "#",
		title: "Home",
	},
	{
		url: "#features",
		title: "Features",
	},
	{
		url: "#pricing",
		title: "Pricing",
	},
];

export const experienceData = [
	{
		id: "First",
		title: "Lorem ipsum dolor sit amet consectetur. Sed quis.",
		text: "Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.",
	},
	{
		id: "Second",
		title: "Lorem ipsum dolor sit amet consectetur. Sed quis.",
		text: "Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.",
	},
	{
		id: "Third",
		title: "Lorem ipsum dolor sit amet consectetur. Sed quis.",
		text: "Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.",
	},
];

// DASHBOARD NAVIGATION
export const dashSidebar = [
	{
		url: "/dashboard/overview",
		title: "Overview",
		icon: LayoutGrid,
	},
	{
		url: "/dashboard/projects",
		title: "Projects",
		icon: Folder,
	},
	{
		url: "/dashboard/resources",
		title: "Resources",
		icon: Layers,
	},
	{
		url: "/dashboard/learning",
		title: "Learning hub",
		icon: Book,
	},
	{
		url: "/dashboard/scratch",
		title: "Scratch pad",
		icon: Bookmark,
	},
	{
		url: "/dashboard/ethical",
		title: "Ethical guidance",
		icon: FileSpreadsheetIcon,
	},
	{
		url: "/dashboard/settings",
		title: "Settings",
		icon: Settings,
	},
	{
		url: "/dashboard/support",
		title: "Support",
		icon: LucidePhoneCall,
	},
];

export const dashHeader = [
	{
		icon: Share,
		id: "Share",
	},
	{
		url: "/dashboard/business/settings",
		icon: Settings,
	},
	{
		url: "#",
		icon: Search,
		id: "search",
	},
	{
		url: "#",
		icon: Bell,
		id: "notification",
	},
];

export const recentActivityData = [
	{
		image: "https://github.com/shadcn.png",
		name: "Demi Wikinson",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "Allah Lane",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "Lana Stein",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "Demi Wikinson",
	},
];
