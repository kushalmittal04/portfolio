import type { Achievement, Certificate } from "@/lib/types";
import achievements from "./achievements.json";
import certificates from "./certificates.json";

export const achievementsData: Achievement[] = achievements;
export const certificatesRawData = certificates;
export const certificatesData: Certificate[] = certificates.map(cert => ({
    ...cert,
    dataAiHint: "certificate document" // Add default data-ai-hint if missing
}));
