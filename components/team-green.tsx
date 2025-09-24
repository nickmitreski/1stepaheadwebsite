import GlowingCards, { GlowingCard } from "@/components/ui/glow-cards"

export default function TeamGreen() {
  return (
    <section id="team-green" className="py-24 md:py-32 bg-[#FFA800]">
      <div className="container space-y-10">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black text-center">Our Team</h2>
        <p className="text-black text-center max-w-[58rem] mx-auto">
          Our programs are co-facilitated by experts in:
        </p>
        <GlowingCards className="mx-auto max-w-5xl" gap="2rem" padding="0">
          <GlowingCard className="p-8"><p className="font-medium">Financial literacy and tax systems</p></GlowingCard>
          <GlowingCard className="p-8"><p className="font-medium">Youth mental health and psychology</p></GlowingCard>
          <GlowingCard className="p-8"><p className="font-medium">Education and behaviour change</p></GlowingCard>
        </GlowingCards>
        <p className="text-black text-center max-w-[58rem] mx-auto">
          We create safe, engaging spaces where young people can learn without judgement and walk away with real tools
          for life. This dual perspective on the psychology of money ensures young people leave with skills for today
          and resilience for the future.
        </p>
      </div>
    </section>
  )
}


