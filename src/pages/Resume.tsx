import { Briefcase, GraduationCap, Cpu } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Managing a team of 5 developers.",
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built and maintained multiple web applications from scratch. Implemented CI/CD pipelines and improved performance by 40%.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 — 2020",
    description: "Developed responsive web applications and collaborated with designers to create pixel-perfect implementations.",
  },
];

const education = [
  {
    degree: "Master's in Computer Science",
    school: "Stanford University",
    period: "2016 — 2018",
    description: "Specialized in Human-Computer Interaction and Machine Learning.",
  },
  {
    degree: "Bachelor's in Software Engineering",
    school: "UC Berkeley",
    period: "2012 — 2016",
    description: "Dean's List. Focus on software architecture and algorithms.",
  },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "System Design", level: 75 },
  { name: "DevOps / Cloud", level: 70 },
];

const Resume = () => {
  return (
    <div className="space-y-12 scrollbar-thin overflow-y-auto">
      {/* Page Title */}
      <div className="code-block">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm font-mono">
          <span className="text-primary">//</span> resume.tsx
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-primary">export</span> Resume
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      {/* Experience Section */}
      <section className="code-block">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-mono">
            <span className="text-primary">$</span> experience --all
          </h3>
        </div>

        <div className="space-y-6">
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
      </section>

      {/* Education Section */}
      <section className="code-block">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-mono">
            <span className="text-primary">$</span> education --list
          </h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <span className="text-xs text-primary font-mono">{edu.period}</span>
                <h4 className="text-lg font-semibold text-foreground mt-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mb-2 font-mono">@ {edu.school}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="code-block">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-mono">
            <span className="text-primary">$</span> skills --verbose
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm font-mono">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden border border-border">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 glow-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
