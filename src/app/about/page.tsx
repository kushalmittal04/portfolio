
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educationData } from "@/data/education";
import { ImageDialog } from "@/components/ImageDialog";
import Image from "next/image";
import { Eye } from "lucide-react";
import skillsData from "@/data/skills.json";
import { Badge } from "@/components/ui/badge";
import content from "@/data/pageContent.json";

export default function AboutPage() {
  const { categories } = skillsData;
  const aboutContent = content.about;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {aboutContent.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {aboutContent.description}
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="https://picsum.photos/200/200"
              alt="Kushal Mittal"
              width={200}
              height={200}
              className="rounded-full object-cover"
              data-ai-hint="portrait professional"
            />
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-left text-muted-foreground">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{aboutContent.whoAmI.title}</h3>
              <p>
                {aboutContent.whoAmI.content}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{aboutContent.technicalApproach.title}</h3>
              <p className="mb-4">
                {aboutContent.technicalApproach.intro}
              </p>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: aboutContent.technicalApproach.aiMl }} />
              <p dangerouslySetInnerHTML={{ __html: aboutContent.technicalApproach.fullStack }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{aboutContent.coreStrengths.title}</h3>
              <p className="mb-4">
                {aboutContent.coreStrengths.paragraph1}
              </p>
              <p>
                {aboutContent.coreStrengths.paragraph2}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">{aboutContent.skillsTitle}</h2>
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="grid md:grid-cols-[200px_1fr] gap-4 items-start">
                  <h3 className="font-bold text-lg text-primary">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>


        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">{aboutContent.educationTitle}</h2>
          <div className="space-y-6">
            {educationData.map((edu) => (
              <Card
                key={edu.id}
                className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 grid grid-cols-[100px_1fr_auto] items-center gap-6">
                  <p className="font-bold text-lg text-primary">{edu.degree.split(' ')[0]}</p>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                     <p className="font-semibold mt-1">{edu.score}</p>
                  </div>
                   <div className="flex flex-col items-end gap-2">
                     <p className="text-sm text-muted-foreground">{edu.duration.split(' - ')[1]}</p>
                     <ImageDialog
                      imageUrl={edu.marksheetUrl}
                      alt={`${edu.degree} Marksheet`}
                      dataAiHint={edu.dataAiHint}
                    >
                      <Button variant="ghost" size="sm">
                        <Eye className="mr-2 h-4 w-4" /> View Marksheet
                      </Button>
                    </ImageDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
