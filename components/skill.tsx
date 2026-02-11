import { BookOpen, Brain, Code2, Database, ExternalLink, Layers, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  return (
    <div className="py-20 flex flex-col items-center gap-12">
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <Code2 size={46} />
        <span className="text-5xl font-bold">Skills</span>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[140px]">

          {/* Programming Languages (Anchor) */}
          <Card
  className="relative group overflow-hidden
             md:col-span-3 md:row-span-2
             transition-all duration-200 ease-out
             hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
>
  

  <CardContent className="p-5 h-full flex flex-col relative z-10">
    <div className="flex items-center gap-2 mb-3">
      <Code2 className="w-5 h-5 text-primary" />
      <h3 className="text-lg font-bold">Programming Languages</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {["Python", "C++", "Java", "C", "JavaScript", "TypeScript"].map(
        (lang) => (
          <span
            key={lang}
            className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-sm"
          >
            {lang}
          </span>
        )
      )}
    </div>
  </CardContent>
</Card>


          {/* Frontend */}
          <Card className="md:col-span-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
            <CardContent className="p-4 h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold">Frontend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                React • Next.js • Tailwind CSS • HTML/CSS
              </p>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="md:col-span-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
            <CardContent className="p-4 h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <Server className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold">Backend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Node.js • Express • Elysia.js • Bun
              </p>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="md:col-span-1 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
            <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center gap-1.5">
              <Database className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold">Databases</h3>
              <p className="text-xs text-muted-foreground">
                PostgreSQL • MongoDB • Redis • MySQL
              </p>
            </CardContent>
          </Card>

          {/* DSA */}
          <Card className="md:col-span-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
            <CardContent className="p-4 h-full flex flex-col justify-between -mt-5 mb-3">
              <div className="flex items-center gap-2 -mt-2 mb-3">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold">
                  DSA & Problem Solving
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 py-2 bg-primary/10 border border-primary/20 rounded-lg text-center">
                  <div className="text-lg font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground">
                    LeetCode
                  </div>
                </div>
                <div className="flex-1 py-2 bg-primary/10 border border-primary/20 rounded-lg text-center">
                  <div className="text-lg font-bold text-primary">~1430</div>
                  <div className="text-xs text-muted-foreground">
                    Rating
                  </div>
                </div>
               
              </div>
               <div className="flex justify-center py-2">
                  <a href="https://leetcode.com/u/NYD2IAVI2U/">
                      <span className="flex items-center gap-1.5 text-sm text-primary font-medium cursor-pointer hover:underline">
    <ExternalLink className="w-4 h-4" />
    Visit Account
  </span>

                    </a>
                </div>
            </CardContent>
          </Card>

          {/* Coursework */}
          <Card className="md:col-span-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
            <CardContent className="p-4 h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold">
                  Relevant Coursework
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Data Structures • Algorithm Analysis • Digital Logic Design •
                Operating Systems • Computer Networks • DBMS
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
