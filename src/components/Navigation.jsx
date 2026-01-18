import { cn } from "/src/lib/utils.js"; // 'cn' is usually a utility function to merge and conditionally apply CSS class names.
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Defining all navigation links that appear in the navbar
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];


export const Navbar = () => {
    // Tracks whether the user has scrolled down the page (to change navbar size or style)
    const [isScrolled, setIsScrolled] = useState(false);

    // Controls whether the mobile navigation menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Runs only once when the component mounts (because of empty dependency array [])
    useEffect(() => {
        const handleScroll = () => {
            // Detect if user has scrolled more than 10px down the page
            // NOTE: should be 'window.scrollY', not 'window.screenY' (screenY is a coordinate, not scroll value)
            setIsScrolled(window.scrollY > 10);
        };

        // Listens for scroll events on the window
        window.addEventListener("scroll", handleScroll);

        // Cleanup function removes the listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            // 'cn' merges class names dynamically. Here it adds padding based on whether the page is scrolled.
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3" : "py-5"
            )}
        >
            <div className="container flex items-center justify-around">

                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
          <span className="relative z-10">
            <span className="text-glow text-black-900"> Sphesihle </span>{" "}
              Portfolio
          </span>
                </a>

                {/* ===== Desktop Navigation (visible on medium screens and up) ===== */}
                <div className="hidden md:flex gap-[5vw]">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="nav-text" // A custom CSS class that i configured myself to test
                        >
                            {item.name}
                        </a>
                    ))}
                </div>


                <button
                    // Toggles the menu open or closed when clicked
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >

                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                {/* ===== Mobile Menu Overlay ===== */}
                <div
                    className={cn(
                        // Covers the whole screen with a blurred background when active
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",

                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                // This makes sure that clicking a link closes the mobile menu
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
