import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educationData } from "@/data/education";
import { ImageDialog } from "@/components/ImageDialog";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Educational Journey
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of my academic achievements and qualifications.
          </p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                    <CardDescription className="text-base">
                      {edu.degree}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.duration}</p>
                    <p className="font-semibold">{edu.score}</p>
                  </CardContent>
                  <CardFooter>
                    <ImageDialog
                      imageUrl={edu.marksheetUrl}
                      alt={`${edu.degree} Marksheet`}
                      dataAiHint={edu.dataAiHint}
                    >
                      <Button variant="secondary">View Marksheet</Button>
                    </ImageDialog>
                  </CardFooter>
                </Card>
              </div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-8 ring-background"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
