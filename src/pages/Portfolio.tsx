import { useState } from "react";
import { ExternalLink, Github, FolderGit2, Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    date: "March-2025",
    title: "Personality Prediction from Social Media Text",
    description:
      "Developed an AI-powered app to extract WhatsApp chat data and analyze personality traits. Utilized LLaMA models via Ollama for NLP-based personality prediction. Implemented text preprocessing, embeddings, and RAG for accurate insights.",
    github: "https://github.com/a19hu/Personality_Prediction_Social_Media_text",
    demo: "https://drive.google.com/file/d/1FwUBjHhowKQEPvMO9VxYRETXsi71my_b/view",
    tags: ["Flutter", "Sqlite", "Ollama"],
  },
  {
    id: 2,
    date: "February-2025",
    title: "Face Tracker",
    description:
      "Developed a real-time face tracking system in a Next.js application using the device camera, integrating a machine learning model via API for dynamic face detection and tracking, and optimized performance for smooth real-time tracking with minimal latency.",
    github: "https://github.com/a19hu/face-tracker",
    demo: "https://facetracker-amber.vercel.app/",
    tags: ["Nextjs", "Model", "API"],
  },
  {
    id: 3,
    date: "December-2024",
    title: "Bolt Clone",
    description:
      "Created a web-based AI-powered platform that enables users to generate fully functional websites in real time using natural language prompts. The system leverages advanced AI models to interpret user input and produce accurate, web layouts effortlessly.",
    github: "https://github.com/a19hu/Bolt_clone",
    demo: "https://bolt-zeta-three.vercel.app/",
    tags: ["React", "Express", "Node", "OpenAI"],
  },
  {
    id: 4,
    date: "October-2024",
    title: "Research Visualisation",
    description:
      "Students often don't know which professor is working in which research area. This lack of clarity makes it hard to align their interests with professors. While professors' research topics are available on the IITJ website, they are scattered across multiple pages. This makes it time-consuming and difficult for students to find relevant opportunities.",
    github: "https://github.com/a19hu/Research_visualisation",
    demo: "https://a19hu.my.canva.site/",
    tags: ["React", "Flutter", "Neo4j", "FastAPI"],
  },
  {
    id: 5,
    date: "August-2024",
    title: "MIPS Compiler",
    description:
      "MIPS (Million Instructions Per Second) processor simulator written in Rust. The project was developed as part of a Computer Architecture assignment, focusing on the simulation and testing of MIPS instructions. The simulator supports multiple stages of MIPS instruction execution, including instruction fetch, decode, execution, memory access, and write-back.",
    github: "https://github.com/a19hu/MIPS_Compiler",
    demo: "",
    tags: ["RUST"],
  },
  {
    id: 6,
    date: "May-2024",
    title: "Proxyproof Creal",
    description:
      "Developed a real-time attendance verification system utilizing face recognition and dual-camera authentication to prevent proxy attendance. The system features an interactive attendance dashboard, allowing seamless leave requests and efficient student data management.",
    github: "https://github.com/a19hu/Proxyproof-Creal_-",
    demo: "https://www.youtube.com/watch?v=KlKf7AiV8WU&themeRefresh=1",
    tags: ["Flutter", "Firebase"],
  },
  {
    id: 7,
    date: "March-2024",
    title: "IITJ Family Tree",
    description:
      '"IITJ Family Tree" application, showcasing the profiles and relationships of IIT Jodhpur students with their seniors, reflecting the institution\'s cultural essence and community spirit. The application has been widely adopted, with over 1000+ users engaging with it.',
    github: "https://github.com/a19hu/iitj_family_tree",
    demo: "https://devluplabs.iitj.ac.in/familytree/",
    tags: ["Reactjs", "Django", "Postgresql"],
  },
  {
    id: 8,
    date: "December-2023",
    title: "Aptos (Inter IIT)",
    description:
      "Built a Spotify-inspired application that uses the Aptos blockchain for seamless transactions, using Move language for smart contracts and ReactJS for the front end. The platform enables users to pay a small fee to play songs, and artists earn coins based on user engagement and interactions.",
    github: "https://github.com/a19hu/inter-iit-blockchain",
    demo: "https://drive.google.com/file/d/1H1MAqh3bEju-_b0A9G0cdCyGYPASslOW/view",
    tags: ["ReactJS", "Aptos(Blockchain)"],
  },
];

const Portfolio = () => {
  return (
    <div className="space-y-7 scrollbar-thin overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-mono">
        <span className="text-primary">//</span> project.tsx
      </div>

      <div
        className="space-y-6 max-h-[800px] overflow-y-auto pr-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(142 70% 45% / 0.5) transparent",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
            <section className="code-block">
              {/* Project Info */}
              <div>
                <span className="text-xs text-primary font-mono uppercase tracking-wider">
                  {project.date}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <Github className="w-4 h-4" />
                    code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      <ExternalLink className="w-4 h-4" />
                      demo
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      </div>
)}

export default Portfolio;
