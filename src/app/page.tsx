import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

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

export default function Home() {
  const featuredProject = projectsData.find((p) => p.isFeatured);
  const latestInternship = experienceData[0];
  const featuredAchievements = credentialsData.achievements.filter(
    (a) => a.isFeatured
  );
  const allTech = [
    ...new Set(
      projectsData
        .flatMap((p) => p.technologies)
        .concat(experienceData.flatMap((e) => e.technologies))
    ),
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  John Doe
                </h1>
                <h2 className="text-2xl font-medium text-primary">
                  Full-Stack Developer & AI Enthusiast
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I build innovative and efficient solutions, turning complex
                  problems into elegant software. Passionate about machine
                  learning and creating impactful technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/resume.pdf" download="resume.pdf">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <Image
              src="https://picsum.photos/600/600"
              alt="Hero Portrait"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              data-ai-hint="portrait professional"
            />
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section id="skills" className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">My Skillset</h2>
        <Card className="mx-auto max-w-4xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap justify-center gap-2">
              {allTech.slice(0, 20).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-4 py-1 text-base"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section id="featured-project" className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Project
          </h2>
          <Card className="grid overflow-hidden md:grid-cols-2">
            <div className="flex flex-col justify-center p-6 md:p-8">
              <Badge variant="outline" className="mb-2 w-fit">
                {featuredProject.category.join(" / ")}
              </Badge>
              <h3 className="mb-2 text-2xl font-bold">{featuredProject.name}</h3>
              <p className="mb-4 text-muted-foreground">
                {featuredProject.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <Button asChild>
                  <Link href={`/projects/${featuredProject.slug}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {featuredProject.liveUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <Image
              src={featuredProject.images[0].url}
              alt={featuredProject.name}
              width={800}
              height={600}
              className="h-full w-full object-cover"
              data-ai-hint={featuredProject.images[0].dataAiHint}
            />
          </Card>
        </section>
      )}

      {/* Latest Internship */}
      {latestInternship && (
        <section id="latest-internship" className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Latest Experience
          </h2>
          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Image
                  src={latestInternship.logoUrl}
                  alt={`${latestInternship.company} logo`}
                  width={64}
                  height={64}
                  className="rounded-lg"
                  data-ai-hint={latestInternship.dataAiHint}
                />
                <div>
                  <CardTitle className="text-2xl">
                    {latestInternship.position}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {latestInternship.company} &middot;{" "}
                    {latestInternship.duration}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {latestInternship.description[0]}
              </p>
              <Button asChild variant="link" className="px-0">
                <Link href={`/experience/${latestInternship.slug}`}>
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quick Achievements */}
      {featuredAchievements.length > 0 && (
        <section id="achievements" className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Recent Achievements
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {featuredAchievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader>
                  <CardTitle>{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent>
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
