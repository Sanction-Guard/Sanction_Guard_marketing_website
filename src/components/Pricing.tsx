import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Building2,
  Check,
  Database,
  Bot,
  FileCheck,
  Headphones,
} from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: 299,
    description: "Essential screening tools for small businesses",
    features: [
      "Up to 1,000 screenings per month",
      "Basic API access",
      "Standard support (9-5 EST)",
      "Daily list updates",
      "Basic reporting",
      "Standard matching algorithm",
    ],
    icon: Shield,
  },
  {
    name: "Pro",
    price: 799,
    description: "Advanced features for growing companies",
    features: [
      "Up to 10,000 screenings per month",
      "Full API integration",
      "Priority support (24/7)",
      "Real-time list updates",
      "Advanced reporting & analytics",
      "Up to 5 user accounts",
      "Enhanced matching algorithm",
      "Audit trail",
      "Custom screening rules",
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited screenings",
      "Enterprise API with SLA",
      "Dedicated account manager",
      "Real-time monitoring",
      "Custom reports & dashboards",
      "Unlimited users",
      "AI-powered matching",
      "Full audit system",
      "Custom integration support",
      "Training & onboarding",
    ],
    icon: Building2,
  },
];

const additionalFeatures = [
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access to global sanctions, PEP, and watchlists",
  },
  {
    icon: Bot,
    title: "Smart Screening",
    description: "AI-powered matching algorithms reduce false positives",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built-in compliance workflows and audit trails",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 access to our compliance specialists",
  },
];


export default function Pricing() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-25 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-40 mt-40">
          <h1 className="text-6xl font-bold text-slate-100 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include
            our core screening features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className="relative h-[45em] w-full border-2 border-[rgba(34,211,238,0.5)] rounded-[1.5em] 
                bg-gradient-to-br from-[#030712] via-[#020617] to-[#38bdf8] text-white font-nunito 
                p-[1.5em] flex flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-cyan-500/30 
                transition-all duration-500 group/card hover:-translate-y-1"

              >
                {tier.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-sky-500 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300/50"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300/30"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300/10"></div>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon className="h-7 w-7 text-slate-200" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                      {tier.name}
                    </h1>
                  </div>

                  <div className="text-3xl font-bold">
                    {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                    {typeof tier.price === "number" && (
                      <span className="text-lg text-slate-200"> /month</span>
                    )}
                  </div>

                  <p className="text-slate-100/90 leading-relaxed font-light">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => navigate("/contact")} className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border border-cyan-300/30 rounded-full flex items-center gap-[0.7em] overflow-hidden group/btn hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-cyan-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/40 via-cyan-500/40 to-cyan-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  <p className="relative z-10 font-medium tracking-wide">Explore Now</p>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>


        {/* Additional Features */}
<div className="bg-black rounded-2xl shadow-lg p-12 mt-20 ">
  <h2 className="text-4xl font-bold text-white text-center mb-12">
    All Plans Include
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {additionalFeatures.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div
          key={index}
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
        >
          <div className="px-8 py-10">
            {/* Feature Icon with Hover Effect */}
            <div className="bg-blue-400 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-400 transition-all flex items-center justify-center">
              <Icon className="h-5 w-5 text-white" />
            </div>

            {/* Feature Title */}
            <h3 className="uppercase font-bold text-xl text-white">
              {feature.title}
            </h3>

            {/* Feature Description */}
            <p className="text-gray-400 mt-4">{feature.description}</p>
          </div>

          {/* Hover Effects */}
          <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      );
    })}
  </div>
</div>

<div className="flex justify-center items-center mt-10">
  <div className="relative inline-flex items-center justify-center gap-4 group">
    <div
      className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-500 via-white-500 to-blue-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
    ></div>
    <button
      onClick={() => navigate("/contact")}
      className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
      title="payment"
    >
      Try Demo, It's Free
      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        height="10"
        width="10"
        fill="none"
        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
      >
        <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
        <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
      </svg>
    </button>
  </div>
</div>


      </div>
    </div>
  );
}
