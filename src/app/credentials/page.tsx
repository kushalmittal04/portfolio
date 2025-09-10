
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievementsData, certificatesData } from "@/data/credentials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSearch, faCalendarDays, faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import content from "@/data/pageContent.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

export default function CredentialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterIssuer, setFilterIssuer] = useState("All");

  const credentialsContent = content.credentials;

  const certificateTypes = [
    "All",
    ...Array.from(new Set(certificatesData.map((c) => c.type))),
  ];
  const certificateIssuers = [
    "All",
    ...Array.from(new Set(certificatesData.map((c) => c.issuer))),
  ];

  const filteredCertificates = useMemo(() => {
    return certificatesData
      .filter((cert) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const matchesSearch =
          cert.name.toLowerCase().includes(lowercasedSearchTerm) ||
          cert.skills.some((skill) =>
            skill.toLowerCase().includes(lowercasedSearchTerm)
          );
        const matchesType =
          filterType === "All" || cert.type === filterType;
        const matchesIssuer =
          filterIssuer === "All" || cert.issuer === filterIssuer;

        return matchesSearch && matchesType && matchesIssuer;
      })
      .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());
  }, [searchTerm, filterType, filterIssuer]);
  
  const featuredCerts = certificatesData
    .filter(c => c.isFeatured)
    .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
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
          <TabsTrigger value="certificates">
            {credentialsContent.tabs.certificates}
          </TabsTrigger>
          <TabsTrigger value="achievements">
            {credentialsContent.tabs.achievements}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="certificates" className="mt-8">
            {featuredCerts.length > 0 && (
                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">{credentialsContent.featuredCertificates}</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {featuredCerts.map((cert) => (
                           cert.featuredImageUrl && (
                            <Link key={cert.id} href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                <Card className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-[-2deg]">
                                  <div className="relative w-32 h-32">
                                    <Image
                                      src={cert.featuredImageUrl}
                                      alt={`${cert.name} preview`}
                                      fill
                                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                                      className="object-contain"
                                      data-ai-hint="certificate badge"
                                    />
                                  </div>
                                <p className="text-sm font-medium text-muted-foreground">{format(new Date(cert.issueDate), "PPP")}</p>
                                </Card>
                            </Link>
                           )
                        ))}
                    </div>
                </div>
            )}


          <Card>
            <CardHeader>
              <CardTitle>All Certifications</CardTitle>
              <CardDescription>
                Search and filter through all my certifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full md:flex-grow">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or skill..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex w-full md:w-auto flex-col sm:flex-row items-center gap-4 shrink-0">
                    <div className="flex w-full items-center gap-2">
                        <Label htmlFor="type-filter" className="text-sm font-medium shrink-0">Type:</Label>
                        <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger id="type-filter" className="w-full md:w-[180px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            {certificateTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>

                    <div className="flex w-full items-center gap-2">
                        <Label htmlFor="issuer-filter" className="text-sm font-medium shrink-0">Issuer:</Label>
                        <Select value={filterIssuer} onValueChange={setFilterIssuer}>
                        <SelectTrigger id="issuer-filter" className="w-full md:w-[180px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            {certificateIssuers.map((issuer) => (
                            <SelectItem key={issuer} value={issuer}>
                                {issuer}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                </div>
              </div>

               <div className="space-y-4">
                {filteredCertificates.map((cert) => (
                  <Card key={cert.id} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:rotate-[-1deg]">
                    <div className="p-4 grid grid-cols-[1fr_auto] items-start gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <div className="text-sm text-muted-foreground mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                          <div className="flex items-center gap-2">
                             <FontAwesomeIcon icon={faAward} className="h-4 w-4"/>
                             <span>{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-4"/>
                            <span>{format(new Date(cert.issueDate), "PPP")}</span>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="shrink-0">
                        <Link href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faEye} className="mr-2 h-4 w-4" /> View
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>


              {filteredCertificates.length === 0 && (
                <div className="p-8 text-center text-muted-foreground border rounded-md mt-4">
                    No certifications found. Try adjusting your search or filters.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievementsData.map((achievement) => (
              <Card key={achievement.id} className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                 <div className="absolute top-0 right-0 m-4 rounded-full bg-primary/10 p-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-110">
                    <FontAwesomeIcon icon={achievement.icon === 'Award' ? faAward : faStar} className="h-8 w-8 text-primary" />
                  </div>
                <CardHeader>
                  <CardTitle className="text-xl pr-12">{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
                <CardFooter>
                    {achievement.imageUrl && (
                         <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={achievement.imageUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEye} className="mr-2 h-4 w-4" /> View Proof
                            </Link>
                        </Button>
                    )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
