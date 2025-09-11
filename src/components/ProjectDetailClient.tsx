
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  faArrowLeft,
  faPlayCircle,
  faCheckCircle,
  faLightbulb,
  faWrench,
  faBullseye,
  faTasks,
  faCogs,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Project } from "@/lib/types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export function ProjectDetailClient({ project }: { project: Project }) {
   
  const media = [
      ...(project.videoUrl ? [{ type: 'video' as const, url: project.videoUrl }] : []),
      ...project.images.map(img => ({ type: 'image' as const, ...img }))
  ];

  const handleScrollToContent = () => {
    const contentElement = document.getElementById('project-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="absolute top-4 left-4 z-20 bg-background/50 hover:bg-background/80">
          <Link href="/projects">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>
      <section className="relative flex h-screen w-full flex-col items-center justify-center bg-background text-foreground">
        <div className="container flex-grow flex flex-col justify-center items-center gap-8 py-16">
            <div className="text-center">
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {project.name}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                    {project.tagline}
                </p>
            </div>

            <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
              <CarouselContent>
                {media.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                      {item.type === 'video' && item.url ? (
                        <div className="h-full w-full bg-black">
                            <iframe
                            src={item.url}
                            title={`${project.name} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                            ></iframe>
                        </div>
                        ) : (
                        <div className="relative h-full w-full">
                            <Image
                            src={item.url}
                            alt={`${project.name} screenshot ${index + 1}`}
                            fill
                            className="object-contain"
                            data-ai-hint={item.dataAiHint}
                            sizes="(max-width: 768px) 100vw, 75vw"
                            priority={index === 0}
                            />
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>
        <Button variant="ghost" onClick={handleScrollToContent} className="absolute bottom-4 animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
        </Button>
      </section>

      <section id="project-content" className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                    <FontAwesomeIcon icon={faBullseye} className="text-primary h-6 w-6" /> Project Overview
                    </h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground text-base leading-relaxed">
                    {project.overview}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                    <FontAwesomeIcon icon={faTasks} className="text-primary h-6 w-6" /> Key Features
                    </h2>
                    <ul className="space-y-4 text-muted-foreground">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary h-6 w-6" /> Challenges & Solutions
                    </h2>
                    <div className="space-y-6">
                    {project.challenges.map((item, index) => (
                        <div key={index} className="rounded-lg border bg-card/50 p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                        <h4 className="font-semibold text-foreground text-base sm:text-lg">{item.challenge}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base mt-2">{item.solution}</p>
                        </div>
                    ))}
                    </div>
                </section>
            </div>

            <aside className="lg:sticky lg:top-24 self-start space-y-8 mt-12 lg:mt-0">
                 <Card className="overflow-hidden shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl"><FontAwesomeIcon icon={faCogs} /> Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                                {tech}
                            </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-md">
                    <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl"><FontAwesomeIcon icon={faWrench} /> Skills Demonstrated</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    </CardContent>
                </Card>
                 <Card className="overflow-hidden shadow-md">
                    <CardHeader>
                        <CardTitle>Links</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-3">
                         <Button asChild className="w-full" size="lg" variant="secondary">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" /> View Code
                            </a>
                        </Button>
                        {project.liveUrl && (
                            <Button asChild className="w-full" size="lg">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> Live Demo
                            </a>
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </aside>
        </div>
      </section>
    </>
  );
}
