
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Eye, Search, FileText } from "lucide-react";
import content from "@/data/pageContent.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          cert.issuer.toLowerCase().includes(lowercasedSearchTerm) ||
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
  
  const featuredCerts = certificatesData.filter(c => c.isFeatured);

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
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredCerts.map((cert) => (
                           <Link key={cert.id} href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="flex flex-col items-center justify-center bg-muted p-6">
                                    <FileText className="h-12 w-12 text-muted-foreground" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                                    <CardDescription>{cert.issuer} &middot; {format(new Date(cert.issueDate), "PPP")}</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <Button variant="outline" className="w-full">
                                    <Eye className="mr-2 h-4 w-4" /> View Document
                                    </Button>
                                </CardContent>
                                </Card>
                            </Link>
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
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="relative sm:col-span-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search certifications..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {certificateTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterIssuer} onValueChange={setFilterIssuer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Issuer" />
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

              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden sm:table-cell">Issuer</TableHead>
                      <TableHead className="hidden md:table-cell">Skills</TableHead>
                      <TableHead className="hidden sm:table-cell text-right">Date</TableHead>
                      <TableHead className="text-right">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCertificates.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.name}</TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground">{cert.issuer}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                                <Badge variant="outline">+{cert.skills.length - 3}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-right text-muted-foreground">
                          {format(new Date(cert.issueDate), "PPP")}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild variant="ghost" size="sm">
                            <Link href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                 {filteredCertificates.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground">
                        No certifications found.
                    </div>
                )}
              </div>
            </CardContent>
          </Card>
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
                    <Link
                      href={achievement.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
