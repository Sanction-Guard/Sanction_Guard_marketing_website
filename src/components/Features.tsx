import React, { useState } from "react";
import { Shield, AlertCircle, Search, Clock, X , ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


// Define Feature Type
type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string;
  image: string;
};

const features: Feature[] = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description:
      "Advanced screening against global sanctions lists and regulatory databases.",
    details:
      "In today’s regulatory landscape, businesses must ensure compliance with global sanctions while minimizing operational risks. Sanction Guard offers a multi-layered, intelligent approach to sanctions screening, providing organizations with comprehensive protection against financial crime, fraud, and regulatory non-compliance.",
    image:
      "https://th.bing.com/th/id/OIP.n83JabIRzkA4ZO1TUa9pKwHaEo?w=800&h=500&rs=1&pid=ImgDetMain",
    
  },
  {
    icon: AlertCircle,
    title: "Real-time Alerts",
    description:
      "Instant notifications for potential compliance risks and violations.",
    details:
      "Our system notifies you in real-time whenever a high-risk entity is detected, allowing quick decision-making and compliance assurance.",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Search,
    title: "Deep Screening",
    description:
      "Thorough analysis of entities using advanced matching algorithms.",
    details:
      "We use AI-powered screening algorithms to detect similarities in names, aliases, and other identifiers, reducing false positives and improving accuracy.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description:
      "Continuous surveillance of your business transactions and partners.",
    details:
      "With non-stop monitoring, Sanction Guard tracks changes in sanction lists, ensuring your organization stays ahead of compliance risks.",
    image:
      "https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

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
            <div
              key={index}
              className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#041E42] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#041E42] before:absolute before:top-0 before:left-0"
            >

              <h3 className="ont-medium text-lg duration-300  group-hover:text-white group-hover:z-[5]">
                {feature.title}
              </h3>
              <p className="ont-medium text-lg duration-300 group-hover:text-white group-hover:z-[1]">{feature.description}</p>
              <button
                onClick={() => setSelectedFeature(feature)}
                className="text-[#1D2825] group-hover:z-[100] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
              >
                Learn more
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Sliding Section */}
      <AnimatePresence>
  {selectedFeature && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]" // Increased z-index
    >
      <div className="relative w-full max-w-4xl flex bg-white shadow-lg z-[1000]"> {/* Ensure modal is above everything */}

        {/* Image Section */}
        <motion.div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectedFeature.image})`,
            height: "400px",
          }}
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/2 p-6"
        >
          <button
            onClick={() => setSelectedFeature(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
          <selectedFeature.icon className="h-14 w-14 text-[#51aee5] mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {selectedFeature.title}
          </h3>
          <p className="text-slate-600">{selectedFeature.details}</p>
          <button className="bg-[#51aee5] text-white px-6 py-3 rounded-lg hover:bg-[#3b92c7] transition-colors flex items-center mt-8">
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
