import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const base = path.resolve(postsDir);
      const target = path.resolve(base, file);
      const relative = path.relative(base, target);
      if (relative.startsWith('..') || path.isAbsolute(relative)) {
        throw new Error('Invalid file path');
      }
      const raw = fs.readFileSync(target, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
        author: data.author ?? "Zerelio Team",
        category: data.category ?? "General",
        readTime: data.readTime ?? "5 min read",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}
