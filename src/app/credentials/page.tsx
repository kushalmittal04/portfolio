import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { credentialsData } from "@/data/credentials";
import { ImageDialog } from "@/components/ImageDialog";
import { Badge } from "@/components/ui/badge";

export default function CredentialsPage() {
  const { achievements, certificates } = credentialsData;
  const featuredCerts = certificates.filter((c) => c.isFeatured);
  const otherCerts = certificates.filter((c) => !c.isFeatured);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Credentials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of my professional achievements and certifications.
        </p>
      </div>

      <Tabs defaultValue="certificates" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="certificates">Certifications</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="certificates" className="mt-8">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Featured Certificates</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCerts.map((cert) => (
                  <ImageDialog
                    key={cert.id}
                    imageUrl={cert.imageUrl}
                    alt={cert.name}
                    dataAiHint={cert.dataAiHint}
                  >
                    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative aspect-video">
                        <Image
                          src={cert.imageUrl}
                          alt={cert.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          data-ai-hint={cert.dataAiHint}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                      </CardHeader>
                    </Card>
                  </ImageDialog>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Other Certificates</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {otherCerts.map((cert) => (
                  <ImageDialog
                    key={cert.id}
                    imageUrl={cert.imageUrl}
                    alt={cert.name}
                    dataAiHint={cert.dataAiHint}
                  >
                    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                       <div className="relative aspect-video">
                        <Image
                          src={cert.imageUrl}
                          alt={cert.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          data-ai-hint={cert.dataAiHint}
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{cert.name}</CardTitle>
                      </CardHeader>
                    </Card>
                  </ImageDialog>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="achievements" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="flex flex-col sm:flex-row overflow-hidden">
                <div className="sm:w-1/3">
                  <ImageDialog
                    imageUrl={achievement.imageUrl}
                    alt={achievement.name}
                    dataAiHint={achievement.dataAiHint}
                  >
                    <div className="relative aspect-video sm:aspect-square h-full cursor-pointer">
                       <Image
                        src={achievement.imageUrl}
                        alt={achievement.name}
                        fill
                        className="object-cover"
                        data-ai-hint={achievement.dataAiHint}
                      />
                    </div>
                  </ImageDialog>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle>{achievement.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
