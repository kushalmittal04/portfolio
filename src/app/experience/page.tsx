
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import experienceData from "@/data/experience.json";
import content from "@/data/pageContent.json";

export default function ExperiencePage() {
  const experienceContent = content.experience;
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {experienceContent.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {experienceContent.description}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative">
               <div className="absolute left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                 <Briefcase className="h-5 w-5 text-primary-foreground" />
               </div>
               <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                 <div className="w-1/2 px-8">
                   <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                     <CardHeader className="flex flex-row items-start gap-4">
                       <Image
                         src={exp.logoUrl}
                         alt={`${exp.company} logo`}
                         width={56}
                         height={56}
                         className="rounded-lg border"
                         data-ai-hint={exp.dataAiHint}
                       />
                       <div>
                         <CardTitle className="text-xl">{exp.position}</CardTitle>
                         <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                         <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                           <div className="flex items-center gap-2">
                             <MapPin className="h-4 w-4" />
                             <span>{exp.location}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <CalendarDays className="h-4 w-4" />
                             <span>{exp.duration}</span>
                           </div>
                         </div>
                       </div>
                     </CardHeader>
                     <CardContent>
                       <p className="mb-4 text-muted-foreground line-clamp-2">
                         {exp.description[0]}
                       </p>
                       <div className="flex flex-wrap gap-2 mb-4">
                         {exp.technologies.slice(0, 4).map((tech) => (
                           <Badge key={tech} variant="secondary">
                             {tech}
                           </Badge>
                         ))}
                         {exp.technologies.length > 4 && (
                           <Badge variant="outline">
                             +{exp.technologies.length - 4} more
                           </Badge>
                         )}
                       </div>
                       <Button asChild variant="outline" size="sm">
                         <Link href={`/experience/${exp.slug}`}>
                           Read More <ArrowRight className="ml-2 h-4 w-4" />
                         </Link>
                       </Button>
                     </CardContent>
                   </Card>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
