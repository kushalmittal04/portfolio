
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase, faCalendarDays, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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
import { useRef } from "react";

export default function ExperiencePage() {
  const experienceContent = content.experience;
  const sortedExperience = [...experienceData].sort((a, b) => b.id - a.id);
  
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: contentRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

      <div ref={contentRef} className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2">
           <motion.div 
              className="absolute top-0 left-0 w-full h-full origin-top bg-primary" 
              style={{ scaleY }} 
            />
            <motion.div 
              className="sticky top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1px)]"
            >
                <motion.div 
                className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"
                style={{
                    y: scrollYProgress,
                }}
                />
            </motion.div>
        </div>
        <div className="space-y-12">
          {sortedExperience.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 md:pl-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 h-8 w-8 -translate-x-1/2 rounded-full bg-primary flex items-center justify-center ring-8 ring-background md:left-1/2">
                <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5 text-primary-foreground" />
              </div>
              <div
                className={`w-full flex ${
                  index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                    <CardHeader className="flex flex-col sm:flex-row items-start gap-4">
                      <Image
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        width={56}
                        height={56}
                        className="rounded-lg border"
                        data-ai-hint={exp.dataAiHint}
                      />
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <CardDescription className="text-base font-medium">
                          {exp.company}
                        </CardDescription>
                        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div
                        className="mb-4 text-muted-foreground line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: exp.description[0] }}
                      />
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 4 && (
                          <Badge variant="outline">
                            +{exp.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/experience/${exp.slug}`}>
                          Read More <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
