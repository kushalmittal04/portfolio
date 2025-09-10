
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";
import content from "@/data/pageContent.json";

const categories = ["All", ...Array.from(new Set(projectsData.flatMap(p => p.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const projectsContent = content.projects;

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(filter));

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
        <div className="flex flex-wrap gap-2 rounded-lg bg-muted p-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-md",
                filter === category && "bg-background text-foreground shadow-sm hover:bg-background/90"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-24">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={cn("relative aspect-video rounded-lg overflow-hidden shadow-lg group", index % 2 !== 0 && "md:order-last")}>
              <Link href={`/projects/${project.slug}`}>
                <Image
                    src={project.images[0].url}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.images[0].dataAiHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            <div className="space-y-4">
               <div>
                  <h2 className="text-3xl font-bold">
                    <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                  </h2>
                  <p className="text-lg text-primary font-semibold">{project.tagline}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
                <p className="text-muted-foreground line-clamp-3">{project.overview}</p>
                 <Button asChild size="lg">
                  <Link href={`/projects/${project.slug}`}>
                    View Project <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
