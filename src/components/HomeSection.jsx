import { BookDown } from "lucide-react";

export const HomeSection = () => {
    return (
        // Wrapper section for the hero which takes full viewport height (min-h-screen)
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-y">

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {/* Intro text "Hi, I'm" with fade-in animation */}
                        <span className="opacity-0 animate-fade-in uppercase ">
                            Hi, I'm{" "}
                        </span>

                        {/* First name with a delayed fade-in */}
                        <span className="text-primary opacity-0 animate-fade-in-delay-1 uppercase">
                          Sphesihle
                        </span>

                        {/* Last name with gradient text and a delayed fade-in */}
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 uppercase">
                          Mudau
                        </span>
                    </h1>

                    {/* description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Deadline? I prefer lifeline. I’ll save your project before you even finish <br />
                        explaining it.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                </div>
            </div>

            {/* Scroll indicator at the bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <BookDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );
};
