
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import skillsData from "@/data/skills.json";
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
              src={aboutContent.profilePicUrl}
              alt="Kushal Mittal"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-lg"
              data-ai-hint="portrait professional"
              priority
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
              <p>
                <span className="font-semibold text-foreground/90">{aboutContent.technicalApproach.aiMl.title}</span>
                {aboutContent.technicalApproach.aiMl.content}
              </p>
              <p>
                <span className="font-semibold text-foreground/90">{aboutContent.technicalApproach.fullStack.title}</span>
                {aboutContent.technicalApproach.fullStack.content}
              </p>
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
                    <CardTitle>{category.name}</CardTitle>
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
      </div>
    </div>
  );
}
