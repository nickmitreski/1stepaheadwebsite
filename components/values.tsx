import GlowingCards, { GlowingCard } from "@/components/ui/glow-cards"
import { Zap, Shield, TrendingUp, Rocket } from "lucide-react"

const values = [
  {
    name: "Empower",
    description: "through education and self-awareness",
    icon: Zap,
  },
  {
    name: "Trust",
    description: "in the way we teach, lead, and support",
    icon: Shield,
  },
  {
    name: "Growth",
    description: "as lifelong learners, individuals, and communities",
    icon: TrendingUp,
  },
  {
    name: "Motivation",
    description: "to take action and stay 1 step ahead",
    icon: Rocket,
  },
]

export default function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-[#FFA800]">
      <div className="container space-y-16">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black">Our Values</h2>
          <p className="mt-4 text-black sm:text-lg">
            The core principles that guide everything we do at 1 Step Ahead.
          </p>
        </div>
        <GlowingCards className="mx-auto max-w-5xl" gap="2rem" padding="0">
          {values.map((value) => (
            <GlowingCard key={value.name} className="p-8">
              <div className="flex items-center gap-4">
                <value.icon className="h-8 w-8 text-black" />
                <h3 className="font-bold text-black">{value.name}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  )
}
