import { Button } from "@/components/ui/button"
import GreyPlaceholder from './grey-placeholder'

export default function CTA() {
  return (
    <section className="border-t bg-[#EDEDED]">
      <div className="container py-24 md:py-32 min-h-[400px] grid items-center gap-8 md:grid-cols-2">
        <div className="max-w-4xl order-2 md:order-1">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6">How It Works</h2>
          <div className="leading-normal text-foreground mb-6">
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">1. We Listen:</strong> Every program starts with a needs survey
            </p>
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">2. We Tailer:</strong> Workshops are adapted to your goals, audience, and
              format
            </p>
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">3. We Deliver:</strong> Engaging, interactive sessions led by qualified
              experts
            </p>
            <p className="whitespace-nowrap">
              <strong className="font-bold">4. We Reflect:</strong> Post-surveys and feedback help track progress
            </p>
          </div>
          <Button size="lg">Get Started Today</Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <GreyPlaceholder 
            width="100%" 
            height="300px" 
            className="max-w-full rounded-[32px]" 
            alt="Students working" 
          />
        </div>
      </div>
    </section>
  )
}
