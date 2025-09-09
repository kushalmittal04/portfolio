import {
  Atom,
  Database,
  FileCode2,
  Box,
} from "lucide-react";
import type { SVGProps } from "react";

const NodeJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6.5 7.5L12 13v6.5l-6.5-3.25v-6.5L12 11V4.5l6.5 3.25v6.5z" />
  </svg>
);

const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M14.5 14.25h-5v-3h5V8h3v3.25h-3v3zm-5-3.75h-3V8h3v2.5zm1.5-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
    <path d="M12 5.5a.75.75 0 100-1.5.75.75 0 000 1.5zm0 14a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 3h18v18H3V3zm15 15V6H6v12h12zm-9-9h2.5v6H9v-3.5h2v-1H9V9zm4.5 0h2.5v6h-2.5V9z" />
  </svg>
);

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 3h18v18H3V3zm15 15V6H6v12h12zm-9-9h2.5v6H9v-3.5h2v-1H9V9zm4.5 0h2.5v6h-2.5V9z" />
    <text x="14" y="15" fontSize="6px" fontWeight="bold">TS</text>
  </svg>
);


interface TechIconProps {
  technology: string;
  className?: string;
}

export function TechIcon({ technology, className }: TechIconProps) {
  switch (technology.toLowerCase()) {
    case "react":
      return <Atom className={className} />;
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
       return <FileCode2 className={className} />
    default:
      return <Box className={className} />;
  }
}
