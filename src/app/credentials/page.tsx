
import Image from "next/image";
import Link from "next/link";
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
import { achievementsData, certificatesData } from "@/data/credentials";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";
import content from "@/data/pageContent.json";

export default function CredentialsPage() {
  const featuredCerts = certificatesData.filter((c) => c.isFeatured);
  const otherCerts = certificatesData.filter((c) => !c.isFeatured);
  const credentialsContent = content.credentials;

  const renderCertificateCard = (cert: (typeof certificatesData)[0]) => {
    const isPdf = cert.imageUrl.endsWith(".pdf");

    if (isPdf) {
      return (
         <Link href={cert.imageUrl} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                  <FileText className="w-16 h-16 text-muted-foreground" />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
               <CardContent>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> View PDF
                </Button>
              </CardContent>
            </Card>
        </Link>
      );
    }
    
    return (
        <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
          <div className="relative aspect-video">
            <Image
              src={cert.imageUrl}
              alt={cert.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              data-ai-hint={cert.dataAiHint}
            />
          </div>
          <CardHeader className="flex-grow">
            <CardTitle className="text-lg">{cert.name}</CardTitle>
            <CardDescription>{cert.issuer}</CardDescription>
          </CardHeader>
        </Card>
    )
  }


  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {credentialsContent.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {credentialsContent.description}
        </p>
      </div>

      <Tabs defaultValue="certificates" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="certificates">{credentialsContent.tabs.certificates}</TabsTrigger>
          <TabsTrigger value="achievements">{credentialsContent.tabs.achievements}</TabsTrigger>
        </TabsList>
        <TabsContent value="certificates" className="mt-8">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">{credentialsContent.featuredCertificates}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCerts.map((cert) => (
                  <div key={cert.id}>{renderCertificateCard(cert)}</div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">{credentialsContent.otherCertificates}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {otherCerts.map((cert) => (
                   <div key={cert.id}>{renderCertificateCard(cert)}</div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="achievements" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {achievementsData.map((achievement) => (
              <Card key={achievement.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
                <CardContent>
                    <Button asChild variant="outline" size="sm">
                       <Link href={achievement.imageUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" /> View Document
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
