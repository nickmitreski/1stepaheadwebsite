import { cn } from "@/lib/utils"

interface SectionTitleProps {
  keyword: string
  title: string
  className?: string
  center?: boolean
}

export function SectionTitle({ keyword, title, className, center = true }: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", center && "text-center", className)}>
      <div className="relative inline-block">
        <h5 className="text-light-primary font-medium text-lg relative z-10">
          {keyword}
        </h5>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary"></div>
      </div>
      <h2>{title}</h2>
    </div>
  )
}