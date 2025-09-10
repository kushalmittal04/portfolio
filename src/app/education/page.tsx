
import educationData from "@/data/education.json";
import { ImageDialog } from "@/components/ImageDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGraduationCap, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import content from "@/data/pageContent.json";

export default function EducationPage() {
  const educationContent = content.education;
  const sortedEducation = [...educationData].sort((a, b) => b.id - a.id);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {educationContent.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {educationContent.description}
        </p>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
        <div className="space-y-12">
          {sortedEducation.map((edu, index) => (
            <div key={edu.id} className="relative pl-12 md:pl-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center ring-8 ring-background md:left-1/2">
                <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5 text-primary-foreground" />
              </div>
              <div
                className={`w-full flex md:justify-start ${
                  index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        {edu.duration}
                      </p>
                      <h3 className="text-xl font-semibold mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-sm text-muted-foreground">
                          {edu.university}
                        </p>
                      )}
                      {edu.location && (
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      <p className="font-bold text-lg text-primary mt-2">
                        {edu.score}
                      </p>
                      <ImageDialog
                        imageUrl={edu.marksheetUrl}
                        alt={`${edu.degree} Marksheet`}
                        dataAiHint={edu.dataAiHint}
                      >
                        <Button variant="outline" size="sm" className="mt-4">
                          <FontAwesomeIcon icon={faEye} className="mr-2 h-4 w-4" /> View Marksheet
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
    </div>
  );
}
