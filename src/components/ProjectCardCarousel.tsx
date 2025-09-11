
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { Project } from "@/lib/types";

interface ProjectCardCarouselProps {
  project: Project;
}

export function ProjectCardCarousel({ project }: ProjectCardCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
            {project.images.map((image, index) => (
                <div className="relative aspect-video min-w-full" key={index}>
                    <Image
                        src={image.url}
                        alt={`${project.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.dataAiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    </div>
  );
}
