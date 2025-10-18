"use client";

import { useState } from "react";
import { SettingsPanel } from "./SettingsPanel";
import { WritePanel } from "./WritePanel";
import { PreviewPanel } from "./PreviewPanel";
import { SEOPanel } from "./SEOPanel";
import { StatsPanel } from "./StatsPanel";
import { Button } from "../ui/button";
import { PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from "lucide-react";

export function EditorContent({
  content,
  setContent,
  title,
  setTitle,
  onGenerate,
  isGenerating,
  mode,
  metaDescription,
  setMetaDescription,
  tags,
  setTags,
}: {
  content: string;
  setContent: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  onGenerate: (settings: any) => void;
  isGenerating: boolean;
  mode: "write" | "preview" | "seo";
  metaDescription?: string;
  setMetaDescription?: (value: string) => void;
  tags?: string[];
  setTags?: (value: string[]) => void;
}) {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Panel - Settings */}
      {showLeftPanel && mode === "write" && (
        <SettingsPanel onGenerate={onGenerate} isGenerating={isGenerating} />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative min-w-0">
        {/* Toggle buttons */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {mode === "write" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLeftPanel(!showLeftPanel)}
              className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 backdrop-blur-sm"
            >
              {showLeftPanel ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            </Button>
          )}
        </div>

        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowRightPanel(!showRightPanel)}
            className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 backdrop-blur-sm"
          >
            {showRightPanel ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
          </Button>
        </div>

        {mode === "write" && (
          <WritePanel
            content={content}
            setContent={setContent}
            title={title}
            setTitle={setTitle}
          />
        )}

        {mode === "preview" && (
          <PreviewPanel content={content} title={title} />
        )}

        {mode === "seo" && (
          <SEOPanel
            title={title}
            content={content}
            metaDescription={metaDescription || ""}
            setMetaDescription={setMetaDescription || (() => {})}
            tags={tags || []}
            setTags={setTags || (() => {})}
          />
        )}
      </div>

      {/* Right Panel - Stats */}
      {showRightPanel && (
        <StatsPanel content={content} title={title} />
      )}
    </div>
  );
}
