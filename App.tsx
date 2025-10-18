import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { EditorPage } from "./components/EditorPage";
import { Button } from "./components/ui/button";

export default function App() {
  const [showEditor, setShowEditor] = useState(false);

  if (showEditor) {
    return <EditorPage onBack={() => setShowEditor(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <NavigationWrapper onStartEditor={() => setShowEditor(true)} />
        <HeroWrapper onStartEditor={() => setShowEditor(true)} />
        <Features />
        <HowItWorks />
        <CTAWrapper onStartEditor={() => setShowEditor(true)} />
        <Footer />
      </div>
    </div>
  );
}

function NavigationWrapper({ onStartEditor }: { onStartEditor: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
      style={{
        background: "rgba(10, 10, 15, 0.7)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-70"></div>
              <span className="w-5 h-5 text-white relative z-10">✨</span>
            </div>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              BlogAI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
            </a>
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors relative group">
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button 
              onClick={onStartEditor}
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white border-0 hover:opacity-90"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroWrapper({ onStartEditor }: { onStartEditor: () => void }) {
  return <Hero onStartEditor={onStartEditor} />;
}

function CTAWrapper({ onStartEditor }: { onStartEditor: () => void }) {
  return <CTA onStartEditor={onStartEditor} />;
}
