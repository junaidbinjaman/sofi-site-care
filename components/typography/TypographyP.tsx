import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode;
    className?: string;
}

export function TypographyP({children, className, ...props}: Props) {
  return (
    <p {...props} className={cn("text-secondary-foreground leading-5.5", className)}>
      {children}
    </p>
  )
}
