import React from 'react';
import { Shield, AlertCircle, Search, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description: 'Advanced screening against global sanctions lists and regulatory databases.'
  },
  {
    icon: AlertCircle,
    title: 'Real-time Alerts',
    description: 'Instant notifications for potential compliance risks and violations.'
  },
  {
    icon: Search,
    title: 'Deep Screening',
    description: 'Thorough analysis of entities using advanced matching algorithms.'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Continuous surveillance of your business transactions and partners.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose Sanction Guard?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive solution provides the tools you need to maintain compliance
            and protect your business from sanctions-related risks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}