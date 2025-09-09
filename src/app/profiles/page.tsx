
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import profilesData from "@/data/profiles.json";
import * as Icons from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

type IconName = keyof typeof Icons;
const LucideIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  if (name === "WhatsApp") {
    return <WhatsAppIcon className={className} />;
  }
  const Icon = Icons[name as IconName] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return null;
  return <Icon className={className} />;
};

const profileSections = [
  {
    title: "Social & Contact",
    platforms: ["LinkedIn", "WhatsApp", "Gmail"],
  },
  {
    title: "Development & AI",
    platforms: ["GitHub", "Kaggle", "Portfolio"],
  },
  {
    title: "Certifications & Learning",
    platforms: [
      "Microsoft Learn",
      "Google Cloud Skills Boost",
      "Google for Developers",
      "Credly",
    ],
  },
  {
    title: "Competitive Programming",
    platforms: ["LeetCode", "HackerRank", "GeeksforGeeks"],
  },
];

export default function ProfilesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Online Profiles
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find me across the web on these platforms.
          </p>
        </div>

        <div className="space-y-12">
          {profileSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {profilesData
                  .filter((p) => section.platforms.includes(p.platform))
                  .map((profile) => (
                     <Link key={profile.id} href={profile.url} target="_blank" rel="noopener noreferrer" className="group block">
                      <Card className="relative flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-accent">
                        <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        <CardContent className="flex flex-col items-center gap-4">
                           <LucideIcon
                            name={profile.icon}
                            className="h-16 w-16 text-primary"
                          />
                          <div>
                            <p className="text-xl font-bold">{profile.platform}</p>
                            <p className="text-sm text-muted-foreground">
                              @{profile.username}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
