"use client";

import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import {
  FileText,
  Clock,
  Target,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

export function StatsPanel({ content, title }: { content: string; title: string }) {
  const stats = useMemo(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const characters = content.length;
    const paragraphs = content.split('\n\n').filter(p => p.trim()).length;
    const readingTime = Math.ceil(words / 200);
    const sentences = content.split(/[.!?]+/).filter(s => s.trim()).length;

    const avgWordsPerSentence = sentences > 0 ? words / sentences : 0;
    const readabilityScore = Math.max(0, Math.min(100, 100 - avgWordsPerSentence * 5));

    const hasTitle = title.length > 0;
    const hasTitleLength = title.length >= 30 && title.length <= 60;
    const hasKeywords = words > 50;
    const hasGoodLength = words >= 300 && words <= 2000;
    const hasStructure = content.includes('##');
    const seoScore = [hasTitle, hasTitleLength, hasKeywords, hasGoodLength, hasStructure].filter(Boolean).length * 20;

    return {
      words,
      characters,
      paragraphs,
      readingTime,
      sentences,
      readabilityScore,
      seoScore,
      hasTitle,
      hasTitleLength,
      hasKeywords,
      hasGoodLength,
      hasStructure
    };
  }, [content, title]);

  return (
    <motion.div
      className="w-80 border-l border-white/10 backdrop-blur-xl flex flex-col h-full"
      style={{
        background: "rgba(10, 10, 15, 0.5)",
      }}
      initial={{ x: 320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ScrollArea className="h-full w-full">
        <div className="p-6 space-y-4 pb-8">
          <div>
            <h2 className="text-lg mb-1 text-white">Analytics</h2>
            <p className="text-sm text-white/50">
              Real-time insights
            </p>
          </div>

          {/* Word Count */}
          <Card className="p-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/50">Words</p>
                <p className="text-2xl text-white">{stats.words.toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div>
                <p className="text-xs text-white/50">Characters</p>
                <p className="text-sm text-white">{stats.characters.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-white/50">Sentences</p>
                <p className="text-sm text-white">{stats.sentences}</p>
              </div>
            </div>
          </Card>

          {/* Reading Time */}
          <Card className="p-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/50">Reading Time</p>
                <p className="text-xl text-white">{stats.readingTime} min</p>
              </div>
            </div>
          </Card>

          {/* Readability */}
          <Card className="p-4 bg-white/5 border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-white/90">Readability</span>
              </div>
              <Badge
                variant="secondary"
                className={`text-xs ${stats.readabilityScore >= 70 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    stats.readabilityScore >= 40 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}
              >
                {Math.round(stats.readabilityScore)}%
              </Badge>
            </div>
            <Progress value={stats.readabilityScore} className="h-1.5" />
          </Card>

          {/* SEO Score */}
          <Card className="p-4 bg-white/5 border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/90">SEO Score</span>
              </div>
              <Badge
                variant="secondary"
                className={`text-xs ${stats.seoScore >= 80 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    stats.seoScore >= 60 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}
              >
                {stats.seoScore}%
              </Badge>
            </div>
            <Progress value={stats.seoScore} className="h-1.5" />

            <div className="space-y-2 pt-2">
              <CheckItem checked={stats.hasTitle} text="Has title" />
              <CheckItem checked={stats.hasTitleLength} text="Title length (30-60)" />
              <CheckItem checked={stats.hasGoodLength} text="Word count (300-2000)" />
              <CheckItem checked={stats.hasStructure} text="Has headings" />
              <CheckItem checked={stats.hasKeywords} text="Sufficient content" />
            </div>
          </Card>

          {/* Overall Quality */}
          <Card className="p-4 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-cyan-400/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white mb-1">Quality Score</p>
                <p className="text-xs text-white/60">
                  {stats.seoScore >= 80 && stats.readabilityScore >= 70
                    ? '✨ Excellent! Ready to publish'
                    : stats.seoScore >= 60
                      ? '👍 Good, minor improvements needed'
                      : '⚠️ Needs improvement'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </motion.div>
  );
}

function CheckItem({ checked, text }: { checked: boolean; text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      {checked ? (
        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />
      )}
      <span className={checked ? 'text-green-400' : 'text-white/30'}>
        {text}
      </span>
    </div>
  );
}
