import { useState } from "react";
import { cn } from "/src/lib/utils";

// Array of skills with the skill level and category
const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 50, category: "frontend" },
    { name: "React", level: 62, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },

    // Backend
    { name: "Node.js", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 78, category: "tools" },
    { name: "JetBrains", level: 80, category: "tools" },
    { name: "Figma", level: 60, category: "tools" },
    { name: "VS Code", level: 60, category: "tools" },
];

// Categories that are used for filtering/separation
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all"); // Track selected category

    // Filter skills based on the selected category
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                {/* Category filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)} // Update selected category
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-background" // Active button style
                                    : "bg-secondary/70 text-foreground hover:text-primary" // Inactive button style
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            {/* Skill name */}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Skill progress bar background */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }} // Dynamic width based on skill level
                                />
                            </div>

                            {/* Skill level text */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
