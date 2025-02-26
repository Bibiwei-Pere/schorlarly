"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
	children: JSX.Element;
	width?: "fit-content" | "100%";
}

export const Reveal1 = ({ children, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#000",
					zIndex: 1,
				}}
			/>
		</div>
	);
};

export const Reveal2 = ({ children, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export const Reveal3 = ({ children, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);
	return (
		<div>
			<motion.div style={{ position: "relative", width, overflow: "hidden" }} initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
				{children}
			</motion.div>
		</div>
	);
};

export const Reveal4 = ({ children, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#be1732",
					zIndex: 1,
				}}
			/>
		</div>
	);
};

export const Reveal5 = ({ children, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#fff",
					zIndex: 1,
				}}
			/>
		</div>
	);
};
