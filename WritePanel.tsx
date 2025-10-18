"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Sparkles, ImagePlus, List } from "lucide-react";

export function WritePanel({
  content,
  setContent,
  title,
  setTitle,
}: {
  content: string;
  setContent: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
}) {
  return (
    <div className="flex-1 overflow-hidden h-full">
      <ScrollArea className="h-full w-full">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          {/* Title Input */}
          <div className="space-y-3">
            <Input
              placeholder="Untitled Post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-4xl border-0 bg-transparent text-white placeholder:text-white/20 px-0 h-auto py-2 focus-visible:ring-0"
            />
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Quick Actions */}
          {!content && (
            <div className="space-y-4">
              <p className="text-sm text-white/50">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 h-8 text-xs"
                >
                  <Sparkles className="w-3 h-3 mr-2" />
                  Generate Outline
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 h-8 text-xs"
                >
                  <ImagePlus className="w-3 h-3 mr-2" />
                  Add Images
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 h-8 text-xs"
                >
                  <List className="w-3 h-3 mr-2" />
                  Insert Template
                </Button>
              </div>
            </div>
          )}

          {/* Content Editor */}
          <div className="relative min-h-[600px]">
            {!content && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center border border-white/10">
                    <Sparkles className="w-8 h-8 text-white/30" />
                  </div>
                  <p className="text-white/30 text-sm">Start writing or use AI to generate content</p>
                </div>
              </div>
            )}

            <Textarea
              placeholder="Start writing your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[600px] text-base border-0 bg-transparent text-white/90 placeholder:text-white/20 resize-none focus-visible:ring-0 leading-relaxed"
              style={{
                lineHeight: "1.8"
              }}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
