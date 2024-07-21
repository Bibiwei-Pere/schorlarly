import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return <input type={type} className={cn("-mb-2 flex h-9 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-5 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-black", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };