
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

      <div className="flex justify-center mb-8">
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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative aspect-video">
                 <Image
                    src={project.images[0].url}
                    alt={project.name}
                    fill
                    className="object-cover"
                    data-ai-hint={project.images[0].dataAiHint}
                />
            </div>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                 <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
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
