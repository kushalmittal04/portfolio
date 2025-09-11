
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";
import content from "@/data/pageContent.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardCarousel } from "@/components/ProjectCardCarousel";

const categories = ["All", ...Array.from(new Set(projectsData.flatMap(p => p.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const projectsContent = content.projects;

  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => b.id - a.id);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") {
      return sortedProjects;
    }
    return sortedProjects.filter((p) => p.category.includes(filter));
  }, [filter, sortedProjects]);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {projectsContent.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {projectsContent.description}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 rounded-lg bg-muted p-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-md px-4 py-2 transition-all duration-200",
                filter === category && "bg-background text-foreground shadow-sm hover:bg-background/90"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <Link href={`/projects/${project.slug}`} className="block relative group bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-lg">{project.name}</h3>
                  {project.tagline && <p className="text-primary-foreground/80 text-sm">{project.tagline}</p>}
              </div>
              <ProjectCardCarousel project={project} />
            </Link>
            <CardContent className="pt-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                    <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map(tech => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                        {project.technologies.length > 3 && (
                            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-2">Skills</h4>
                     <div className="flex flex-wrap gap-1.5">
                        {project.skills.slice(0, 2).map(skill => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                        {project.skills.length > 2 && (
                            <Badge variant="outline">+{project.skills.length - 2}</Badge>
                        )}
                    </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
               <Button asChild className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  View Details <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
