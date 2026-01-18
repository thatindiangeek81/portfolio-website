import { ExternalLink, FolderGit2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  return (
    <section id="projects"className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <FolderGit2 size={50}/>
          <span className="text-5xl font-bold">Projects</span>
        </div>

        {/* Project 1 - Screenshot Left, Info Right */}
        <div className="group relative flex flex-col lg:flex-row items-center gap-8 mb-20 lg:mb-32">
          
          {/* Screenshot Container */}
          <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border bg-muted">
            {/* ADD YOUR PROJECT SCREENSHOT HERE */}
            <img 
              src="/project-1-screenshot.png" 
              alt="Project 1"
              className="w-full h-full object-cover"
            />
            
            {/* Duck Mascot - Slides in from bottom-right on hover */}
            <img
              src="/duck-project-1.png"
              alt="duck mascot"
              className="absolute -bottom-4 -right-3 w-60
                         opacity-0 translate-y-6
                         transition-all duration-300 delay-75
                         group-hover:opacity-100 group-hover:translate-y-0"
            />
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold">iBuildThis - Showcase Your Builds</h3>
            
            <p className="text-muted-foreground text-lg">
             Showcase your projects and discover what developers are building. Vote for your favorites and see trending builds from the community. Built with modern tech stack featuring secure authentication and real-time updates.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
               Neon DB
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
               Clerk
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
               Shadcn UI
              </span>

              {/* ADD MORE TECH TAGS */}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-2">
              <Button asChild size="sm" className="gap-2 ">
                <a 
      href="https://ibuiltthis-murex.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
                <ExternalLink className="w-4 h-4" />
                
                Live Demo
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2 hover:text-primary">
                      <a 
      href="https://github.com/thatindiangeek81/ibuiltthis" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
                <Github className="w-4 h-4" />
                GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project 2 - Screenshot Right, Info Left */}
        <div className="group relative flex flex-col lg:flex-row-reverse items-center gap-8 mb-20 lg:mb-32">
          
          {/* Screenshot Container */}
          <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border bg-muted">
            {/* ADD YOUR PROJECT SCREENSHOT HERE */}
            <img 
              src="/project-2-screenshot.png" 
              alt="Project 2"
              className="w-full h-full object-cover"
            />
            
            {/* Duck Mascot - Slides in from bottom-left on hover */}
            <img
              src="/duck-project-2.png"
              alt="duck mascot"
              className="absolute -bottom-5 -left-16 w-60 h-60
                         opacity-0 translate-y-6
                         transition-all duration-300 delay-75
                         group-hover:opacity-100 group-hover:translate-y-0"
            />
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold">NoTrace - Anonymous Chat, Zero Footprint</h3>
            
            <p className="text-muted-foreground text-lg">
              Fully anonymous two-person chat rooms with zero sign-up required. Messages self-destruct in 10 minutes or instantly with one click. No traces, no tracking, just private conversations that disappear.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Elysia.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Bun
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Upstash Redis
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Typescript
              </span>
              {/* ADD MORE TECH TAGS */}
            </div>

            {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
              <Button asChild size="sm" className="gap-2 ">
                <a 
      href="https://notrace-eight.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
                <ExternalLink className="w-4 h-4" />
                
                Live Demo
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2 hover:text-primary">
                      <a 
      href="https://github.com/thatindiangeek81/notrace" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
                <Github className="w-4 h-4" />
                GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project 3 (Portfolio) - Screenshot Left, Info Right */}
        <div className="group relative flex flex-col lg:flex-row items-center gap-8">
          
          {/* Screenshot Container */}
          <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border bg-muted">
            {/* ADD YOUR PORTFOLIO SCREENSHOT HERE */}
            <img 
              src="/project-3-screenshot.png" 
              alt="Portfolio Website"
              className="w-full h-full object-cover"
            />
            
            {/* Duck Mascot - Slides in from bottom-right on hover */}
            <img
              src="/duck-project-3.png"
              alt="duck mascot"
              className="absolute bottom-0 right-0 w-50
                         opacity-0 translate-y-6
                         transition-all duration-300 delay-75
                         group-hover:opacity-100 group-hover:translate-y-0"
            />
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Portfolio Website</h3>
            
            <p className="text-muted-foreground text-lg">
              My personal portfolio showcasing projects and skills. Built with Next.js and designed with a focus on clean UI, smooth animations, and yes—quirky duck mascots everywhere
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Typescript
              </span>
               <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Shadcn UI
              </span>
              {/* ADD MORE TECH TAGS */}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-2">
                <Button asChild size="sm" variant="outline" className="gap-2 hover:text-primary">
                      <a 
      href="https://github.com/thatindiangeek81/notrace" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
                <Github className="w-4 h-4" />
                GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;