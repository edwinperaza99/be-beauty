"use client";

import { motion, Variants } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionMain = motion.main;
export const MotionNav = motion.nav;
export const MotionFooter = motion.footer;

export const fadeInOut: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const slideInFromLeft: Variants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

export const slideInFromRight: Variants = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};

export const slideInFromTop: Variants = {
	hidden: { opacity: 0, y: -100 },
	visible: { opacity: 1, y: 0 },
};

export const slideInFromBottom: Variants = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0 },
};

export const scaleUp: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};
