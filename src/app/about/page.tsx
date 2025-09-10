
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import educationData from "@/data/education.json";
import { ImageDialog } from "@/components/ImageDialog";
import Image from "next/image";
import { Eye, GraduationCap, MapPin } from "lucide-react";
import skillsData from "@/data/skills.json";
import { Badge } from "@/components/ui/badge";
import content from "@/data/pageContent.json";
import { TechIcon } from "@/components/TechIcon";

export default function AboutPage() {
  const { categories } = skillsData;
  const aboutContent = content.about;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://picsum.photos/400/400"
              alt="Kushal Mittal"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-lg"
              data-ai-hint="portrait professional"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {aboutContent.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {aboutContent.description}
            </p>
             <div className="space-y-6 text-muted-foreground pt-4">
               <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{aboutContent.whoAmI.title}</h3>
                  <p>
                    {aboutContent.whoAmI.content}
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="grid md:grid-cols-2 gap-8 text-muted-foreground">
           <div className="space-y-4 p-6 rounded-lg bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-foreground">{aboutContent.technicalApproach.title}</h3>
              <p>
                {aboutContent.technicalApproach.intro}
              </p>
              <p dangerouslySetInnerHTML={{ __html: aboutContent.technicalApproach.aiMl }} />
              <p dangerouslySetInnerHTML={{ __html: aboutContent.technicalApproach.fullStack }} />
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-foreground">{aboutContent.coreStrengths.title}</h3>
              <p>
                {aboutContent.coreStrengths.paragraph1}
              </p>
              <p>
                {aboutContent.coreStrengths.paragraph2}
              </p>
            </div>
        </section>


        {/* Skills Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{aboutContent.skillsTitle}</h2>
          </div>
          <div className="space-y-8">
            {categories.map((category) => (
              <Card key={category.name} className="shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                 <CardHeader>
                    <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                       <div key={skill} className="flex flex-col items-center gap-2 text-center w-24">
                          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted shadow-sm hover:shadow-md transition-shadow">
                              <TechIcon technology={skill} className="w-9 h-9" />
                          </div>
                          <p className="font-semibold text-sm">{skill}</p>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Education Timeline */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-center">{aboutContent.educationTitle}</h2>
          </div>
          <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
             <div className="space-y-12">
                {educationData.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center ring-8 ring-background">
                       <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                     <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-1/2 px-8">
                         <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                           <CardContent className="p-6 text-center">
                               <p className="text-sm text-muted-foreground">{edu.duration}</p>
                               <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                               <p className="text-muted-foreground">{edu.institution}</p>
                               {edu.university && <p className="text-sm text-muted-foreground">{edu.university}</p>}
                               {edu.location && (
                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{edu.location}</span>
                                </div>
                              )}
                               <p className="font-bold text-lg text-primary mt-2">{edu.score}</p>
                               <ImageDialog
                                imageUrl={edu.marksheetUrl}
                                alt={`${edu.degree} Marksheet`}
                                dataAiHint={edu.dataAiHint}
                              >
                                <Button variant="outline" size="sm" className="mt-4">
                                  <Eye className="mr-2 h-4 w-4" /> View Marksheet
                                </Button>
                              </ImageDialog>
                           </CardContent>
                         </Card>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
