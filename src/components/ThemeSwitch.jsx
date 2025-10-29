import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Moon and Sun icons for theme toggle visual
import { cn } from "/src/lib/utils";


export const ThemeSwitch = () => {
    // State variable to track whether dark mode is active
    const [isDarkMode, setIsDarkMode] = useState(true);


    // useEffect runs once when the component first mounts
    // It checks if a saved theme exists in localStorage
    // and applies it to the HTML root element.

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme"); // Retrieve the last saved theme preference

        if (storedTheme === "dark") {
            // If the saved theme is dark → enable dark mode
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            // Otherwise → default to light mode
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []); // Empty dependency array means this runs only once on load


    // Function to toggle between light and dark themes
    const changeTheme = () => {
        if (isDarkMode) {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };


    // This shows either a Moon or Sun icon depending on mode
    return (
        <button
            onClick={changeTheme}
            className={cn(
                "fixed max-sm:hidden top-[16.5px] right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? (
                // If dark mode is "active" show Moon icon
                <Moon className="h-6 w-6 cursor-pointer text-sky-600" />
            ) : (
                // If light mode is "active" → show Sun icon
                <Sun className="h-6 w-6 cursor-pointer text-yellow-300" />
            )}
        </button>
    );
};
