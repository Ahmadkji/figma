"use client";

import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkles, X, Plus, Globe, Share2 } from "lucide-react";

export function SEOPanel({
  title,
  content,
  metaDescription,
  setMetaDescription,
  tags,
  setTags,
}: {
  title: string;
  content: string;
  metaDescription: string;
  setMetaDescription: (value: string) => void;
  tags: string[];
  setTags: (value: string[]) => void;
}) {
  const [newTag, setNewTag] = useState("");
  const [slug, setSlug] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const generateMetaDescription = () => {
    const words = content.split(/\s+/).slice(0, 30).join(' ');
    setMetaDescription(words + '...');
  };

  const generateSlug = () => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(slug);
  };

  return (
    <div className="flex-1 overflow-hidden h-full">
      <ScrollArea className="h-full w-full">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
          {/* SEO Preview */}
          <Card className="p-6 bg-white/5 border-white/10 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg text-white">Search Engine Preview</h3>
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-blue-400 text-sm mb-1">www.yoursite.com/{slug || 'blog-post'}</div>
              <div className="text-lg text-purple-300 mb-2">{title || 'Your Blog Post Title'}</div>
              <div className="text-sm text-white/60 line-clamp-2">
                {metaDescription || 'Add a meta description to see how your post appears in search results...'}
              </div>
            </div>
          </Card>

          {/* URL Slug */}
          <Card className="p-6 bg-white/5 border-white/10 space-y-4">
            <Label className="text-white/90">URL Slug</Label>
            <div className="flex gap-2">
              <Input
                placeholder="blog-post-url"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button
                variant="outline"
                onClick={generateSlug}
                className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate
              </Button>
            </div>
            <p className="text-xs text-white/50">
              URL: yoursite.com/<span className="text-cyan-400">{slug || 'your-slug'}</span>
            </p>
          </Card>

          {/* Meta Description */}
          <Card className="p-6 bg-white/5 border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-white/90">Meta Description</Label>
              <span className={`text-xs ${metaDescription.length > 160 ? 'text-red-400' : 'text-white/50'}`}>
                {metaDescription.length}/160
              </span>
            </div>
            <Textarea
              placeholder="Brief description of your blog post for search engines..."
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={generateMetaDescription}
              className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Auto-generate from content
            </Button>
          </Card>

          {/* Tags */}
          <Card className="p-6 bg-white/5 border-white/10 space-y-4">
            <Label className="text-white/90">Tags</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button
                onClick={addTag}
                variant="outline"
                className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/10 text-white border-white/20 pr-1"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-2 hover:text-red-400 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </Card>

          {/* Social Media Preview */}
          <Card className="p-6 bg-white/5 border-white/10 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg text-white">Social Media Preview</h3>
              <Share2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-4">
              {/* Twitter/X Preview */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-xs text-white/50 mb-2">Twitter / X</div>
                <div className="aspect-[2/1] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded mb-2 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Featured Image</span>
                </div>
                <div className="text-sm text-white mb-1">{title || 'Your Blog Post Title'}</div>
                <div className="text-xs text-white/60 line-clamp-1">
                  {metaDescription || 'Add a meta description...'}
                </div>
                <div className="text-xs text-white/40 mt-1">yoursite.com</div>
              </div>

              {/* Facebook/LinkedIn Preview */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-xs text-white/50 mb-2">Facebook / LinkedIn</div>
                <div className="aspect-[1.91/1] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded mb-2 flex items-center justify-center">
                  <span className="text-white/30 text-sm">Featured Image</span>
                </div>
                <div className="text-sm text-white mb-1">{title || 'Your Blog Post Title'}</div>
                <div className="text-xs text-white/60 line-clamp-2">
                  {metaDescription || 'Add a meta description...'}
                </div>
                <div className="text-xs text-white/40 mt-1">YOURSITE.COM</div>
              </div>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
