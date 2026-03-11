type Props = {
    children: React.ReactNode;
}

export function TypographyP({children}: Props) {
  return (
    <p className="[&:not(:first-child)]:mt-6 text-slate-600">
      {children}
    </p>
  )
}
