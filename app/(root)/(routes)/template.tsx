export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<div className="animate-appear-top">
			{/* Header spacer */}
			<div className="h-[80px] md:h-[120px] bg-black"></div>

			{children}
		</div>
	);
}
