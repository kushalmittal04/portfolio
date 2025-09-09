import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import profilesData from "@/data/profiles.json";
import * as Icons from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// A bit of a hack to dynamically render Lucide icons by name
type IconName = keyof typeof Icons;
const LucideIcon = ({ name, className }: { name: IconName; className?: string }) => {
  const Icon = Icons[name] as React.ComponentType<{ className?: string }>;
  if (!Icon) return null;
  return <Icon className={className} />;
};

const profileSections = [
    {
        title: "Social & Contact",
        platforms: ["LinkedIn", "WhatsApp", "Gmail"]
    },
    {
        title: "Development & AI",
        platforms: ["GitHub", "Kaggle", "Portfolio"]
    },
    {
        title: "Certifications & Learning",
        platforms: ["Microsoft Learn", "Google Cloud Skills Boost", "Google for Developers", "Credly"]
    },
    {
        title: "Competitive Programming",
        platforms: ["LeetCode", "HackerRank", "GeeksforGeeks"]
    },
]


export default function ProfilesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Online Profiles
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find me across the web on these platforms.
        </p>
      </div>

      <div className="space-y-12">
        {profileSections.map(section => (
            <div key={section.title}>
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{section.title}</h2>
                 <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {profilesData
                        .filter(p => section.platforms.includes(p.platform))
                        .map((profile) => (
                      <Card key={profile.id} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4">
                           <LucideIcon name={profile.icon as IconName} className="h-10 w-10 text-primary"/>
                           <div>
                            <CardTitle>{profile.platform}</CardTitle>
                            <CardDescription>@{profile.username}</CardDescription>
                           </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="space-y-2">
                                {profile.stats.map(stat => (
                                    <div key={stat.label} className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">{stat.label}</span>
                                        <span className="font-medium">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full">
                            <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                              View Profile
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
            </div>
        ))}
      </div>
    </div>
  );
}
