import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export function TypographyH2({children, className}: Props) {
    return (
        <h2
            className={cn(
                "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-foreground leading-9",
                className,
            )}
        >
            {children}
        </h2>
    );
}
