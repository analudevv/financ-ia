import type { LucideIcon } from "lucide-react"

interface FormStepProps {
	icon: LucideIcon
	title: string
	question: string
}

export function FormStep({ icon: Icon, title, question }: FormStepProps) {
	return (
		<div className="bg-card rounded-2x1 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
			<div className="bg-primary mb-4 flex h-15 w-15 items-center justify-center rounded-x1">
				<Icon size={30} className="text-card-foreground" />
			</div>
			<h2 className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">{title}</h2>
			<h3 className="text-foreground mb-6 text-x1 leading-snug font-semibold sm:text-2x1">{question}</h3>
		</div>
	)
}