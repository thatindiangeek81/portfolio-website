"use client"
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function HeroSection(){
    return(
         <div>
      <section className="relative overflow-hidden bg-background">
        

        <div className="wrapper relative z-10">
          <div className="flex flex-col items-center text-center py-12 sm:py-14 md:py-12 lg:py-14 max-w-4xl mx-auto">
            <LiveBadge />
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Shipping Real Products,{' '}
              <br />
              Not Just{' '}
              <span className="inline-block relative ">
                {/* Light yellow gradient blob behind text */}
                {/* <span className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 via-yellow-300/50 to-yellow-200/40 blur-2xl scale-110 -z-10"></span> */}
                
                <span className=" text-5xl sm:text-5xl md:text-6xl lg:text-7xl animate-swim inline-block text-primary relative z-10">
                  Assignments
                </span>
                <svg 
                  className="absolute w-[110%] h-4 md:h-5 -bottom-2 md:-bottom-3 left-[-5%] opacity-80 z-0" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 100 10"
                >
                  <path 
                    d="M0 5 Q 25 0, 50 5 T 100 5" 
                    fill="none" 
                    stroke="#ffd54f" 
                    strokeLinecap="round" 
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </h1>
            <div className="flex flex-col items-center gap-6">
  <p className="py-4 text-base sm:text-lg text-muted-foreground max-w-3xl">
   Hi, I’m Aryan, a Computer Science student learning and building as a full-stack developer.
I mainly work with React and Next.js, and I’m comfortable building complete flows by connecting frontend, backend, and databases.
I’m also an AI enthusiast, interested in applying AI concepts to practical applications.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row items-center gap-4">
   <Button 
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/aryan-resume.pdf'; // Make sure to place your resume.pdf in the public folder
      link.download = 'aryan-Resume.pdf'; // Customize the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="text-black hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_#0eaebd] transition-transform shadow-[0_2px_4px_rgba(19,218,236,0.2)]"
  >
    Download Resume
  </Button>

    <Button 
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        size="lg" 
        variant="outline" 
        className="px-8 
                   hover:bg-white hover:text-black 
                   dark:hover:bg-transparent dark:hover:text-primary 
                   hover:-translate-y-0.5 active:translate-y-0.5 
                   active:shadow-[0_1px_#0eaebd] 
                   transition-transform 
                   shadow-[0_2px_4px_rgba(19,218,236,0.2)]"
      >
        View Projects
      </Button>
  </div>

  {/* Social Links */}
  <div className="flex items-center gap-5 pt-2">
    <a
      href="https://github.com/thatindiangeek81"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Github className="w-5 h-5" />
    </a>

    <a
      href="https://www.linkedin.com/in/aryan-gupta-782a98274"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Linkedin className="w-5 h-5" />
    </a>

    <a
      href="mailto:aryangupta.devwork@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Mail className="w-5 h-5" />
    </a>
  </div>
</div>

          </div>
        </div>
        
        
        <div className="fixed bottom-0 right-0 w-40 h-40 md:w-40 md:h-40 lg:w-52 lg:h-52 pointer-events-none z-50">
  {/* Subtle glow behind mascot */}
  <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
  
  <img 
    src="/mascot_peeking.png" 
    alt="Aryan's mascot" 
    className="w-full h-full object-contain"
  />
</div>
      </section>
    </div>
    );
}