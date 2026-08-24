"use client";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved === "dark" || saved === "light" ? saved : preferred;
    document.documentElement.dataset.theme = initial;
    const frame = window.requestAnimationFrame(() => setTheme(initial));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  function toggleTheme() { const next = theme === "light" ? "dark" : "light"; document.documentElement.dataset.theme = next; window.localStorage.setItem("theme", next); setTheme(next); }
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"} title={theme === "light" ? "Koyu tema" : "Açık tema"}><svg className="sun-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg><svg className="moon-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></svg></button>;
}
