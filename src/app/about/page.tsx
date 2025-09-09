import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { educationData } from "@/data/education";
import { ImageDialog } from "@/components/ImageDialog";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            My educational journey and background
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="https://picsum.photos/200/200"
              alt="John Doe"
              width={200}
              height={200}
              className="rounded-full object-cover"
              data-ai-hint="portrait professional"
            />
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate full-stack developer with a strong
              foundation in computer science and a keen interest in artificial
              intelligence and machine learning. My journey in technology began
              during my undergraduate studies, where I discovered my love for
              creating innovative solutions to complex problems.
            </p>
            <p>
              Throughout my academic career, I&apos;ve maintained a strong focus
              on both theoretical knowledge and practical application. I
              believe in continuous learning and staying updated with the latest
              technologies and industry trends.
            </p>
            <p>
              When I&apos;m not coding, you can find me contributing to
              open-source projects, participating in hackathons, or exploring
              new technologies. I&apos;m always excited to take on new
              challenges and collaborate with like-minded individuals.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Education Timeline</h2>
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
