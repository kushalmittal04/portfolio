import type { Profile } from "@/lib/types";

export const profilesData: Profile[] = [
  {
    id: 1,
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
    id: 2,
    platform: "WhatsApp",
    username: "Message Me",
    url: "https://wa.me/7317594114",
    icon: "MessageCircle",
    stats: [
        { label: "Availability", value: "Online" },
        { label: "Response Time", value: "Within 24h" },
    ],
  },
  {
    id: 3,
    platform: "Gmail",
    username: "demo@example.com",
    url: "mailto:demo@example.com",
    icon: "Mail",
     stats: [
        { label: "Inbox Status", value: "Monitored Daily" },
        { label: "Response Time", value: "1-2 Business Days" },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
  {
    id: 7,
    platform: "Cloud Skills Boost",
    username: "demo-cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/demo",
    icon: "Cloud",
    stats: [
        { label: "Quests Completed", value: "20+" },
        { label: "Badges Earned", value: "30+" },
    ],
  },
  {
    id: 8,
    platform: "Google for Developers",
    username: "dev-demo",
    url: "https://g.dev/demo",
    icon: "CodeXml",
    stats: [
        { label: "Contributions", value: "Active" },
        { label: "Joined", value: "2023" },
    ],
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
    platform: "HackerRank",
    username: "hacker-demo",
    url: "https://www.hackerrank.com/profile/demo",
    icon: "Terminal",
    stats: [
        { label: "Stars", value: "5" },
        { label: "Skills", value: "Java, Python" },
    ],
  },
  {
    id: 12,
    platform: "GeeksforGeeks",
    username: "gfg-demo",
    url: "https://auth.geeksforgeeks.org/user/demo",
    icon: "Laptop",
    stats: [
        { label: "Coding Score", value: "1500+" },
        { label: "Problems Solved", value: "300+" },
    ],
  },
];
