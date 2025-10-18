"use client";

import { useState } from "react";
import { EditorNavigation } from "./editor/EditorNavigation";
import { EditorContent } from "./editor/EditorContent";
import { AnimatedBackground } from "./AnimatedBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function EditorPage({ onBack }: { onBack: () => void }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("write");

  const handleGenerate = async (settings: any) => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockContent = `# ${settings.topic || "Your Blog Post Title"}

## Introduction

In today's rapidly evolving digital landscape, ${settings.topic?.toLowerCase() || "this topic"} has become increasingly important for businesses and individuals alike. This comprehensive guide will walk you through everything you need to know.

## Understanding the Basics

Before diving deep into the specifics, it's crucial to understand the fundamental concepts that underpin this subject. The foundation of knowledge will help you make informed decisions and implement effective strategies.

### Key Concepts

1. **First Principle**: This represents the core understanding that drives everything forward.
2. **Second Principle**: Building on the first, this adds another layer of complexity and opportunity.
3. **Third Principle**: The synthesis of the previous concepts creates a powerful framework.

## Advanced Strategies

Now that we've covered the basics, let's explore some advanced techniques that can help you achieve exceptional results:

### Strategy One: Optimization

Optimization is not just about doing things faster—it's about doing the right things in the right way. This involves careful analysis, testing, and refinement of your approach.

### Strategy Two: Integration

Bringing together different elements creates synergy that multiplies your results. Look for opportunities to integrate various aspects of your workflow.

## Best Practices

To ensure long-term success, follow these proven best practices:

- **Consistency**: Regular effort yields better results than sporadic bursts of activity.
- **Measurement**: Track your progress with relevant metrics and KPIs.
- **Adaptation**: Stay flexible and ready to adjust your approach based on results.
- **Learning**: Continuously educate yourself on new developments and techniques.

## Common Mistakes to Avoid

Even experienced practitioners can fall into these traps:

1. Neglecting the fundamentals in pursuit of advanced tactics
2. Failing to measure and analyze results properly
3. Not adapting to changing circumstances
4. Overlooking the importance of consistent effort

## Conclusion

Mastering ${settings.topic?.toLowerCase() || "this topic"} requires dedication, patience, and a strategic approach. By following the guidelines outlined in this article, you'll be well-equipped to achieve your goals and overcome challenges.

Remember, success is a journey, not a destination. Keep learning, stay curious, and don't be afraid to experiment with new approaches.`;

    setContent(mockContent);
    setTitle(settings.topic || "Your Blog Post Title");
    setMetaDescription(`Learn everything about ${settings.topic?.toLowerCase() || "this topic"} with our comprehensive guide. Expert tips, strategies, and best practices.`);
    setIsGenerating(false);
  };

  return (
    <div className="h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col h-full">
        <EditorNavigation onBack={onBack} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
          <div className="border-b border-white/10 backdrop-blur-xl" style={{
            background: "rgba(10, 10, 15, 0.5)",
          }}>
            <div className="max-w-[1600px] mx-auto px-6">
              <TabsList className="bg-transparent border-0 h-12">
                <TabsTrigger 
                  value="write" 
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60"
                >
                  Write
                </TabsTrigger>
                <TabsTrigger 
                  value="preview" 
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger 
                  value="seo" 
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60"
                >
                  SEO & Meta
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="write" className="flex-1 mt-0 overflow-hidden">
            <EditorContent
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              mode="write"
            />
          </TabsContent>

          <TabsContent value="preview" className="flex-1 mt-0 overflow-hidden">
            <EditorContent
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              mode="preview"
            />
          </TabsContent>

          <TabsContent value="seo" className="flex-1 mt-0 overflow-hidden">
            <EditorContent
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              mode="seo"
              metaDescription={metaDescription}
              setMetaDescription={setMetaDescription}
              tags={tags}
              setTags={setTags}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
