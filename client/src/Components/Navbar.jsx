import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import JoinUs from "./JoinUsButton";
import ThemeToggle from "./Theme";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Team", href: "/team" },
        { name: "Events", href: "/events" },
        { name: "Affiliates", href: "/affiliates" },
        { name: "Alumni", href: "/alumni" },
        { name: "Contact", href: "/contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white dark:bg-zinc-900 shadow-md transition-colors">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                    <span className="font-bold text-primary dark:text-white hidden md:inline-block">
                        SRKR <span className="text-accent">&lt;CODING CLUB&gt;</span>
                    </span>
                </Link>

                <nav className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <JoinUs />
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-accent">
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <div
                className={`md:hidden bg-white dark:bg-zinc-900 px-4 overflow-hidden transition-all duration-300 origin-top transform ${isMenuOpen ? "max-h-[500px] scale-y-100 opacity-100 py-4" : "max-h-0 scale-y-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <JoinUs />
                </nav>
            </div>
        </header>

    );
}
