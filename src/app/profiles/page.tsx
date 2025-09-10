
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profilesData from "@/data/profiles.json";
import Link from "next/link";
import content from "@/data/pageContent.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub, faKaggle, faMicrosoft, faGoogle, faCredly, faLeetcode, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faCode, faTerminal, faLaptop, faGraduationCap, faCloud, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  LinkedIn: faLinkedin,
  WhatsApp: faWhatsapp,
  Gmail: faEnvelope,
  GitHub: faGithub,
  Kaggle: faKaggle,
  Portfolio: faGlobe,
  "Microsoft Learn": faMicrosoft,
  "Google Cloud Skills Boost": faCloud,
  "Google for Developers": faGoogle,
  Credly: faCheckCircle,
  LeetCode: faCode,
  HackerRank: faTerminal,
  GeeksforGeeks: faLaptop,
};


const LucideIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const icon = iconMap[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
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
                    <div key={profile.id} className="group block h-48 [perspective:1000px]">
                      <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front of Card */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                           <Card className="flex h-full w-full flex-col items-center justify-center p-6 text-center transition-shadow hover:shadow-xl">
                            <Link href={profile.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 h-full w-full">
                                <LucideIcon
                                    name={profile.platform}
                                    className="h-16 w-16 text-primary"
                                />
                                <div>
                                    <p className="text-xl font-bold">{profile.platform}</p>
                                    <p className="text-sm text-muted-foreground">
                                    @{profile.username}
                                    </p>
                                </div>
                            </Link>
                           </Card>
                        </div>

                        {/* Back of Card */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <Card className="flex h-full w-full flex-col items-center justify-center bg-muted p-6">
                            <Link href={profile.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 text-center h-full w-full">
                                <CardHeader className="p-0">
                                    <CardTitle className="text-lg font-bold text-foreground">{profile.platform} Stats</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 space-y-2 text-sm">
                                    {profile.stats.map(stat => (
                                        <div key={stat.label}>
                                            <p className="font-semibold">{stat.value}</p>
                                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Link>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
