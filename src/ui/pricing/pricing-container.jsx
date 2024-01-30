"use client";
import { useState } from "react";
import PricingCard from "@/components/pricing-card";
import Button from "@/components/Button";

const initialSubscriptionPlans = [
  {
    id: "lite",
    name: "Lite",
    price: 0,
    title: "Package Includes",
    btnTitle: "Try For Free",
    pricingDescription: "No Credit Card Required!",
    tagLine: "Perfect to get started",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5"],
  },
  {
    id: "plus",
    name: "Plus",
    price: 10,
    title: "Package Includes",
    btnTitle: "Subscribe Now",
    pricingDescription: "*Billed Yearly.",
    tagLine: "Good choice for short term use case",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5", "Test feature 6", "Test feature 7"],
  },
  {
    id: "ultra",
    name: "Ultra",
    price: 7,
    title: "Package Includes",
    btnTitle: "Subscribe Now",
    pricingDescription: "*Billed Yearly.",
    tagLine: "Best choice a significant discount",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5"],
  }
]

export default function PricingContainer() {
  const [subscriptionPlans, setSubscriptionPlans] = useState(initialSubscriptionPlans)

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-6">
        <div className="dark:bg-[#1E1E1E] bg-[#F5F8FA] font-medium px-4 py-2 rounded-full flex flex-wrap gap-2">
          <Button style="dark:bg-indigo-600/90 py-1 px-4 rounded-full">Annually</Button>
          <Button style="dark:bg-indigo-600/90 py-1 px-4 rounded-full">Monthly</Button>
        </div>
        {/* <p className="">More expensive but cancel anytime.</p> */}
        {/* <p>Save 0% compared to monthly.</p> */}
      </div>
      <div className="flex flex-wrap gap-8">
        {subscriptionPlans.map(subscriptionPlan => (
          <PricingCard
            key={subscriptionPlan.id}
            subscription={subscriptionPlan}
          />
        ))}
      </div>
    </div>
  )
}
