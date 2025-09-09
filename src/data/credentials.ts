import type { CredentialData } from "@/lib/types";

export const credentialsData: CredentialData = {
  achievements: [
    {
      id: 1,
      name: "GATE 2025 CS",
      description:
        "Qualified the Graduate Aptitude Test in Engineering for Computer Science with a top rank.",
      imageUrl: "https://picsum.photos/600/400",
      dataAiHint: "award trophy",
      isFeatured: true,
    },
    {
      id: 2,
      name: "First Position in Blind Coding",
      description:
        "Secured the first place in a university-level blind coding competition, demonstrating strong problem-solving skills under pressure.",
      imageUrl: "https://picsum.photos/600/400",
      dataAiHint: "code competition",
      isFeatured: true,
    },
  ],
  certificates: [
    {
      id: 1,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      imageUrl: "https://picsum.photos/800/600",
      dataAiHint: "certificate document",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Google Cloud Certified: Associate Cloud Engineer",
      issuer: "Google",
      imageUrl: "https://picsum.photos/800/600",
      dataAiHint: "certificate document",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Advanced React",
      issuer: "LinkedIn Learning",
      imageUrl: "https://picsum.photos/800/600",
      dataAiHint: "certificate document",
      isFeatured: false,
    },
    {
      id: 4,
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      imageUrl: "https://picsum.photos/800/600",
      dataAiHint: "certificate document",
      isFeatured: false,
    },
    {
      id: 5,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      imageUrl: "https://picsum.photos/800/600",
      dataAiHint: "certificate document",
      isFeatured: false,
    },
  ],
};
