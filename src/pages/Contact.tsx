import { useState } from "react";
import { Send, MapPin, Mail, Phone, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-8 scrollbar-thin overflow-y-auto">
      {/* Page Title */}
      <div className="code-block">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm font-mono">
          <Terminal className="w-4 h-4 text-primary" />
          <span>~/contact</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-primary">./</span>send_message.sh
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="code-block">
            <p className="text-muted-foreground leading-relaxed font-mono text-sm">
              <span className="text-primary"># </span>
              Ready to collaborate on your next project? Drop me a message and let's build something great together.
            </p>
          </div>

          <div className="space-y-4">
            <div className="code-block flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">location</p>
                <p className="text-foreground font-medium">San Francisco, CA, USA</p>
              </div>
            </div>

            <div className="code-block flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">email</p>
                <p className="text-foreground font-medium">alex@example.com</p>
              </div>
            </div>

            <div className="code-block flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/30 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">phone</p>
                <p className="text-foreground font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="code-block space-y-5">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm font-mono">
            <span className="text-primary">&gt;</span> compose_message
          </div>
          
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="your_name"
              required
              className="w-full px-5 py-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your_email"
              required
              className="w-full px-5 py-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="your_message"
              required
              rows={6}
              className="w-full px-5 py-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-mono"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all glow-primary font-mono"
          >
            <Send className="w-5 h-5" />
            send --now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
