
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

import type { Project } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CarouselThumb } from "./CarouselThumb";
import { cn } from "@/lib/utils";

export function ProjectDetailClient({ project }: { project: Project }) {
  const [mainApi, setMainApi] = useState<EmblaCarouselType>();
  const [thumbApi, setThumbApi] = useState<EmblaCarouselType>();
  const [selectedIndex, setSelectedIndex] = useState(0);
   
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
    if (thumbApi.scrollSnapList().length > newSelectedIndex) {
      thumbApi.scrollTo(newSelectedIndex);
    }
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  const handleScrollToContent = () => {
    const contentElement = document.getElementById('project-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="absolute top-4 left-4 z-20 bg-background/50 hover:bg-background/80">
          <Link href="/projects">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <section className="relative flex h-screen w-full flex-col items-center justify-center bg-card text-card-foreground">
        <div className="container text-center mb-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                {project.tagline}
            </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 flex-grow flex items-center justify-center gap-4">
            {media.length > 1 && (
                 <div className="h-full py-16 hidden md:block">
                     <div
                        ref={useEmblaCarousel({ axis: 'y', containScroll: 'keepSnaps', dragFree: true }, []).emblaRef}
                        onMouseEnter={() => thumbApi?.reInit()}
                        className="h-full overflow-hidden"
                     >
                        <div className="flex h-full flex-col gap-2">
                        {media.map((item, index) => (
                            <div key={`thumb-${index}`} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 flex-shrink-0">
                                <CarouselThumb
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    item={item}
                                />
                            </div>
                        ))}
                        </div>
                     </div>
                 </div>
            )}
            <div ref={useEmblaCarousel({ loop: true }, []).emblaRef} onMouseEnter={() => mainApi?.reInit()} className="h-full w-full flex-1 overflow-hidden py-16">
                 <div className="h-full">
                    {media.map((item, index) => (
                        <div className="h-full" key={index}>
                             {item.type === 'video' && item.url ? (
                                <div className="h-full w-full bg-black rounded-lg overflow-hidden">
                                    <iframe
                                    src={item.url}
                                    title={`${project.name} video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full"
                                    ></iframe>
                                </div>
                                ) : (
                                <div className="relative h-full w-full bg-muted rounded-lg overflow-hidden">
                                    <Image
                                    src={item.url}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={item.dataAiHint}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                                    priority={index === 0}
                                    />
                                </div>
                                )}
                        </div>
                    ))}
                 </div>
            </div>
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
                        <Button asChild className="w-full" size="lg">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" /> View Code
                            </a>
                        </Button>
                        {project.liveUrl && (
                            <Button asChild variant="secondary" className="w-full" size="lg">
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
    </div>
  );
}
