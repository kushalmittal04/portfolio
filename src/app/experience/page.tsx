
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      <div className="relative space-y-12">
        <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
        {experienceData.map((exp, index) => (
           <div
            key={exp.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end md:flex-row-reverse"
            }`}
          >
            <div className="hidden md:block md:w-1/2"></div>
            <div className="w-full md:w-1/2 pl-10 md:pl-8">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={48} height={48} className="rounded-md mt-1" data-ai-hint={exp.dataAiHint}/>
                        <div>
                            <CardTitle className="text-2xl">{exp.position}</CardTitle>
                            <CardDescription className="text-base">
                                {exp.company}
                            </CardDescription>
                            <CardDescription className="text-base">
                                {exp.location}
                            </CardDescription>
                            <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
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
                    {exp.technologies.length > 4 && <Badge variant="outline">+{exp.technologies.length - 4} more</Badge>}
                  </div>
                   <Button asChild variant="default" size="sm">
                    <Link href={`/experience/${exp.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-8 ring-background md:left-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
