
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  faArrowLeft,
  faPlayCircle,
  faCheckCircle,
  faLightbulb,
  faBullseye,
  faTasks,
  faCogs,
  faWrench
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

  return (
    <>
      <Button asChild variant="ghost" className="absolute top-20 left-4 z-20 bg-background/50 hover:bg-background/80">
        <Link href="/projects">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>
      <section className="container mx-auto max-w-7xl px-4 py-16 sm:py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                {project.tagline}
            </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto relative group" opts={{ loop: true }}>
            <CarouselContent>
            {media.map((item, index) => (
                <CarouselItem key={index}>
                <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted shadow-lg">
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
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-12 rounded-none border-none bg-black/20 text-white opacity-0 transition-opacity hover:bg-black/40 group-hover:opacity-100 disabled:opacity-0" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-12 rounded-none border-none bg-black/20 text-white opacity-0 transition-opacity hover:bg-black/40 group-hover:opacity-100 disabled:opacity-0" />
        </Carousel>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
                <Card className="shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <FontAwesomeIcon icon={faBullseye} className="text-primary h-6 w-6" /> Project Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground text-base leading-relaxed">
                            {project.overview}
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <FontAwesomeIcon icon={faTasks} className="text-primary h-6 w-6" /> Key Features
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-muted-foreground">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                            <span className="text-base">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                        <FontAwesomeIcon icon={faLightbulb} className="text-primary h-6 w-6" /> Challenges & Solutions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                        {project.challenges.map((item, index) => (
                            <div key={index} className="rounded-lg border bg-card/50 p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                            <h4 className="font-semibold text-foreground text-base sm:text-lg">{item.challenge}</h4>
                            <p className="text-muted-foreground text-sm sm:text-base mt-2">{item.solution}</p>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <aside className="lg:sticky lg:top-24 self-start space-y-8">
                 <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                 <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
