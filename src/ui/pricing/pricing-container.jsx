"use client";
import { useState } from "react";
import PricingCard from "@/components/pricing-card";

const initialSubscriptionPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    title: "Package Includes",
    btnTitle: "Try For Free",
    pricingDescription: "No Credit Card Required!",
    tagLine: "Perfect to get started",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 10,
    title: "Package Includes",
    btnTitle: "Subscribe Now",
    pricingDescription: "** Billed Yearly.",
    tagLine: "Good choice for short term use case",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5", "Test feature 6", "Test feature 7"],
  },
  {
    id: "annual",
    name: "Annual",
    price: 7,
    title: "Package Includes",
    btnTitle: "Subscribe Now",
    pricingDescription: "** Billed Yearly.",
    tagLine: "Best choice a significant discount",
    features: ["Test feature 1", "Test feature 2", "Test feature 3", "Test feature 4", "Test feature 5"],
  }
]

export default function PricingContainer() {
  const [subscriptionPlans, setSubscriptionPlans] = useState(initialSubscriptionPlans)

  return (
    <div className="flex flex-wrap gap-4">
      {subscriptionPlans.map(subscriptionPlan => (
        <PricingCard
          key={subscriptionPlan.id}
          subscription={subscriptionPlan}
        />
      ))}
    </div>
  )
}
