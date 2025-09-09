import {
  Database,
  Box,
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-4v-2h4v2zm-4-4h-2v-2h2v2zm-2-4H8V5h2v2z" fill="#306998"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-4v-2h4v2zm-4-4h-2v-2h2v2zm-2-4H8V5h2v2z" fill="#FFD43B" transform="rotate(180 12 12)"/>
        <circle cx="8" cy="15" r="1" fill="#fff"/>
        <circle cx="16" cy="9" r="1" fill="#fff"/>
    </svg>
);

const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" fill="#f7df1e" />
    <path d="M4.3 16.5c.3.5.7.9 1.3 1.1.6.2 1.3.2 2 .2s1.3 0 1.9-.2c.6-.2 1.1-.5 1.5-.9.4-.4.7-.9.8-1.5.1-.6.1-1.3.1-2.1V9h3.3v7.4c0 1.1-.1 2.1-.4 2.9-.3.8-.7 1.5-1.3 2.1-.6.6-1.4 1-2.3 1.3s-1.9.4-3 .4-2.1-.1-3-.4-1.7-.8-2.3-1.3-.9-1.3-1.2-2.1-.5-1.8-.5-2.9V9h3.3v7.5c0 .7.1 1.3.2 1.7.1.4.3.7.5.9zM16.5 17.6h3.3V9h-3.3v8.6z" />
  </svg>
);

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" fill="#007acc" />
    <path d="M4.3 16.5c.3.5.7.9 1.3 1.1.6.2 1.3.2 2 .2s1.3 0 1.9-.2c.6-.2 1.1-.5 1.5-.9.4-.4.7-.9.8-1.5.1-.6.1-1.3.1-2.1V9h3.3v7.4c0 1.1-.1 2.1-.4 2.9-.3.8-.7 1.5-1.3 2.1-.6.6-1.4 1-2.3 1.3s-1.9.4-3 .4-2.1-.1-3-.4-1.7-.8-2.3-1.3-.9-1.3-1.2-2.1-.5-1.8-.5-2.9V9h3.3v7.5c0 .7.1 1.3.2 1.7.1.4.3.7.5.9zM16.5 17.6h3.3V9h-3.3v8.6z" fill="white" />
    <text x="14" y="15" fontSize="6px" fontWeight="bold" fill="#007acc">TS</text>
  </svg>
);


const GoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
        <path fill="#00ADD8" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"/>
        <path fill="#fff" d="M35.2 64c0-6.2 2-11.8 5.7-16.1 3-3.4 6.8-5.7 11.2-6.5l-3.3-8.1c-6.8 1.4-12.8 5.3-17.5 11.4-5.9 7.6-9 17.2-9 28.1s3.1 20.5 9 28.1c4.7 6.1 10.7 10 17.5 11.4l3.3-8.1c-4.4-.8-8.2-3-11.2-6.5-3.7-4.3-5.7-9.8-5.7-16zm57.6 0c0 10-4.3 18.5-11.4 24.3-4.8 4.1-10.4 6.4-16.5 6.4h-5.4V33.3h5.4c6.1 0 11.7 2.4 16.5 6.4 7.1 5.8 11.4 14.3 11.4 24.3zm-10.4 0c0-6.1-2.2-10.8-6.1-14.1-3.6-3-8-4.6-12.8-4.6h-1.6v37.3h1.6c4.8 0 9.2-1.5 12.8-4.6-3.9-3.2-6.1-7.9-6.1-14z"/>
    </svg>
);


interface TechIconProps {
  technology: string;
  className?: string;
}

export function TechIcon({ technology, className }: TechIconProps) {
  switch (technology.toLowerCase()) {
    case "react":
      return <ReactIcon className={className} />;
    case "node.js":
      return <NodeJsIcon className={className} />;
    case "python":
      return <PythonIcon className={className} />;
    case "javascript":
      return <JavaScriptIcon className={className} />;
    case "typescript":
      return <TypeScriptIcon className={className} />;
    case "mongodb":
      return <Database className={className} />;
    case "go":
       return <GoIcon className={className} />
    default:
      return <Box className={className} />;
  }
}
