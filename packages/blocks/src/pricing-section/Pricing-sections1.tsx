"use client";

 import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface PlanItem {
  title: string;
  price: string;
  subtitle: string;
  gradient?: boolean;
  tag?: string;
  features: string[];
}

type BillingType = 'monthly' | 'yearly';

interface Plans {
  monthly: PlanItem[];
  yearly: PlanItem[];
}
interface PricingCardProps extends Omit<PlanItem, 'features'> {
  features: string[];
}
interface ToggleSwitchProps {
  enabled: BillingType;
  setEnabled: (value: BillingType) => void;
}
const plans:Plans  = {
  monthly: [
    {
      title: "Free",
      price: "$0",
      subtitle: "Lifetime access",
      features: ["Basic components", "Community support", "Limited updates"],
    },
    {
      title: "Pro",
      price: "$39",
      subtitle: "Per month",
      gradient: true,
      tag: "Most Popular",
      features: ["All Free features", "Premium components", "Priority support", "Monthly updates"],
    },
    {
      title: "Enterprise",
      price: "$99",
      subtitle: "Per month",
      features: ["All Pro features", "Team access", "Custom integrations", "Dedicated support"],
    },
  ],
  yearly: [
    {
      title: "Free",
      price: "$0",
      subtitle: "Lifetime access",
      features: ["Basic components", "Community support", "Limited updates"],
    },
    {
      title: "Pro",
      price: "$390",
      subtitle: "Per year",
      gradient: true,
      tag: "Save 20%",
      features: ["All Free features", "Premium components", "Priority support", "Monthly updates"],
    },
    {
      title: "Enterprise",
      price: "$990",
      subtitle: "Per year",
      features: ["All Pro features", "Team access", "Custom integrations", "Dedicated support"],
    },
  ],
};

const ToggleSwitch = ({ enabled, setEnabled }: ToggleSwitchProps) => (
  <div className="flex items-center justify-center gap-4 mb-12">
    <button
      onClick={() => setEnabled("monthly")}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
        enabled === "monthly" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      Bill Monthly
    </button>
    <button
      onClick={() => setEnabled("yearly")}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
        enabled === "yearly" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      Bill Yearly
    </button>
  </div>
);

const PricingCard = ({ title, price, subtitle, gradient, tag, features }: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
    className={`relative flex flex-col p-8 border rounded-3xl text-center shadow-xl transition hover:scale-[1.02] ${
      gradient
        ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
        : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
    }`}
  >
    <h3 className="text-2xl font-bold font-manrope mb-4 flex justify-center items-center gap-2">
      {title}
      {tag && (
        <span className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {tag}
        </span>
      )}
    </h3>
    <div className="text-5xl font-bold mb-2">{price}</div>
    <div className="text-gray-400 dark:text-gray-300 text-base mb-6">{subtitle}</div>
    <ul className="text-left text-sm space-y-2 mb-10">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
        gradient
          ? "bg-white text-indigo-600 hover:bg-gray-200"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}
    >
      Get Started
    </a>
  </motion.div>
);

const PricingSection = () => {
  const [billing, setBilling] = useState<BillingType>("yearly");

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-50 dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  md:text-5xl font-extrabold  text-gray-900 dark:text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Try it free for 7 days. No credit card required.
          </p>
        </div>

        <ToggleSwitch enabled={billing} setEnabled={setBilling} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {plans[billing].map((plan: any, index: any) => (
              <PricingCard key={index} {...plan} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default PricingSection;
