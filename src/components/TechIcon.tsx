
import {
  Database,
  Box,
  FileCode,
} from "lucide-react";
import type { SVGProps } from "react";


const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

const NodeJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.998 2.003L2.421 7.25v10.496l9.577 5.247 9.577-5.247V7.25L11.998 2.003zM9.366 18.455V9.474l-2.895 1.587v5.807l2.895 1.587zm2.146.002V9.476l7.065-3.82v3.894l-4.57 2.473v4.84l4.57 2.544V16.3l-1.928-1.07v-1.74l-2.639 1.455v3.49zm.98-12.28l4.57 2.473-2.015 1.117-4.57-2.545z" />
  </svg>
);

const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
        <path fill="#3776AB" d="M14.25 21.5H16.5V14.75H21.5V12.5H16.5V9.5C16.5 8.12 17.62 7 19 7H21.5V4.75H19C15.96 4.75 14.25 6.46 14.25 9.5V12.5H12V4.75H9.75V12.5H4.75V14.75H9.75V17.5C9.75 18.88 8.63 20 7.25 20H4.75V22.25H7.25C10.29 22.25 12 20.54 12 17.5V14.75H14.25V21.5Z" />
        <path fill="#FFD43B" d="M9.75 2.5H7.5V9.25H2.5V11.5H7.5V14.5C7.5 15.88 6.38 17 5 17H2.5V19.25H5C8.04 19.25 9.75 17.54 9.75 14.5V11.5H12V19.25H14.25V11.5H19.25V9.25H14.25V6.5C14.25 5.12 15.37 4 16.75 4H19.25V1.75H16.75C13.71 1.75 12 3.46 12 6.5V9.25H9.75V2.5Z" />
        <path d="M15.25 18C15.25 18.69 14.69 19.25 14 19.25C13.31 19.25 12.75 18.69 12.75 18C12.75 17.31 13.31 16.75 14 16.75C14.69 16.75 15.25 17.31 15.25 18Z" fill="#fff" />
        <path d="M8.25 6C8.25 6.69 7.69 7.25 7 7.25C6.31 7.25 5.75 6.69 5.75 6C5.75 5.31 6.31 4.75 7 4.75C7.69 4.75 8.25 5.31 8.25 6Z" fill="#fff" />
    </svg>
);

const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" fill="#F7DF1E" />
    <path d="M4.3 16.5c.3.5.7.9 1.3 1.1.6.2 1.3.2 2 .2s1.3 0 1.9-.2c.6-.2 1.1-.5 1.5-.9.4-.4.7-.9.8-1.5.1-.6.1-1.3.1-2.1V9h3.3v7.4c0 1.1-.1 2.1-.4 2.9-.3.8-.7 1.5-1.3 2.1-.6.6-1.4 1-2.3 1.3s-1.9.4-3 .4-2.1-.1-3-.4-1.7-.8-2.3-1.3-.9-1.3-1.2-2.1-.5-1.8-.5-2.9V9h3.3v7.5c0 .7.1 1.3.2 1.7.1.4.3.7.5.9zM16.5 17.6h3.3V9h-3.3v8.6z" />
  </svg>
);

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <rect width="24" height="24" fill="#3178C6" />
        <path d="M4.3 16.5c.3.5.7.9 1.3 1.1.6.2 1.3.2 2 .2s1.3 0 1.9-.2c.6-.2 1.1-.5 1.5-.9.4-.4.7-.9.8-1.5.1-.6.1-1.3.1-2.1V9h3.3v7.4c0 1.1-.1 2.1-.4 2.9-.3.8-.7 1.5-1.3 2.1-.6.6-1.4 1-2.3 1.3s-1.9.4-3 .4-2.1-.1-3-.4-1.7-.8-2.3-1.3-.9-1.3-1.2-2.1-.5-1.8-.5-2.9V9h3.3v7.5c0 .7.1 1.3.2 1.7.1.4.3.7.5.9z" fill="white" />
        <path d="M16.5 17.6h3.3V9h-3.3v8.6z" fill="white" />
    </svg>
);


const GoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
        <path fill="#00ADD8" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"/>
        <path fill="#fff" d="M35.2 64c0-6.2 2-11.8 5.7-16.1 3-3.4 6.8-5.7 11.2-6.5l-3.3-8.1c-6.8 1.4-12.8 5.3-17.5 11.4-5.9 7.6-9 17.2-9 28.1s3.1 20.5 9 28.1c4.7 6.1 10.7 10 17.5 11.4l3.3-8.1c-4.4-.8-8.2-3-11.2-6.5-3.7-4.3-5.7-9.8-5.7-16zm57.6 0c0 10-4.3 18.5-11.4 24.3-4.8 4.1-10.4 6.4-16.5 6.4h-5.4V33.3h5.4c6.1 0 11.7 2.4 16.5 6.4 7.1 5.8 11.4 14.3 11.4 24.3zm-10.4 0c0-6.1-2.2-10.8-6.1-14.1-3.6-3-8-4.6-12.8-4.6h-1.6v37.3h1.6c4.8 0 9.2-1.5 12.8-4.6-3.9-3.2-6.1-7.9-6.1-14z"/>
    </svg>
);

const LangchainIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M16.15 15.28H18.4l-4.52-4.53l4.52-4.52H16.15l-4.52 4.52l-1.9-1.9H7.48l3.17 3.18l-3.17 3.17H9.73l1.9-1.9zM5.6 13.38V9.17h.85l1.8 1.8l-1.8 1.81h-.85zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);

const LanggraphIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.24 14.76L12 12.5l-4.24 2.26l.81-4.72l-3.43-3.34l4.74-.68L12 4l2.12 4.28l4.74.68l-3.43 3.34l.81 4.72z"/>
  </svg>
);

const CppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="#00599C" d="M12 2L1 9l11 7 11-7L12 2zm0 1.62L20.56 9 12 14.38 3.44 9 12 3.62z"/>
        <path fill="#00599C" d="M12 10.5l-11 7v3l11 7 11-7v-3l-11-7zm0 1.62l8.56 5.38L12 22.88l-8.56-5.38L12 12.12z"/>
    </svg>
);

interface TechIconProps {
  technology: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  react: ReactIcon,
  "react.js": ReactIcon,
  "next.js": ReactIcon,
  "node.js": NodeJsIcon,
  python: PythonIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  mongodb: Database,
  go: GoIcon,
  langchain: LangchainIcon,
  langgraph: LanggraphIcon,
  "c++": CppIcon,
  tensorflow: Box,
  "scikit-learn": Box,
  pandas: Box,
  numpy: Box,
  pyspark: Box,
};

export function TechIcon({ technology, className }: TechIconProps) {
  const IconComponent = iconMap[technology.toLowerCase()] || FileCode;
  return <IconComponent className={className} />;
}
