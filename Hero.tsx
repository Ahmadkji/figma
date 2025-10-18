"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

export function Hero({ onStartEditor }: { onStartEditor?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6 bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Content Creation
              </span>
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Write Better Blogs in
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Minutes, Not Hours
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your ideas into engaging, SEO-optimized blog posts with our advanced AI writing assistant. Save time while creating content that resonates.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={onStartEditor}
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white border-0"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              Free 7-day trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              Cancel anytime
            </div>
          </motion.div>
        </motion.div>
        
        {/* Futuristic Demo Screenshot Area */}
        <motion.div 
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-2xl"></div>
            
            <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-8">
              <div className="bg-black/40 rounded-lg border border-white/10 backdrop-blur-sm p-6 relative overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-70"></div>
                      <Sparkles className="w-5 h-5 text-white relative z-10" />
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-gradient-to-r from-white/20 to-white/5 rounded w-64 mb-2"></div>
                      <div className="h-3 bg-gradient-to-r from-white/10 to-white/5 rounded w-48"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 py-4">
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-full"></div>
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-full"></div>
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-5/6"></div>
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-full mt-6"></div>
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-full"></div>
                    <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-4/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating status indicator */}
              <motion.div 
                className="absolute top-10 right-10 bg-black/60 border border-cyan-400/30 rounded-lg backdrop-blur-md p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                  <span className="text-xs text-cyan-400">AI Writing...</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
