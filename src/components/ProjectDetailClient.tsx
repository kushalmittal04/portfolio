
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlayCircle,
  faCheckCircle,
  faLightbulb,
  faWrench,
  faBullseye,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import type { Project } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CarouselThumb } from "./CarouselThumb";

export function ProjectDetailClient({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainApi, setMainApi] = useState<EmblaCarouselType>();
  const [thumbApi, setThumbApi] = useState<EmblaCarouselType>();

  const media = [
      ...(project.videoUrl ? [{ type: 'video' as const, url: project.videoUrl }] : []),
      ...project.images.map(img => ({ type: 'image' as const, ...img }))
  ];

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const newSelectedIndex = mainApi.selectedScrollSnap();
    setSelectedIndex(newSelectedIndex);
    thumbApi.scrollTo(newSelectedIndex);
  }, [mainApi, thumbApi, setSelectedIndex]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <Button asChild variant="ghost" className="mb-8 -ml-4">
          <Link href="/projects">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            {project.name}
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-2">
            {project.tagline}
            </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

                {/* Media Carousel */}
                <div className="space-y-4">
                    <Carousel setApi={setMainApi} className="w-full">
                        <CarouselContent>
                            {media.map((item, index) => (
                            <CarouselItem key={index}>
                                {item.type === 'video' && item.url ? (
                                <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted shadow-lg">
                                    <iframe
                                    src={item.url}
                                    title={`${project.name} video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full"
                                    ></iframe>
                                </div>
                                ) : (
                                <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-card shadow-lg">
                                    <Image
                                    src={item.url}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.dataAiHint}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                                    priority={index === 0}
                                    />
                                </div>
                                )}
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <Carousel
                        setApi={setThumbApi}
                        opts={{
                            containScroll: 'keepSnaps',
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="items-center">
                            {media.map((item, index) => (
                                <CarouselItem key={`thumb-${index}`} className="basis-1/4 sm:basis-1/5 lg:basis-1/6">
                                    <CarouselThumb
                                        onClick={() => onThumbClick(index)}
                                        selected={index === selectedIndex}
                                        item={item}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                
                {/* Project Details */}
                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><FontAwesomeIcon icon={faBullseye} /> Overview</h2>
                        <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground text-base leading-relaxed">
                            {project.overview}
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><FontAwesomeIcon icon={faTasks} /> Key Features</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><FontAwesomeIcon icon={faLightbulb} /> Challenges & Solutions</h2>
                        <div className="space-y-6">
                            {project.challenges.map((item, index) => (
                                <div key={index} className="rounded-lg border bg-card/50 p-6 shadow-sm">
                                    <h4 className="font-semibold text-foreground text-lg">{item.challenge}</h4>
                                    <p className="text-muted-foreground text-base mt-2">{item.solution}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 self-start space-y-8">
                 <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><FontAwesomeIcon icon={faPlayCircle}/> Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {project.liveUrl && (
                            <Button asChild className="w-full" size="lg">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </Button>
                        )}
                        <Button asChild variant="secondary" className="w-full" size="lg">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> GitHub Repository
                            </a>
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><FontAwesomeIcon icon={faWrench} /> Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                            {tech}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><FontAwesomeIcon icon={faTasks} /> Skills Demonstrated</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                            {skill}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>
            </aside>
        </div>
    </div>
  );
}
