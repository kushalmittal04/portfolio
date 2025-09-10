
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
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import { achievementsData, certificatesData } from "@/data/credentials";
import { TechIcon } from "@/components/TechIcon";
import skillsToShow from "@/data/featured-skills.json";
import content from "@/data/pageContent.json";
import recentActivitiesConfig from "@/data/recent-activities.json";
import { format } from "date-fns";

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
  }).filter(Boolean);
  
  const homeContent = content.home;


  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Image
              src="/images/profile_pics/pic_1.jpeg"
              alt="Kushal Mittal"
              width={150}
              height={150}
              className="rounded-full object-cover shadow-lg aspect-square"
              data-ai-hint="portrait professional"
              priority
            />
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">
                {homeContent.title}
              </h1>
              <h2 className="text-xl font-semibold text-primary md:text-2xl">
                {homeContent.subtitle}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {homeContent.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">{homeContent.buttons.work}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/pdfs/Kushal_Mittal_Resume.pdf" download="Kushal_Mittal_Resume.pdf">
                  {homeContent.buttons.resume} <Download className="ml-2 h-4 w-4" />
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
              {homeContent.sections.featuredProjects.title}
            </h2>
             <p className="text-muted-foreground">{homeContent.sections.featuredProjects.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredProjects.map((project) => (
               <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills Overview */}
      <section id="skills" className="container">
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
      </section>

      {/* Latest Internship */}
      {latestInternship && (
        <section id="latest-internship" className="container">
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
                          View All Experience <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quick Achievements */}
      {recentActivities.length > 0 && (
        <section id="achievements" className="container">
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
        </section>
      )}

      <div className="pb-16" />
    </div>
  );
}
