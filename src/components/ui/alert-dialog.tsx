"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import Success from "../../app/components/assets/images/success.png";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { AlertTriangle, CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Overlay className={cn("fixed max-w-[1440px] mx-auto inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} ref={ref} />);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>(({ className, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content ref={ref} className={cn("fixed max-w-[1440px] mx-auto left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className)} {...props} />
	</AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />;
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />;
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />);
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />);
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogAction2 = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Action ref={ref} className={cn("bg-white absolute right-0 w-[30px] h-[30px] p-0 m-0 hover:bg-transparent", className)} {...props} />);
AlertDialogAction2.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Cancel>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>(({ className, ...props }, ref) => <AlertDialogPrimitive.Cancel ref={ref} className={cn(buttonVariants({ variant: "secondary" }), "mt-2 sm:mt-0", className)} {...props} />);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

interface SuccessProp {
	variant?: string;
	triggerBtn: string;
	title: string;
	description: string;
	dialogCancel: string;
	dialogAction: string;
}

interface SuccessProp2 {
	title: string;
	description?: string;
}

const ErrorModal = ({ variant, triggerBtn, title, description, dialogCancel, dialogAction }: SuccessProp) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={variant ? "secondary" : "default"}>{triggerBtn}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="left-[50%] top-[50%]">
				<AlertDialogHeader className="flex-row gap-4">
					<div className="rounded-full w-[48px] h-[48px] p-[10px] flex items-center justify-center bg-[#FFFAEB]">
						<div className="rounded-full w-[32px] h-[32px] p-[5px] flex items-center justify-center bg-yellow-100">
							<AlertTriangle className="text-red-700" />
						</div>
					</div>
					<div>
						<AlertDialogTitle className="text-black pb-2">{title}</AlertDialogTitle>
						<AlertDialogDescription>{description}</AlertDialogDescription>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex mt-[10px]">
					<div className="flex gap-[10px] max-w-[500px]">
						<AlertDialogCancel>{dialogCancel}</AlertDialogCancel>
						<AlertDialogAction>{dialogAction}</AlertDialogAction>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

const SuccessModal = ({ variant, triggerBtn, title, description, dialogCancel, dialogAction }: SuccessProp) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={variant ? "secondary" : "default"}>{triggerBtn}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="left-[50%] top-[50%]">
				<AlertDialogHeader className="flex-row gap-4">
					<div className="rounded-full w-[48px] h-[48px] p-[10px] flex items-center justify-center bg-[#EDFDF4]">
						<div className="bg-[#EDFDF4]">
							<CircleCheck className="text-green-500" />
						</div>
					</div>
					<div>
						<AlertDialogTitle className="text-black pb-2">{title}</AlertDialogTitle>
						<AlertDialogDescription>{description}</AlertDialogDescription>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex mt-[10px]">
					<div className="box">
						<AlertDialogCancel>{dialogCancel}</AlertDialogCancel>
						<AlertDialogAction className="bg-green-500">{dialogAction}</AlertDialogAction>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

const SuccessModal2 = ({ title, description }: SuccessProp2) => {
	return (
		<AlertDialogContent className="left-[50%] top-[50%]">
			<div className="relative flex w-full">
				<AlertDialogAction2>
					<CircleX />
				</AlertDialogAction2>
			</div>
			<AlertDialogHeader className="flex items-center mt-10 w-full">
				<Image src={Success} alt="Success" />
				<AlertDialogTitle className="relative text-black bottom-[-8px] text-center max-w-[400px]">{title}</AlertDialogTitle>
				{description && <p>{description}</p>}
			</AlertDialogHeader>
		</AlertDialogContent>
	);
};

export { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, ErrorModal, SuccessModal, SuccessModal2 };
