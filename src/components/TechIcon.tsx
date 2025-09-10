
import {
  Database,
  Code,
  Cpu,
  Server,
  Sparkles,
  Cloud,
  Terminal,
  MousePointer,
  FileCode,
  BrainCircuit,
  Component,
  GitMerge,
  Book,
  CodeXml,
  PencilRuler,
  Wind,
} from "lucide-react";

interface TechIconProps {
  technology: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  // Languages
  python: Code,
  javascript: Code,
  c: Code,
  "c++": Code,
  php: Code,
  html: CodeXml,
  css: PencilRuler,
  sql: Database,

  // AI/ML
  langchain: BrainCircuit,
  langgraph: BrainCircuit,
  "scikit-learn": Sparkles,
  pandas: Book,
  numpy: Book,
  matplotlib: BrainCircuit,
  seaborn: BrainCircuit,
  tensorflow: Cpu,
  opencv: MousePointer,
  pyspark: Sparkles,

  // Frontend & Web
  react: Component,
  "next.js": Component,
  "node.js": Server,
  "express.js": Server,
  bootstrap: PencilRuler,
  "tailwind css": Wind,

  // Databases
  mysql: Database,
  mongodb: Database,
  postgresql: Database,

  // Tools
  git: GitMerge,
  "vs code": Terminal,
  pycharm: Terminal,
  "jupyter notebook": Book,
  postman: Terminal,
  vercel: Cloud,
  kaggle: BrainCircuit,
  "google colab": Terminal,
  databricks: Cloud,
  "clerk authentication": Terminal,
  "firebase studio": Sparkles,
  notebooklm: Book,
  replit: Terminal,
};


export function TechIcon({ technology, className }: TechIconProps) {
  const IconComponent = iconMap[technology.toLowerCase()] || FileCode;
  return <IconComponent className={className} />;
}
