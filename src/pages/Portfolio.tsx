import { useState } from "react";
import { ExternalLink, Github, FolderGit2,Briefcase } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Developed an AI-powered app to extract WhatsApp chat data and analyze personality traits.Utilized LLaMA models via Ollama for NLP-based personality prediction.Implemented text preprocessing, embeddings, and RAG for accurate insights.",
    image: "🛒",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    category: "Mobile",
    description: "Cross-platform mobile app for team collaboration",
    image: "📱",
    tags: ["React Native", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "API Gateway",
    category: "Backend",
    description: "High-performance API gateway with rate limiting",
    image: "⚡",
    tags: ["Go", "Redis", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Dashboard",
    category: "Web",
    description: "Real-time analytics dashboard with WebSocket",
    image: "📊",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    category: "Mobile",
    description: "End-to-end encrypted messaging platform",
    image: "💬",
    tags: ["Flutter", "Firebase", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Pipeline",
    category: "Backend",
    description: "Scalable machine learning data pipeline",
    image: "🤖",
    tags: ["Python", "FastAPI", "TensorFlow"],
    github: "#",
    demo: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-7 scrollbar-thin overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-mono">
          <span className="text-primary">//</span> project.tsx
        </div>

      
      <div className="space-y-6 
      max-h-[800px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'hsl(142 70% 45% / 0.5) transparent' }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
          >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
          <section className="code-block">

            {/* Project Image */}
            {/* <div className="h-32 bg-secondary border border-border rounded-xl flex items-center justify-center text-5xl mb-4 group-hover:border-primary/30 transition-colors">
              {project.image}
            </div> */}

            {/* Project Info */}
            <div>
              <span className="text-xs text-primary font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary border border-border text-muted-foreground rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <Github className="w-4 h-4" />
                  code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <ExternalLink className="w-4 h-4" />
                  demo
                </a>
              </div>
            </div>
          </section>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Portfolio;
