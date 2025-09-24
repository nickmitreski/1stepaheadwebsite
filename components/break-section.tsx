import React from "react"

type BreakSectionProps = {
  image: string
  heightClassName?: string
}

export default function BreakSection({ image, heightClassName }: BreakSectionProps) {
  return (
    <section
      className={`relative bg-gray-300 bg-cover bg-center bg-fixed ${heightClassName ?? "h-40 md:h-64"}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}


