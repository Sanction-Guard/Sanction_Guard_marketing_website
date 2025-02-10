import React from 'react';
import { Shield, Zap, Building2, Check, AlertCircle, Search, Phone, Database, Users, Clock, Bot, FileCheck, MessageSquare, Headphones, Award } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 299,
    description: 'Essential screening tools for small businesses',
    features: [
      'Up to 1,000 screenings per month',
      'Basic API access',
      'Standard support (9-5 EST)',
      'Daily list updates',
      'Email alerts',
      'Basic reporting',
      'Single user access',
      'Standard matching algorithm'
    ],
    icon: Shield,
    color: 'blue-400'
  },
  {
    name: 'Pro',
    price: 799,
    description: 'Advanced features for growing companies',
    features: [
      'Up to 10,000 screenings per month',
      'Full API integration',
      'Priority support (24/7)',
      'Real-time list updates',
      'SMS & Email alerts',
      'Advanced reporting & analytics',
      'Up to 5 user accounts',
      'Enhanced matching algorithm',
      'Audit trail',
      'Custom screening rules'
    ],
    icon: Zap,
    color: 'blue-600',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited screenings',
      'Enterprise API with SLA',
      'Dedicated account manager',
      'Real-time monitoring',
      'Multi-channel alerts',
      'Custom reports & dashboards',
      'Unlimited users',
      'AI-powered matching',
      'Full audit system',
      'Custom integration support',
      'On-premise deployment option',
      'Training & onboarding'
    ],
    icon: Building2,
    color: 'blue-800'
  }
];

const additionalFeatures = [
  {
    icon: Database,
    title: 'Comprehensive Database',
    description: 'Access to global sanctions, PEP, and watchlists'
  },
  {
    icon: Bot,
    title: 'Smart Screening',
    description: 'AI-powered matching algorithms reduce false positives'
  },
  {
    icon: FileCheck,
    title: 'Compliance Ready',
    description: 'Built-in compliance workflows and audit trails'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 access to our compliance specialists'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core screening features.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  tier.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`inline-flex p-3 rounded-lg bg-${tier.color}/10 mb-4`}>
                  <Icon className={`h-6 w-6 text-${tier.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  {typeof tier.price === 'number' && (
                    <span className="text-slate-600">/month</span>
                  )}
                </div>
                <p className="text-slate-600 mb-6">{tier.description}</p>
                <button
                  className={`w-full py-3 px-6 rounded-lg mb-8 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  } transition-colors`}
                >
                  Get Started
                </button>
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mt-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            All Plans Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-lg bg-blue-50 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}