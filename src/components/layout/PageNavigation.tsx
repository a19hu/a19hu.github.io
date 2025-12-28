import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const PageNavigation = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-end mb-8">
      <ul className="flex bg-card border border-border rounded-2xl p-2 gap-1 terminal-glow">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 block font-mono ${
                  isActive
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNavigation;
