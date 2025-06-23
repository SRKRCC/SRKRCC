import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // Apply theme to <html>
  const applyTheme = (mode) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  // On mount: use system preference or stored theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer group p-2 rounded-md hover:bg-muted transition"
      aria-label="Toggle Theme"
    >
      <div className="transition-transform duration-300 group-active:rotate-180">
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </div>
    </button>
  );
}
