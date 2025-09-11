
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/TechIcon";

import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import { achievementsData, certificatesData } from "@/data/credentials";
import skillsToShow from "@/data/featured-skills.json";
import content from "@/data/pageContent.json";
import recentActivitiesConfig from "@/data/recent-activities.json";


export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);
  const latestInternship = experienceData[0];

  const recentActivities = recentActivitiesConfig.map(activity => {
    if (activity.type === 'certificate') {
      const cert = certificatesData.find(c => c.id === activity.id);
      if (cert) {
        return {
          id: `cert-${cert.id}`,
          name: cert.name,
          description: `Issued by ${cert.issuer} on ${format(new Date(cert.issueDate), "PPP")}.`,
        };
      }
    } else if (activity.type === 'achievement') {
      const achievement = achievementsData.find(a => a.id === activity.id);
      if (achievement) {
        return {
          id: `ach-${achievement.id}`,
          name: achievement.name,
          description: achievement.description,
        };
      }
    }
    return null;
  }).filter((item): item is { id: string; name: string; description: string } => item !== null);
  
  const homeContent = content.home;
  
  const heroRef = useRef<HTMLDivElement>(null);
  
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
    viewport: { once: true, amount: 0.2 }
  };
  
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };
  
  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          className="container px-4 md:px-6"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="flex flex-col items-center space-y-6 text-center">
                <motion.div variants={heroItemVariants}>
                <Image
                    src={homeContent.profilePicUrl}
                    alt="Kushal Mittal"
                    width={150}
                    height={150}
                    className="rounded-full object-cover shadow-lg aspect-square"
                    data-ai-hint="portrait professional"
                    priority
                />
                </motion.div>
                <motion.div variants={heroVariants} className="space-y-2">
                    <motion.h1 variants={heroItemVariants} className="text-5xl font-bold tracking-tighter sm:text-6xl">
                        {homeContent.title}
                    </motion.h1>
                    <motion.h2 variants={heroItemVariants} className="text-xl font-semibold text-primary md:text-2xl">
                        {homeContent.subtitle}
                    </motion.h2>
                    <motion.p variants={heroItemVariants} className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        {homeContent.description}
                    </motion.p>
                </motion.div>
                <motion.div variants={heroItemVariants} className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                    <Link href="/projects">{homeContent.buttons.work}</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                    <a href="/pdfs/Kushal_Mittal_Resume.pdf" download="Kushal_Mittal_Resume.pdf" rel="noopener noreferrer">
                    {homeContent.buttons.resume} <FontAwesomeIcon icon={faDownload} className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                </motion.div>
            </div>
        </motion.div>
      </section>

      <div className="relative z-10 bg-background">
        <div className="flex flex-col gap-16 md:gap-24">
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
            <motion.section 
                id="featured-projects" 
                className="container pt-16"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
            >
                <motion.div {...sectionAnimation}>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">
                            {homeContent.sections.featuredProjects.title}
                        </h2>
                        <p className="text-muted-foreground">{homeContent.sections.featuredProjects.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <Link href={`/projects/${project.slug}`} className="block relative aspect-video">
                            <Image
                            src={project.images[0].url}
                            alt={project.name}
                            fill
                            className="object-cover"
                            data-ai-hint={project.images[0].dataAiHint}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </Link>
                        <CardHeader>
                            <CardTitle>
                            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.slice(0,3).map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> Code
                                </a>
                            </Button>
                            {project.liveUrl && (
                                <Button asChild variant="link" className="p-0 h-auto">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPlayCircle} className="mr-2 h-4 w-4" /> Live Demo
                                </a>
                                </Button>
                            )}
                        </CardFooter>
                        </Card>
                    ))}
                    </div>
                </motion.div>
            </motion.section>
            )}
            
            {/* Skills Overview */}
            <motion.section 
                id="skills" 
                className="container"
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">{homeContent.sections.skills.title}</h2>
                <p className="text-muted-foreground">{homeContent.sections.skills.description}</p>
            </div>
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
                {skillsToShow.map((tech) => (
                    <div key={tech} className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-muted shadow-md hover:shadow-lg transition-shadow">
                        <TechIcon technology={tech} className="w-12 h-12" />
                    </div>
                    <p className="font-semibold text-center">{tech}</p>
                    </div>
                ))}
                </div>
            </div>
            </motion.section>

            {/* Latest Internship */}
            {latestInternship && (
            <motion.section 
                id="latest-internship" 
                className="container"
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    {homeContent.sections.latestExperience.title}
                </h2>
                <p className="text-muted-foreground">{homeContent.sections.latestExperience.description}</p>
                </div>
                <Card className="mx-auto max-w-4xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Image
                            src={latestInternship.logoUrl}
                            alt={`${latestInternship.company} logo`}
                            width={48}
                            height={48}
                            className="rounded-lg"
                            data-ai-hint={latestInternship.dataAiHint}
                        />
                        <div className="flex-1">
                            <CardTitle className="text-xl">
                            {latestInternship.position}
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                            {latestInternship.company} &middot; {latestInternship.duration} &middot; {latestInternship.location}
                            </CardDescription>
                            <div className="mt-4 text-muted-foreground line-clamp-3 sm:line-clamp-2" dangerouslySetInnerHTML={{ __html: latestInternship.description[0] }}/>
                            <div className="flex flex-wrap gap-2 mt-4">
                            {latestInternship.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                {tech}
                                </Badge>
                            ))}
                            </div>
                            <Button asChild variant="link" className="px-0 mt-4">
                            <Link href="/experience">
                                View All Experience <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                            </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
                </Card>
            </motion.section>
            )}

            {/* Quick Achievements */}
            {recentActivities.length > 0 && (
            <motion.section 
                id="achievements" 
                className="container"
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    {homeContent.sections.recentActivities.title}
                </h2>
                <p className="text-muted-foreground">{homeContent.sections.recentActivities.description}</p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recentActivities.map((item) => (
                    item && (
                    <Card key={item.id} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                            {item.description}
                        </p>
                        </CardContent>
                    </Card>
                    )
                ))}
                </div>
            </motion.section>
            )}

            <div className="pb-16" />
        </div>
      </div>
    </>
  );
}
