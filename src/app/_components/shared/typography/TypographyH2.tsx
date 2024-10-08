import { cn } from '../../../_lib/utils';
interface Props {
	children:React.ReactNode,
	className?:string
}

export const TypographyH2 = ({children, className}:Props) => {
	return (
		<h2 className={cn(
			"text-3xl font-semibold tracking-tight",
			className
		)}>
      {children}
    </h2>
	)
}
