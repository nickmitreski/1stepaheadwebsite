import { Button } from "@/components/ui/button"
import GreyPlaceholder from './grey-placeholder'

export default function Process() {
  return (
    <section id="process" className="border-t bg-[#EDEDED]">
      <div className="container py-24 md:py-32 min-h-[400px] grid items-end gap-8 md:grid-cols-2">
        <div className="max-w-4xl order-2 md:order-1">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6">Our Process</h2>
          <div className="leading-normal text-foreground mb-6">
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">1. Discovery:</strong> We learn about your group's needs via a pre-program
              survey
            </p>
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">2. Design:</strong> We customise your sessions based on your goals and
              participants
            </p>
            <p className="mb-3 whitespace-nowrap">
              <strong className="font-bold">3. Delivery:</strong> We run an engaging, inclusive program with dual
              facilitators (finance + psych)
            </p>
            <p className="whitespace-nowrap">
              <strong className="font-bold">4. Evaluation:</strong> Post-program surveys help us measure impact and
              reflect on success
            </p>
          </div>
          <Button size="lg">Get Started Today</Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <GreyPlaceholder 
            width="100%" 
            height="300px" 
            className="max-w-full rounded-[32px]" 
            alt="Students in class" 
          />
        </div>
      </div>
    </section>
  )
}
