
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import experienceData from "@/data/experience.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageDialog } from "@/components/ImageDialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Building, CalendarDays, CheckCircle, MapPin, Timer } from "lucide-react";
import { format } from "date-fns";

export async function generateStaticParams() {
  return experienceData.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function ExperienceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const experience = experienceData.find((exp) => exp.slug === params.slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
       <Button asChild variant="ghost" className="mb-8">
        <Link href="/experience">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Experiences
        </Link>
      </Button>
      <header className="mb-12 space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            width={80}
            height={80}
            className="rounded-lg"
            data-ai-hint={experience.dataAiHint}
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {experience.position}
            </h1>
            <p className="text-xl text-muted-foreground">
              at {experience.company}
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Role Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              {experience.description.map((desc, index) => (
                <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>{desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {(experience.workImages || experience.certificateUrl) &&
            <Card>
                <CardHeader>
                <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {experience.certificateUrl && (
                         <ImageDialog
                            imageUrl={experience.certificateUrl}
                            alt="Internship Certificate"
                            dataAiHint="certificate document"
                        >
                            <div className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg">
                                <Image src={experience.certificateUrl} alt="Internship Certificate" fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint="certificate document"/>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-bold">View Certificate</p>
                                </div>
                            </div>
                        </ImageDialog>
                    )}
                    {experience.workImages?.map((image, index) => (
                         <ImageDialog
                            key={index}
                            imageUrl={image.url}
                            alt={`Work image ${index + 1}`}
                            dataAiHint={image.dataAiHint}
                        >
                            <div className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg">
                                <Image src={image.url} alt={`Work image ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint={image.dataAiHint}/>
                            </div>
                        </ImageDialog>
                    ))}
                </CardContent>
            </Card>
          }

        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                        </Badge>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <p><span className="font-semibold">Start:</span> {format(new Date(experience.startDate), "PPP")}</p>
                    </div>
                     <div className="flex items-center gap-3">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <p><span className="font-semibold">End:</span> {experience.endDate === 'Present' ? 'Present' : format(new Date(experience.endDate), "PPP")}</p>
                    </div>
                    {experience.period && (
                      <div className="flex items-center gap-3">
                          <Timer className="h-4 w-4 text-muted-foreground" />
                          <p><span className="font-semibold">Period:</span> {experience.period}</p>
                      </div>
                    )}
                     <div className="flex items-center gap-3">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Company Website
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                         <a href={experience.gmapUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Work Location
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
