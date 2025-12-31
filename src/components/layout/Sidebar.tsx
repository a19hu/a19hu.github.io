import { Mail, Phone, Linkedin, Terminal, Github } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "EMAIL", value: "a19hu.k@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+91 6207705193" },
  { icon: Github, label: "GITHUB", value: "a19hu" },
  { icon: Linkedin, label: "LINKEDIN", value: "a19hu" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/a19hu", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/a19hu", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/a19hu", icon: "twitter" },
];

const Sidebar = () => {
  const resumeUrl = import.meta.env.VITE_APP_RESUME_URL;
  return (
    <aside className="w-full lg:w-80 lg:max-h-min bg-card border border-border rounded-3xl p-8 flex flex-col items-center lg:sticky lg:top-8 terminal-glow">
      {/* Terminal Header */}
      <div className="w-full flex items-center gap-2 mb-6 pb-4 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-primary/50" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex items-center gap-2 ml-2 text-xs text-muted-foreground">
          <Terminal className="w-3 h-3" />
          <span>~/developer/profile</span>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative mb-6">
        <div className="w-36 h-36 rounded-full bg-secondary overflow-hidden border-4 border-primary/30 flex items-center justify-center animate-pulse-glow">
          <div className="text-6xl">👨‍💻</div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
          Online
        </div>
      </div>

      {/* Name and Role */}
      <h1 className="text-2xl font-semibold text-foreground mb-2">Ashutosh kumar</h1>
      <span className="px-4 py-1.5 bg-secondary border border-primary/30 rounded-lg text-sm text-primary mb-8 font-mono">
        &lt;Full Stack Dev /&gt;
      </span>
      <div className="w-full h-px bg-border mb-8" />

      <div className="w-full space-y-5 mb-8">
        {contactInfo.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{item.label}</p>
              <p className="text-sm text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
          <a
              href={resumeUrl || "https://drive.google.com/file/d/1OvB2q7vNKcHdzp1tsUYFc6q7pY0zK7XT/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 rounded-lg bg-secondary border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground mb-5"
          >
            <div className="flex items-center justify-center gap-1 mb-0 text-sm font-mono h-full">
              resume.tsx
            </div>
         </a>
      
      

      {/* Social Links */}
      <div className="flex gap-4 mt-auto">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground"
            aria-label={social.name}
          >
            {social.icon === "github" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            )}
            {social.icon === "linkedin" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            )}
            {social.icon === "twitter" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            )}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
