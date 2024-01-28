"use client";
import Button from "./Button";
import PricingFeature from "@/ui/pricing/pricing-feature";

export default function PricingCard({ subscription }) {
  const { name, tagLine, price, pricingDescription, title, btnTitle, features } = subscription;
  console.log("subscription", subscription)
  return (
    <div className="dark:bg-[#1E1E1E] px-4 py-6 rounded-xl">
      <h4>{name}</h4>
      <p>{tagLine}</p>
      <p>${price} / monthly</p>
      <p>{pricingDescription}</p>
      <h6>{title}</h6>
      <PricingFeature feature={features} />
      <Button>{btnTitle}</Button>  
    </div>
  )
}
