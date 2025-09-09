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

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

// A bit of a hack to dynamically render Lucide icons by name
type IconName = keyof typeof Icons;
const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  if (name === 'WhatsApp') {
    return <WhatsAppIcon className={className} />;
  }
  const Icon = Icons[name as IconName] as React.ComponentType<{ className?: string }>;
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
                           <LucideIcon name={profile.icon} className="h-10 w-10 text-primary"/>
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
