import { useState } from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Backend"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce solution with React and Node.js",
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
    <div className="space-y-8 scrollbar-thin overflow-y-auto">
      {/* Page Title */}
      <div className="code-block">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm font-mono">
          <FolderGit2 className="w-4 h-4 text-primary" />
          <span>~/projects</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-primary">git</span> log --oneline
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl text-sm font-mono transition-all duration-300 border ${
              activeCategory === category
                ? "bg-primary text-primary-foreground border-primary glow-primary"
                : "bg-secondary text-muted-foreground hover:text-primary hover:border-primary/50 border-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group code-block hover:border-primary/50 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="h-32 bg-secondary border border-border rounded-xl flex items-center justify-center text-5xl mb-4 group-hover:border-primary/30 transition-colors">
              {project.image}
            </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
