
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import content from "@/data/pageContent.json";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/credentials", label: "Credentials" },
    { href: "/profiles", label: "Profiles" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { 
    href: "https://github.com/kushalmittal04", 
    label: "GitHub", 
    icon: <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /> 
  },
  { 
    href: "https://linkedin.com/in/kushalmittal04", 
    label: "LinkedIn", 
    icon: <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /> 
  },
  { 
    href: "mailto:kushalmittal2022@gmail.com", 
    label: "Gmail", 
    icon: <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /> 
  },
];


export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Left Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold">KushalMittal.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building without boundaries.
            </p>
          </div>

          {/* Middle Column */}
           <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          {/* Right Column */}
           <div className="space-y-4">
               <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Connect
              </h3>
              <div className="flex justify-center gap-4 md:justify-start">
                  {socialLinks.map(({ href, label, icon }) => (
                     <Link key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                        {icon}
                    </Link>
                  ))}
              </div>
            </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} KushalMittal.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
