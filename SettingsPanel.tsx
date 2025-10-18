"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { Card } from "../ui/card";
import { Sparkles, Wand2, FileText, Lightbulb, Newspaper, BookOpen, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { ScrollArea } from "../ui/scroll-area";

const templates = [
  { id: "howto", name: "How-To Guide", icon: BookOpen, description: "Step-by-step tutorial" },
  { id: "listicle", name: "Listicle", icon: FileText, description: "Top X list format" },
  { id: "news", name: "News Article", icon: Newspaper, description: "Current events coverage" },
  { id: "thought", name: "Thought Leadership", icon: Lightbulb, description: "Expert insights" },
  { id: "case", name: "Case Study", icon: TrendingUp, description: "Success story analysis" },
];

export function SettingsPanel({ onGenerate, isGenerating }: {
  onGenerate: (settings: any) => void;
  isGenerating: boolean;
}) {
  const [settings, setSettings] = useState({
    topic: "",
    keywords: "",
    tone: "professional",
    style: "informative",
    language: "english",
    length: 1500,
    targetAudience: "",
    template: "",
  });

  const handleGenerate = () => {
    onGenerate(settings);
  };

  const applyTemplate = (templateId: string) => {
    setSettings({ ...settings, template: templateId });
  };

  return (
    <motion.div
      className="w-80 border-r border-white/10 backdrop-blur-xl flex flex-col h-full"
      style={{
        background: "rgba(10, 10, 15, 0.5)",
      }}
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ScrollArea className="h-full w-full">
        <div className="p-6 space-y-6 pb-8">
          <div>
            <h2 className="text-lg mb-1 text-white">AI Settings</h2>
            <p className="text-sm text-white/50">
              Configure generation parameters
            </p>
          </div>

          {/* Templates */}
          <div className="space-y-3">
            <Label className="text-white/90 text-sm">Quick Templates</Label>
            <div className="grid grid-cols-1 gap-2">
              {templates.map((template) => {
                const Icon = template.icon;
                return (
                  <Button
                    key={template.id}
                    variant="outline"
                    onClick={() => applyTemplate(template.id)}
                    className={`justify-start h-auto p-3 border-white/10 hover:bg-white/10 ${settings.template === template.id ? 'bg-white/10 border-cyan-400/30' : 'bg-white/5'
                      }`}
                  >
                    <div className="flex items-start gap-3 text-left">
                      <Icon className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-white">{template.name}</div>
                        <div className="text-xs text-white/50">{template.description}</div>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Main Settings */}
          <Card className="p-4 bg-white/5 border-white/10 space-y-4">
            <div className="space-y-2">
              <Label className="text-white/90 text-sm">Topic *</Label>
              <Input
                placeholder="e.g., Future of AI in Marketing"
                value={settings.topic}
                onChange={(e) => setSettings({ ...settings, topic: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-9 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/90 text-sm">Keywords</Label>
              <Input
                placeholder="AI, marketing, automation"
                value={settings.keywords}
                onChange={(e) => setSettings({ ...settings, keywords: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-9 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white/90 text-sm">Target Audience</Label>
              <Input
                placeholder="Marketing professionals"
                value={settings.targetAudience}
                onChange={(e) => setSettings({ ...settings, targetAudience: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-9 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-white/90 text-sm">Tone</Label>
                <Select value={settings.tone} onValueChange={(value) => setSettings({ ...settings, tone: value })}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-9 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="authoritative">Authoritative</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-white/90 text-sm">Style</Label>
                <Select value={settings.style} onValueChange={(value) => setSettings({ ...settings, style: value })}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-9 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                    <SelectItem value="storytelling">Storytelling</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white/90 text-sm">Language</Label>
              <Select value={settings.language} onValueChange={(value) => setSettings({ ...settings, language: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="portuguese">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-white/90 text-sm">Length</Label>
                <span className="text-xs text-white/60">{settings.length} words</span>
              </div>
              <Slider
                value={[settings.length]}
                onValueChange={(value) => setSettings({ ...settings, length: value[0] })}
                min={500}
                max={5000}
                step={100}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-white/40">
                <span>Short</span>
                <span>Long</span>
              </div>
            </div>
          </Card>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !settings.topic}
            className="w-full relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white border-0 disabled:opacity-50 h-10"
          >
            <span className="relative z-10 flex items-center justify-center text-sm">
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                  </motion.div>
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Content
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </Button>
        </div>
      </ScrollArea>
    </motion.div>
  );
}
