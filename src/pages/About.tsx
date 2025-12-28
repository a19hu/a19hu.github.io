import { GraduationCap, Cpu, Code2, Boxes, Wrench } from "lucide-react";

const education = [
  {
    degree: "Indian Institute of Technology Jodhpur ",
    school: "IIT Jodhpur",
    period: "2022 — 2026",
    description: "Bachelor of Technology in Computer Science and Engineering.",
  },
];

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "Bash", "Javascript", "Dart", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: [
      "Express JS",
      "Node JS",
      "React JS",
      "Flutter",
      "React Native",
      "Next JS",
      "Django",
      "Flask",
      "Firebase",
      "MySQL",
      "GraphQL",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["AWS (EC2, Lambda)", "CI/CD", "Linux", "Git", "Github", "Docker"],
  },
];

const About = () => {
  return (
    <div className="space-y-12 scrollbar-thin overflow-y-auto">
      {/* About Me Section */}
      <section className="code-block">
        <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-mono">
          <span className="text-primary">//</span> about.tsx
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-primary">const</span> AboutMe <span className="text-muted-foreground">=</span> <span className="text-primary">()</span> <span className="text-muted-foreground">=&gt;</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-6" />
        
        <div className="space-y-4 text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
        Hi, I'm Ashutosh Kumar, an engineering student at IIT Jodhpur. I experiment with various tech stacks and have developed proficiency in several. My expertise is in web development, 
        where I excel in both front-end and back-end development and also devops.
          {/* <p>
            I'm a <span className="text-primary">Full Stack Developer</span> and system architect from San Francisco, 
            passionate about building efficient, scalable, and maintainable software solutions.
          </p>
          <p>
            
            My expertise spans across <span className="text-foreground">frontend</span>, <span className="text-foreground">backend</span>, and <span className="text-foreground">DevOps</span> - 
            creating end-to-end solutions that are both powerful and elegant. I believe in writing 
            clean code that speaks for itself.
          </p> */}
        </div>
      </section>

      <section >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-mono">
            <span className="text-primary">$</span> education
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
            <span className="text-primary">$</span> skills --list
          </h3>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <category.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono uppercase tracking-wider">
                  {category.title}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 text-foreground rounded-lg text-sm font-mono transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
