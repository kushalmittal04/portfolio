
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

export default function AboutPage() {
  const { categories } = skillsData;

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
              alt="Kushal Mittal"
              width={200}
              height={200}
              className="rounded-full object-cover"
              data-ai-hint="portrait professional"
            />
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-left text-muted-foreground">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Who I Am</h3>
              <p>
                I am Kushal Mittal, a final-year B.Tech student specializing in Artificial Intelligence and Data Science. I describe myself as a Stackless Engineer—a problem-solver first and a technologist second. My focus isn&apos;t on any single framework but on selecting the best tools for the task, whether that&apos;s building a predictive model or a full-stack application.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">My Technical Approach</h3>
              <p className="mb-4">
                My work is driven by a deep curiosity for how things work and a commitment to building robust, efficient systems.
              </p>
              <p className="mb-4">
                In <span className="font-semibold text-foreground/90">AI/ML</span>, I specialize in building practical applications using large language models. I have hands-on experience with the LLM stack—including LangChain and LangGraph—for building context-aware agents, and I&apos;m proficient in the entire data science pipeline: from data preprocessing and exploratory data analysis (EDA) to feature engineering and deploying supervised learning models for regression and classification tasks.
              </p>
              <p>
                In <span className="font-semibold text-foreground/90">Full-Stack Development</span>, I build seamless, end-to-end experiences. I develop RESTful APIs with Node.js and Express, create responsive frontends with React and Next.js, and manage data with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. I prioritize security and performance, implementing auth solutions like JWT and Clerk Authentication.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">My Core Strengths</h3>
              <p className="mb-4">
                Beyond technical skills, I bring a strong foundation in analytical reasoning and critical thinking to every project. I am a proactive team collaborator who values clear communication and thrives in agile environments. My ability to quickly adapt to new technologies and manage my time effectively allows me to take ideas from concept to deployment efficiently.
              </p>
              <p>
                I am actively seeking opportunities where I can apply my diverse skill set to create impactful solutions and continue growing as an engineer.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
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
