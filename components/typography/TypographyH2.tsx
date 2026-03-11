type Props = {
    children: React.ReactNode;
}

export function TypographyH2({children}: Props) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-slate-700">
      {children}
    </h2>
  )
}
