import Chip from "@/components/chip";
import PricingContainer from "@/ui/pricing/pricing-container";

export default function Pricing() {
  return (
    <div className="my-40">
      <div className="flex flex-col flex-wrap justify-center items-center my-4 sm:my-0">
        <div className="mb-4">
          <Chip>Pricing</Chip>
        </div>
        <h1 className="font-bold mb-4 text-3xl sm:text-5xl">Simple <span className="dark:text-indigo-600/90">Pricing</span></h1>
        <p className="font-light mb-6 text-sm text-center sm:text-base">Simple and affordable pricing. Choose the plan that fits your budget & needs</p>
        <div>
          <PricingContainer />
        </div>
      </div>
    </div>
  )
}
