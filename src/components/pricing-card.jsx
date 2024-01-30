"use client";
import Button from "./Button";
import PricingFeature from "@/ui/pricing/pricing-feature";

export default function PricingCard({ subscription }) {
  const { name, tagLine, price, pricingDescription, title, btnTitle, features } = subscription;
  console.log("subscription", subscription)
  return (
    <div className="dark:bg-[#1E1E1E] bg-[#F5F8FA] px-6 py-6 rounded-lg w-80">
      <h4 className="text-xl font-semibold mb-1">{name}</h4>
      <p className="font-light text-sm mb-4">{tagLine}</p>
      <div className="mb-6">
        <p className="mb-4"><span className="text-5xl font-bold">${price}</span> <span className="text-sm">/ monthly</span></p>
        <p className="text-xs">{pricingDescription}</p>
      </div>
      <h6 className="font-medium mb-2">{title}</h6>
      <div className="mb-4">
        <PricingFeature feature={features} />
      </div>
      <Button style="dark:bg-indigo-600/90 w-full py-[6px]">{btnTitle}</Button>  
    </div>
  )
}
