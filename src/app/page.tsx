import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { credentialsData } from "@/data/credentials";
import { TechIcon } from "@/components/TechIcon";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const latestInternship = experienceData[0];
  const featuredAchievements = credentialsData.achievements.filter(
    (a) => a.isFeatured
  );
  const skillsToShow = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "Langchain",
    "Langgraph",
  ];


  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Image
              src="https://picsum.photos/200/200"
              alt="Kushal Mittal"
              width={150}
              height={150}
              className="rounded-full object-cover"
              data-ai-hint="portrait professional"
            />
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">
                Kushal Mittal
              </h1>
              <h2 className="text-xl font-semibold text-primary md:text-2xl">
                Full-Stack Developer & AI Enthusiast
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Passionate about creating innovative solutions with modern
                technologies. Specialized in React, Node.js, and Machine
                Learning with 2+ years of experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/resume.pdf" download="resume.pdf">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section id="featured-projects" className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Featured Projects
            </h2>
             <p className="text-muted-foreground">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredProjects.map((project) => (
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
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                   <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0,3).map(tech => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                      )}
                   </div>
                </CardContent>
                <CardContent className="flex gap-4">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild variant="link" className="p-0 h-auto">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <PlayCircle className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills Overview */}
      <section id="skills" className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div>
        <div className="mx-auto max-w-4xl">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
            {skillsToShow.map((tech) => (
              <div key={tech} className="flex flex-col items-center gap-2">
                 <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-muted shadow-md hover:shadow-lg transition-shadow">
                    <TechIcon technology={tech} className="w-12 h-12" />
                 </div>
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Internship */}
      {latestInternship && (
        <section id="latest-internship" className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Latest Experience
            </h2>
            <p className="text-muted-foreground">Recent internship and work experience</p>
          </div>
          <Card className="mx-auto max-w-4xl p-6">
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
                  <CardDescription>
                    {latestInternship.company} &middot; {latestInternship.duration} &middot; {latestInternship.location}
                  </CardDescription>
                  <p className="mt-4 text-muted-foreground">
                    {latestInternship.description[0]}
                  </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                    {latestInternship.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href={`/experience/${latestInternship.slug}`}>
                      View All Experience <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
            </div>
          </Card>
        </section>
      )}

      {/* Quick Achievements */}
      {featuredAchievements.length > 0 && (
        <section id="achievements" className="container">
           <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Recent Activities
            </h2>
            <p className="text-muted-foreground">Latest achievements and updates</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {featuredAchievements.map((achievement) => (
              <Card key={achievement.id} className="p-6">
                <CardHeader className="p-0">
                  <CardTitle>{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="pb-16" />
    </div>
  );
}
