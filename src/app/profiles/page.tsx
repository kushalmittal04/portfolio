
import { Card, CardContent } from "@/components/ui/card";
import profilesData from "@/data/profiles.json";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import content from "@/data/pageContent.json";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5 0-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6s0-.4.1-.5c.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.2 0-.3-.1-.4-.1-.1-1.7-4-1.9-4.5-.3-.4-.5-.4-.7-.4h-.6c-.2 0-.5.2-.7.4-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.5.7 3.5 2.6 2 1.8 2.6 2.1 3.1 2.2.5.1.9.1 1.2.1.4 0 .7-.1.9-.3.2-.2.2-.4.1-.6-.1-.1-.2-.2-.4-.3z" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.3 14.5c-.2.1-.5.2-1.1.2-.5 0-1.2-.1-3.6-1.3-2.9-1.5-4.8-4.4-5-4.6-.2-.2-.9-1.1-.9-2.2s.6-1.9.8-2.1c.2-.2.5-.3.7-.3h.7c.2 0 .4.1.6.5.2.4.8 1.9.8 1.9s.1.2.1.4-.1.4-.2.5l-.3.4c-.1.1-.1.2 0 .4 0 .1.1.2.2.3.6.8 1.3 1.5 2.2 2.1.3.2.6.3.8.3.2 0 .4-.1.6-.2.2-.2.5-.6.6-.8.1-.2.3-.2.5-.1l2.1.9c.2.1.4.2.4.3s.1.4.1.5-.2.5-.4.6z" />
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
  const profilesContent = content.profiles;
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {profilesContent.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {profilesContent.description}
          </p>
        </div>

        <div className="space-y-12">
          {profileSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {profilesData
                  .filter((p) => section.platforms.includes(p.platform))
                  .map((profile) => (
                     <Link key={profile.id} href={profile.url} target="_blank" rel="noopener noreferrer" className="group block">
                      <Card className="relative flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-accent">
                        <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        <CardContent className="flex flex-col items-center gap-4 p-0">
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
