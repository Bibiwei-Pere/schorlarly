import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />);
CardFooter.displayName = "CardFooter";

interface CardWalletProp {
	title: string;
	header: string;
}
interface CardWalletProp2 {
	icon: any;
	icon2: any;
	title: string;
	header: string;
	percent: string;
	price: string;
}

const CardWallet = ({ title, header }: CardWalletProp) => {
	return (
		<div className="cardWallet relative flex flex-col p-[12px] gap-[10px] rounded-[8px] border border-gray-200">
			<h4>{title}</h4>
			<h2>{header}</h2>
		</div>
	);
};
const CardWallet2 = ({ title, icon, icon2, header, percent, price }: CardWalletProp2) => {
	return (
		<div className="cardWallet2 relative flex flex-col p-[15px] gap-[20px] border border-gray-100">
			<div className="flex items-center gap-2">
				<div className="icon flex relative items-center justify-center icon w-[25.68px] h-[25.68px] rounded-full">
					<div className="iconDetails flex items-center justify-center w-[16px] h-[16px] rounded-full">{icon}</div>
				</div>
				<p className="text-[12.5px] font-semibold">{title}</p>
			</div>
			<div className="flex flex-col gap-1">
				<h2>{header}</h2>

				<div className="flex items-center gap-1 justify-between">
					<div className="flex items-center gap-1">
						<div className="icon2 w-[17px] h-[17px] rounded-full p-[1px]">{icon2}</div>
						<h4>{percent}%</h4>
					</div>
					<div className="flex items-center gap-1">
						<h4>+{price}</h4>
						<h4>this week</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardWallet, CardWallet2 };
