import {ThemeSwitch} from "../components/ThemeSwitch.jsx";
import {StarBackground} from "../components/Star-Background.jsx";
import {Navbar} from "../components/Navigation.jsx";
import {HomeSection} from "../components/HomeSection.jsx";
import {AboutMeSection} from "../components/AboutMeSection.jsx";
import {SkillsSection} from "../components/SkillsSection.jsx";
import {ProjectsSection} from "../components/ProjectsSection.jsx";
import {ContactsSection} from "../components/ContactsSection.jsx";
import {Footer} from "../components/Footer.jsx";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle*/}
        <ThemeSwitch />
        {/*Background Effect*/}
        <StarBackground />
        {/*Navigation*/}
        <Navbar />
        {/*Main*/}
        <main>
            <HomeSection />
            <AboutMeSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactsSection />
        </main>
        {/*Footer*/}
        <Footer />
    </div>;
};