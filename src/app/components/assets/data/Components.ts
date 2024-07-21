import Overview from "../images/overview.svg";
import Home from "../images/home.svg";
import Events from "../images/events.svg";
import Orders from "../images/orders.svg";
import Listing from "../images/listing.svg";
import Wallet from "../images/wallet.svg";
import Bookmarks from "../images/bookmarks.svg";
import Map from "../images/map.svg";
import MarketPlace from "../images/marketPlace.svg";
import Support from "../images/support.svg";
import Subscription from "../images/subscription.svg";
import Settings from "../images/settings.svg";
import Search from "../images/search.svg";
import Bell from "../images/bell.svg";
import Avatar from "../images/avatar.svg";
import Logout from "../images/log-out.png";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

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

export const dashSidebar = [
	{
		url: "/dashboard/business",
		title: "Home",
		image: Home,
	},
	{
		url: "/dashboard/business/overview",
		title: "Overview",
		image: Overview,
	},
	{
		url: "/dashboard/business/events",
		title: "Events",
		image: Events,
	},
	{
		url: "/dashboard/business/orders",
		title: "Orders",
		image: Orders,
	},
	{
		url: "/dashboard/business/listing",
		title: "Listing",
		image: Listing,
	},
	{
		url: "/dashboard/business/wallet",
		title: "Wallet",
		image: Wallet,
	},
	{
		url: "/dashboard/business/bookmarks",
		title: "Bookmarks",
		image: Bookmarks,
	},
	{
		url: "/dashboard/business/map",
		title: "Map",
		image: Map,
	},
	{
		class: "second",
		url: "/dashboard/business/market",
		title: "Market Place",
		image: MarketPlace,
	},

	{
		class: "third",
		url: "/dashboard/business/support",
		title: "Support",
		image: Support,
	},
	{
		url: "/dashboard/business/subscription",
		title: "Subscription",
		image: Subscription,
	},
	{
		class: "logout",
		url: "/auth/login",
		title: "Logout",
		image: Logout,
	},
];

export const dashHeader = [
	{
		url: "/dashboard/business/search",
		image: Search,
	},
	{
		url: "/dashboard/business/settings",
		image: Settings,
	},
	{
		url: "/dashboard/business/bell",
		image: Bell,
	},
	{
		url: "/dashboard/business/avatar",
		image: Avatar,
	},
];

// OVERVIEW DATA
export const tagsList = [
	{ value: "Shape", label: "Shape", icon: Turtle },
	{ value: "Color", label: "Color", icon: Cat },
	{ value: "Style", label: "Style", icon: Dog },
	{ value: "Functions", label: "Functions", icon: Rabbit },
	{ value: "Walking", label: "Walking", icon: Fish },
	{ value: "Oval", label: "Oval", icon: Cat },
];
