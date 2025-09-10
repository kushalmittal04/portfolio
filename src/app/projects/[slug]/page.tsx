
import { notFound } from "next/navigation";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlayCircle,
  faCheckCircle,
  faLightbulb,
  faWrench,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-2 text-xl text-primary font-semibold">
          {project.tagline}
        </p>
      </header>

      <div className="mb-12">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {project.videoUrl && (
              <CarouselItem>
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    src={project.videoUrl}
                    title={`${project.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
              </CarouselItem>
            )}
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src={image.url}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    data-ai-hint={image.dataAiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 space-y-12">
          <Card>
            <CardHeader>
                <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{project.overview}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} /> Features</CardTitle>
            </CardHeader>
             <CardContent className="space-y-3 text-muted-foreground">
                {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <p>{feature}</p>
                    </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><FontAwesomeIcon icon={faLightbulb} /> Challenges & Solutions</CardTitle>
            </CardHeader>
             <CardContent className="space-y-4 text-muted-foreground">
                {project.challenges.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-foreground">{item.challenge}</h4>
                        <p>{item.solution}</p>
                    </div>
                ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 lg:sticky lg:top-24 self-start">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FontAwesomeIcon icon={faWrench} /> Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                        </Badge>
                    ))}
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FontAwesomeIcon icon={faCogs} /> Skills Demonstrated</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                        </Badge>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button asChild className="w-full">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" /> GitHub Repository
                        </Link>
                    </Button>
                     {project.liveUrl && (
                        <Button asChild variant="secondary" className="w-full">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPlayCircle} className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>

      </div>

    </div>
  );
}
