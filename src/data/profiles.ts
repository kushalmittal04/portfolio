import type { Profile } from "@/lib/types";

export const profilesData: Profile[] = [
  {
    id: 1,
    platform: "GitHub",
    username: "demo-user",
    url: "https://github.com/demo",
    icon: "Github",
    stats: [
      { label: "Repositories", value: "50+" },
      { label: "Followers", value: "1.2k" },
    ],
  },
  {
    id: 2,
    platform: "LinkedIn",
    username: "demo-user",
    url: "https://linkedin.com/in/demo",
    icon: "Linkedin",
    stats: [
      { label: "Connections", value: "500+" },
      { label: "Profile Views", value: "250/mo" },
    ],
  },
  {
    id: 3,
    platform: "Kaggle",
    username: "demokaggler",
    url: "https://kaggle.com/demo",
    icon: "BarChart3",
    stats: [
      { label: "Competitions", value: "5" },
      { label: "Highest Rank", value: "Top 10%" },
    ],
  },
  {
    id: 4,
    platform: "LeetCode",
    username: "coder-demo",
    url: "https://leetcode.com/demo",
    icon: "Code",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Contest Rating", value: "1800+" },
    ],
  },
  {
    id: 5,
    platform: "Credly",
    username: "demo-credly",
    url: "https://www.credly.com/users/demo",
    icon: "BadgeCheck",
    stats: [
      { label: "Badges", value: "15" },
      { label: "Skills", value: "Cloud, AI" },
    ],
  },
  {
    id: 6,
    platform: "Microsoft Learn",
    username: "demo-learn",
    url: "https://learn.microsoft.com/users/demo",
    icon: "GraduationCap",
    stats: [
      { label: "XP", value: "50,000+" },
      { label: "Trophies", value: "25" },
    ],
  },
];
