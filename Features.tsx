"use client";

import { Card } from "./ui/card";
import { 
  Sparkles, 
  Zap, 
  Target, 
  Globe, 
  Clock, 
  BarChart,
  PenTool,
  RefreshCw
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Advanced GPT models that understand context and write naturally like a human.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complete blog posts in under 60 seconds. From idea to publish-ready content.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "SEO Optimized",
    description: "Built-in SEO analysis ensures your content ranks higher on search engines.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Write in 30+ languages with native-level fluency and cultural awareness.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: PenTool,
    title: "Custom Tone & Style",
    description: "Match your brand voice perfectly with customizable writing styles and tones.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: RefreshCw,
    title: "Smart Rewrites",
    description: "Instantly improve, expand, or rephrase any section with one click.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track performance, engagement, and optimize your content strategy.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Automate the heavy lifting so you can focus on strategy and growth.",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Everything you need to create amazing content
          </h2>
          <p className="text-white/60 text-lg">
            Powerful features that make content creation effortless and enjoyable
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="relative p-6 bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <Icon className="w-6 h-6 text-white relative z-10" />
                    </div>
                    <h3 className="mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors"></div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
