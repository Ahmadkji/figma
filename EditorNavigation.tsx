"use client";

import { Button } from "../ui/button";
import { Sparkles, ArrowLeft, Save, Download, Upload } from "lucide-react";
import { motion } from "motion/react";

export function EditorNavigation({ onBack }: { onBack: () => void }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="h-16 backdrop-blur-xl border-b border-white/10"
      style={{
        background: "rgba(10, 10, 15, 0.7)",
      }}
    >
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onBack}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-70"></div>
              <Sparkles className="w-5 h-5 text-white relative z-10" />
            </div>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              BlogAI Editor
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white border-0">
            <span className="relative z-10 flex items-center">
              <Save className="w-4 h-4 mr-2" />
              Save
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
