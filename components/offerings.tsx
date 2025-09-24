export default function Offerings() {
  return (
    <section
      id="what-we-offer"
      className="relative py-16 sm:py-20 bg-gray-300 bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="text-primary">What</span> We Offer
            </h2>
            <p className="text-white/90 leading-relaxed">
              We design interactive, custom workshops for schools, community groups, and youth services.
            </p>
            <p className="text-white/90 leading-relaxed mt-4">
              Every program includes a pre-survey so we can tailor the experience to meet your group needs and measure
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
