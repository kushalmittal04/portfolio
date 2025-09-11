
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
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
  faCogs,
  faBullseye,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import type { Project } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CarouselThumb } from "./CarouselThumb";

const MotionCard = motion(Card);

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

export function ProjectDetailClient({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainApi, setMainApi] = useState<EmblaCarouselType>();
  const [thumbApi, setThumbApi] = useState<EmblaCarouselType>();

  const media = [
      ...(project.videoUrl ? [{ type: 'video', url: project.videoUrl }] : []),
      ...project.images.map(img => ({ type: 'image', ...img }))
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="container mx-auto max-w-6xl px-4 py-16"
    >
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 text-xl text-primary font-semibold bg-primary/10 py-1 px-4 rounded-full inline-block">
          {project.tagline}
        </p>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12 space-y-4"
      >
        <Carousel setApi={setMainApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={index}>
                {item.type === 'video' ? (
                  <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
                    <iframe
                      src={item.url}
                      title={`${project.name} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
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
            className="w-full max-w-xl mx-auto"
        >
            <CarouselContent className="items-center">
                {media.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/4 sm:basis-1/5 lg:basis-1/6">
                        <CarouselThumb
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            item={item}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <motion.div 
           initial="initial"
           animate="animate"
           transition={{ staggerChildren: 0.1 }}
           className="lg:col-span-2 space-y-12"
        >
          <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><FontAwesomeIcon icon={faBullseye} /> Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">{project.overview}</p>
            </CardContent>
          </MotionCard>
          
          <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><FontAwesomeIcon icon={faTasks} /> Features</CardTitle>
            </CardHeader>
             <CardContent className="space-y-4 text-muted-foreground">
                {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-base">{feature}</p>
                    </div>
                ))}
            </CardContent>
          </MotionCard>

          <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><FontAwesomeIcon icon={faLightbulb} /> Challenges & Solutions</CardTitle>
            </Header>
             <CardContent className="space-y-6 text-muted-foreground">
                {project.challenges.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary/50 pl-4">
                        <h4 className="font-semibold text-foreground text-lg">{item.challenge}</h4>
                        <p className="text-base mt-1">{item.solution}</p>
                    </div>
                ))}
            </CardContent>
          </MotionCard>
        </motion.div>

        <div className="space-y-8 lg:sticky lg:top-24 self-start">
             <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><FontAwesomeIcon icon={faWrench} /> Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                        {tech}
                        </Badge>
                    ))}
                </CardContent>
            </MotionCard>

             <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><FontAwesomeIcon icon={faCogs} /> Skills Demonstrated</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                        {skill}
                        </Badge>
                    ))}
                </CardContent>
            </MotionCard>

            <MotionCard variants={cardVariants} whileHover={hoverEffect} className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> GitHub Repository
                        </Link>
                    </Button>
                     {project.liveUrl && (
                        <Button asChild variant="secondary" className="w-full" size="lg">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPlayCircle} className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                    )}
                </CardContent>
            </MotionCard>
        </div>
      </div>
    </motion.div>
  );
}
