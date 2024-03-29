export function Section(
  { children, title, text }
  :
  { children: React.ReactNode, title: string, text: string },
) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-6 my-28">
      <h1 className="text-6xl font-bold text-center">
        {title}
      </h1>
      <div className="w-full max-w-xs h-1 bg-primary rounded-full" />
      <p className="text-xl w-full max-w-4xl text-center">
        {text}
      </p>
      {children}
    </section>
  );
}
