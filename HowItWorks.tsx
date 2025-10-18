"use client";

import { Card } from "./ui/card";
import { FileText, Sparkles, Send } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Describe Your Topic",
    description: "Simply enter your blog topic, target audience, and key points you want to cover.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Content",
    description: "Our advanced AI creates a complete, well-structured blog post tailored to your needs.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Send,
    title: "Review & Publish",
    description: "Make quick edits if needed, then export or publish directly to your platform.",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            From idea to published post in 3 simple steps
          </h2>
          <p className="text-white/60 text-lg">
            Our streamlined process makes content creation fast and intuitive
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines - animated */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] overflow-hidden">
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="relative p-8 text-center bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`inline-flex w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} items-center justify-center mb-6 relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-lg opacity-50`}></div>
                      <Icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    <div className="text-sm text-cyan-400 mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="mb-3 text-white">{step.title}</h3>
                    <p className="text-white/60 text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Border highlight */}
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
