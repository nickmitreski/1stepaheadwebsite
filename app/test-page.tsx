import { SectionTitle } from "@/components/ui/section-title"

export default function TestPage() {
  return (
    <div className="p-8 bg-white">
      <h1>Test Page</h1>
      
      {/* Test basic color classes */}
      <div className="my-4">
        <div className="text-light-primary">This should be light blue (#62cbca)</div>
        <div className="text-dark-primary">This should be dark blue (#233858)</div>
        <div className="bg-light-primary p-2">Background light blue</div>
        <div className="bg-dark-primary text-white p-2">Background dark blue</div>
      </div>
      
      {/* Test SectionTitle component */}
      <div className="my-8">
        <SectionTitle keyword="Test" title="Section Title Component" />
      </div>
      
      {/* Test hero-style text */}
      <h1 className="text-4xl font-bold my-4">
        <span className="text-light-primary">Building</span>{" "}
        <span className="text-dark-primary">Brighter</span>{" "}
        <span className="text-light-primary">Futures.</span>
      </h1>
    </div>
  )
}