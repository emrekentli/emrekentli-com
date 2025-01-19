import Link from "next/link";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const navItems = [
    { href: "#about", label: "Hakkımda" },
    { href: "#projects", label: "Projeler" },
    { href: "#stack", label: "Teknolojiler" },
    { href: "#career", label: "Kariyer" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center rounded-full bg-[#f4f4f5] dark:bg-[#18181b]/70 border border-zinc-200 dark:border-zinc-800 px-4 py-2 backdrop-blur-md">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white ${
                  activeSection === item.href.slice(1)
                    ? "text-zinc-800 dark:text-zinc-100 font-medium"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 