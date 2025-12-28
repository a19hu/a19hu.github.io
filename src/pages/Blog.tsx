import { Calendar, ArrowRight, FileCode } from "lucide-react";

const posts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    date: "Dec 15, 2024",
    category: "React",
    readTime: "8 min read",
    image: "📚",
  },
  {
    title: "System Design Fundamentals",
    excerpt: "A deep dive into distributed systems, caching strategies, and database scaling patterns.",
    date: "Dec 10, 2024",
    category: "Architecture",
    readTime: "12 min read",
    image: "🏗️",
  },
  {
    title: "Mastering TypeScript",
    excerpt: "Advanced TypeScript patterns and techniques for building type-safe applications.",
    date: "Dec 5, 2024",
    category: "TypeScript",
    readTime: "10 min read",
    image: "💡",
  },
  {
    title: "CI/CD Best Practices",
    excerpt: "Automating your development workflow with modern CI/CD pipelines and deployment strategies.",
    date: "Nov 28, 2024",
    category: "DevOps",
    readTime: "7 min read",
    image: "⚙️",
  },
];

const Blog = () => {
  return (
    <div className="space-y-8 scrollbar-thin overflow-y-auto">
      {/* Page Title */}
      <div className="code-block">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm font-mono">
          <FileCode className="w-4 h-4 text-primary" />
          <span>~/blog</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-primary">cat</span> posts.md
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group code-block hover:border-primary/50 transition-all duration-300 cursor-pointer"
          >
            {/* Post Image */}
            <div className="h-32 bg-secondary border border-border rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:border-primary/30 transition-colors">
              {post.image}
            </div>

            {/* Post Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-mono border border-primary/30">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">{post.readTime}</span>
                <span className="flex items-center gap-1 text-sm text-primary font-mono group-hover:gap-2 transition-all">
                  read
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
