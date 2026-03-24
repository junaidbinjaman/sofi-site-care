import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
    children: ReactNode;
    className?: string;
}

export function TypographyH1({children, className}: Props) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)}>
      {children}
    </h1>
  )
}
