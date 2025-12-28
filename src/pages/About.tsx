import { Palette, Code, Smartphone, Terminal } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building scalable web applications with modern frameworks and clean code.",
  },
  {
    icon: Terminal,
    title: "Backend Systems",
    description: "Designing robust APIs and microservices architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile development with React Native and Flutter.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with focus on user experience.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Alex delivered an exceptional codebase that exceeded our expectations. His clean code practices and technical expertise are remarkable.",
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCo",
    content: "Working with Alex was seamless. He understood our architecture needs and built a bulletproof system.",
    avatar: "👨‍💻",
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
          <p>
            I'm a <span className="text-primary">Full Stack Developer</span> and system architect from San Francisco, 
            passionate about building efficient, scalable, and maintainable software solutions.
          </p>
          <p>
            My expertise spans across <span className="text-foreground">frontend</span>, <span className="text-foreground">backend</span>, and <span className="text-foreground">DevOps</span> - 
            creating end-to-end solutions that are both powerful and elegant. I believe in writing 
            clean code that speaks for itself.
          </p>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-primary font-mono">$</span> services --list
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="code-block group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-primary font-mono">&gt;</span> reviews.map()
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="code-block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-mono">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
