import { Briefcase, GraduationCap, Cpu } from "lucide-react";

const experiences = [
  {
    title: "DevOps Intern",
    company: "Grid Insight",
    period: "May/2025 — Sep/2025",
    description: "Deployed and managed 5+ cloud-based applications on GCP and AWS using CI/CD pipelines, Terraform, Docker and Nginx, improving scalability and uptime by 30%.Contributed to backend development in Django, Redis, WebSockets and Flutter-based EMS mobile app, enabling new features and reducing API response latency by 25%.",
  },
  {
    title: "Full Stack Intern",
    company: "CapIA",
    period: "June/2025 — July/2025",
    description: "Worked on an AI-powered SaaS platform integrating financial & operational data for 10+ startups.Optimized React.js frontend codebase, reducing page load time by 40% and eliminating all critical UI errors across devices.Collaborated with a 6-member cross-functional team to build real-time financial dashboards, improving user en-gagement metrics by 20%.",
  },
  {
    title: "Full Stack Intern",
    company: "KBCLOUDTECH PRIVATE LIMITED",
    period: "Jun/2024 — Feb/2025",
    description: "Currently interning as a developer, creating 4+ websites and mobile applications using ReactJS, NextJS, and Flutter, with Firebase as the primary database solution for real-time data management and messaging. Collaborated on debugging and resolving issues in existing applications, ensuring optimal performance and seamless functionality.",
  },
  {
    title: "Prometeo",
    company: "IITJ Fest",
    period: "Dec/2024",
    description: "Developed website for Prometeo, the technical fest of IIT Jodhpur, using React.js and Django, enabling 1200+ students to register and participate in events seamlessly also managed all aspects of deployment and performance.",
  },
];

const Resume = () => {
  return (
    <div className="space-y-7 scrollbar-thin overflow-y-auto">
        {/* <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-mono">
            <span className="text-primary">$</span> experience --all
          </h3>
        </div> */}
      
        <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-mono">
          <span className="text-primary">//</span> experience.tsx
        </div>

        <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'hsl(142 70% 45% / 0.5) transparent' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <span className="text-xs text-primary font-mono">{exp.period}</span>
                <h4 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h4>
                <p className="text-sm text-muted-foreground mb-2 font-mono">@ {exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default Resume;
