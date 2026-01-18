import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Education() {
  return (
    <div className="py-20 flex flex-col items-center gap-12">
      
  {/* Title */}
  <div className="flex items-center gap-2">
    <GraduationCap size={50} />
    <span className="text-5xl font-bold">Education</span>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
    
    {/* SSC Card */}
    <Card
      className="relative bg-card text-card-foreground rounded-xl overflow-hidden
                 transition-transform duration-300 hover:scale-[1.03] group
                 border border-border"
    >
      {/* Duck */}
      <img
        src="/edu-10.png"
        alt="duck"
        className="absolute bottom-0 right-0 w-32
                   opacity-0 translate-y-6
                   transition-all duration-300 delay-75
                   group-hover:opacity-100 group-hover:translate-y-0"
      />

      <CardContent className="p-6 flex flex-col gap-3 relative z-10">
        <h3 className="text-2xl font-semibold">
          Secondary School Certificate-10th  (SSC)
        </h3>

        <span className="text-sm text-muted-foreground">
          April 2020 – March 2021
        </span>

        <div className="flex items-center gap-1 text-primary font-semibold">
          <GraduationCap className="w-4 h-4" />
          88%
        </div>

        <p className="text-sm text-muted-foreground">
          Delhi Public School, Vadodara
        </p>
      </CardContent>
    </Card>

    {/* HSC Card */}
    <Card
      className="relative bg-card text-card-foreground rounded-xl overflow-hidden
                 transition-transform duration-300 hover:scale-[1.03] group
                 border border-border"
    >
      {/* Duck */}
      <img
        src="/edu-12.png"
        alt="duck"
        className="absolute bottom-0 right-0 w-40
                   opacity-0 translate-y-6
                   transition-all duration-300 delay-75
                   group-hover:opacity-100 group-hover:translate-y-0"
      />

      <CardContent className="p-6 flex flex-col gap-3 relative z-10">
        <h3 className="text-2xl font-semibold">
          Higher Secondary Certificate-12th (HSC)
        </h3>

        <span className="text-sm text-muted-foreground">
          April 2022 – March 2023
        </span>

        <div className="flex items-center gap-1 text-primary font-semibold">
          <GraduationCap className="w-4 h-4" />
          91.4%
        </div>

        <p className="text-sm text-muted-foreground">
          Delhi Public School, Vadodara
        </p>
      </CardContent>
    </Card>

    {/* B.Tech Card */}
    <Card
      className="relative bg-card text-card-foreground rounded-xl overflow-hidden
                 transition-transform duration-300 hover:scale-[1.03] group
                 border border-border"
    >
      {/* Duck */}
      <img
        src="/duck.png"
        alt="duck"
        className="absolute bottom-0 right-0 w-32
                   opacity-0 translate-y-6
                   transition-all duration-300 delay-75
                   group-hover:opacity-100 group-hover:translate-y-0"
      />

      <CardContent className="p-6 flex flex-col gap-3 relative z-10">
        <h3 className="text-2xl font-semibold">
          Bachelor of Technology – Computer Engineering
        </h3>

        <span className="text-sm text-muted-foreground">
          July 2023 – May 2027
        </span>

        <div className="flex items-center gap-1 text-primary font-semibold">
          <GraduationCap className="w-4 h-4" />
          CGPA: 9.20 (till 5th Semester)
        </div>

        <p className="text-sm text-muted-foreground">
          Pandit Deendayal Energy University, Gandhinagar
        </p>
      </CardContent>
    </Card>

  </div>
</div>
  );
}
