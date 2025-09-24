import GreyPlaceholder from './grey-placeholder'

export default function About() {
  return (
    <section id="about" className="border-t bg-white">
      <div className="container py-24 md:py-32 min-h-[400px] grid items-center gap-8 md:grid-cols-2">
        <div className="max-w-4xl order-2 md:order-1 text-left">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6 text-black">About</h2>
          <div className="leading-normal text-foreground space-y-4">
            <p>
              1 Step Ahead is a youth-focused education initiative on a mission to empower the next generation through
              psychology, financial literacy, and real-life skills.
            </p>
            <p>
              We believe that true confidence stems from understanding not only your finances, but also your mindset,
              values, and habits.
            </p>
            <p>
              Led by a team of financial professionals and mental health practitioners, we combine practical knowledge
              with psychological insight to help young people thrive.
            </p>
          </div>
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


