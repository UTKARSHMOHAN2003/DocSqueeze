import { PricingSection } from "@/components/pricing-section";
import { Zap, Star } from "lucide-react";

export default function Home() {
  // Sample pricing tiers data
  const pricingTiers = [
    {
      name: "Starter",
      price: {
        monthly: 9,
        yearly: 90,
      },
      description: "Perfect for individuals and small projects",
      features: [
        {
          name: "Up to 5 projects",
          description: "Create and manage up to 5 projects",
          included: true,
        },
        {
          name: "Basic analytics",
          description: "View basic usage statistics",
          included: true,
        },
        {
          name: "24/7 support",
          description: "Get help whenever you need it",
          included: false,
        },
        {
          name: "Advanced features",
          description: "Access to premium features",
          included: false,
        },
      ],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "Pro",
      price: {
        monthly: 29,
        yearly: 290,
      },
      description: "For teams and growing businesses",
      features: [
        {
          name: "Unlimited projects",
          description: "Create and manage unlimited projects",
          included: true,
        },
        {
          name: "Advanced analytics",
          description: "Detailed insights and reporting",
          included: true,
        },
        {
          name: "24/7 priority support",
          description: "Get help with priority response times",
          included: true,
        },
        {
          name: "Advanced features",
          description: "Access to all premium features",
          included: true,
        },
      ],
      highlight: true,
      badge: "Most Popular",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <main id="pricing" className=" min-h-screen">
      <PricingSection tiers={pricingTiers} />
    </main>
  );
}
