import React from "react"

type QuoteBreakSectionProps = {
  image: string
  quote: string
  author?: string
  heightClassName?: string
  highlightWords?: string[]
}

function highlightText(text: string, words: string[] | undefined) {
  if (!words || words.length === 0) return text

  const escaped = words
    .filter(Boolean)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  if (escaped.length === 0) return text

  const regex = new RegExp(`(\\b(?:${escaped.join("|")})\\b)`, "gi")
  const parts = text.split(regex)

  return parts.map((part, idx) => {
    if (regex.test(part)) {
      return (
        <span key={idx} className="text-light-primary">
          {part}
        </span>
      )
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>
  })
}

export default function QuoteBreakSection({ image, quote, author, heightClassName, highlightWords }: QuoteBreakSectionProps) {
  return (
    <section
      className={`relative bg-cover bg-center bg-fixed ${heightClassName ?? "h-32 md:h-48"}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Break quote section"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <figure className="max-w-4xl text-center">
          <blockquote className="text-white text-4xl leading-relaxed">
            &ldquo;{highlightText(quote, highlightWords)}&rdquo;
          </blockquote>
          {author ? <figcaption className="mt-3 text-white/80 text-lg">— {author}</figcaption> : null}
        </figure>
      </div>
    </section>
  )
}


