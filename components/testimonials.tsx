import GlowingCards, { GlowingCard } from "@/components/ui/glow-cards"
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="container space-y-12">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black">What People Are Saying</h2>
        </div>
        <GlowingCards className="mx-auto max-w-5xl" gap="2rem" padding="0">
          <GlowingCard className="p-8">
            <p className="text-lg text-foreground">“This was the first time I actually understood how money works. It made me feel like I could handle the future.” – Year 12 Student</p>
          </GlowingCard>
          <GlowingCard className="p-8">
            <p className="text-lg text-foreground">“I loved how it wasn’t boring finance stuff. It made sense and helped me see how I think about money.” – Youth program participant</p>
          </GlowingCard>
        </GlowingCards>
      </div>
    </section>
  )
}


