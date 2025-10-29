import { useEffect, useState } from "react";

// StarBackground creates a dynamic starry sky with shooting meteors
export const StarBackground = () => {
    const [stars, setStars] = useState([]);   // Array to hold star objects
    const [meteors, setMeteors] = useState([]); // Array to hold meteor objects

    useEffect(() => {
        // Generates stars and meteors when component mounts
        generateStars();
        generateMeteors();

        // Regenerate stars on window resize to fill screen proportionally
        const handleResize = () => {
            generateStars();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Generate a random set of stars based on screen size
    const generateStars = () => {
        // Number of stars proportional to the viewport area
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,             // Random size between 1-4px
                x: Math.random() * 100,                 // Random horizontal position in %
                y: Math.random() * 100,                 // Random vertical position in %
                opacity: Math.random() * 0.5 + 0.5,     // Random opacity between 0.5-1
                animationDuration: Math.random() * 4 + 2, // Animation duration for twinkle
            });
        }
        setStars(newStars);
    };

    // Generates meteors with random positions and animations
    const generateMeteors = () => {
        const numberOfMeteors = 15;  // Fixed number of meteors
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,          // Base size, scaled later
                x: Math.random() * 70,                // Horizontal start position %
                y: Math.random() * 180,               // Vertical start position %
                delay: Math.random() * 15,            // Random delay before animation starts
                animationDuration: Math.random() * 10 + 3, // Duration of meteor animation
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Render stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle" // CSS class handles twinkle animation
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {/* Render meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor" // CSS class handles shooting animation
                    style={{
                        width: meteor.size * 30 + "px",    // Scale meteor width
                        height: meteor.size * 0.6 + "px",  // Thin line for tail
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
