import Footer from "@/components/common/footer";
import LetsTalk from "@/components/contact";
import Education from "@/components/education";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/project-section";
import Skills from "@/components/skill";
import { Badge } from "@/components/ui/badge";

const LiveBadge = () => {
  return (
    <Badge 
      variant='outline'
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm
      bg-primary/10 border-primary/20 text-primary
      hover:bg-primary/15 transition-colors duration-200 inline-flex items-center"
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      
      <span className="font-semibold uppercase tracking-wide">
       BASED IN INDIA 
      </span>
    </Badge>
  );
};

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Education/>
    <ProjectsSection/>
    <Skills/>
    <LetsTalk/>
   
   </div>
  );
}