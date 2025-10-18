"use client";

import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";

export function PreviewPanel({ content, title }: { content: string; title: string }) {
  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-4xl mb-6 mt-8 first:mt-0">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl mb-4 mt-8">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl mb-3 mt-6">{line.substring(4)}</h3>;
      } else if (line.match(/^\d+\.\s/)) {
        return <li key={i} className="ml-6 mb-2 text-white/80">{line}</li>;
      } else if (line.startsWith('- ')) {
        return <li key={i} className="ml-6 mb-2 text-white/80 list-disc">{line.substring(2)}</li>;
      } else if (line.trim() === '') {
        return <div key={i} className="h-4"></div>;
      } else {
        // Handle bold text
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const rendered = parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.substring(2, part.length - 2)}</strong>;
          }
          return part;
        });
        return <p key={i} className="mb-4 text-white/80 leading-relaxed">{rendered}</p>;
      }
    });
  };

  return (
    <div className="flex-1 overflow-hidden h-full">
      <ScrollArea className="h-full w-full">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Card className="p-12 bg-white/5 border-white/10 backdrop-blur-sm">
            {!content ? (
              <div className="text-center py-20">
                <p className="text-white/30">No content to preview</p>
              </div>
            ) : (
              <article className="prose prose-invert max-w-none">
                {title && <h1 className="text-5xl mb-8">{title}</h1>}
                {renderContent(content)}
              </article>
            )}
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
