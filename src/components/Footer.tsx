import Link from "next/link";
import { Github, Linkedin, Mail, Mountain } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Web Development",
  "AI/ML Solutions",
  "Consulting",
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.33.06.51s-.33.39-.58.45c-.25.06-.58.05-.92-.04-.33-.09-.73-.24-1.16-.45-.44-.21-.83-.48-1.18-.79-.34-.31-.62-.65-.83-1.01-.21-.36-.31-.72-.31-1.08 0-.36.09-.68.28-.93.19-.25.43-.37.72-.37.29 0 .53.12.72.37.19.25.28.54.28.87 0 .09-.01.19-.02.28-.01.09-.02.17-.04.25-.02.08-.04.15-.06.21-.02.06-.05.13-.08.21l-.1.21c-.02.03-.04.06-.05.08l-.12.26c-.05.11-.1.2-.14.28l-.07.12c-.01.02-.02.04-.02.05s0 .01 0 .01zm2.37-3.23c0-1.45-.5-2.72-1.49-3.82-1-1.1-2.2-1.65-3.63-1.65-1.43 0-2.67.55-3.73 1.65-1.06 1.1-1.59 2.37-1.59 3.82 0 1.25.38 2.45 1.13 3.59l.49.74-1.03 3.33 3.44-1.01.71.45c1.11.71 2.28 1.06 3.51 1.06h.13c1.43 0 2.67-.55 3.73-1.65 1.06-1.1 1.59-2.37 1.59-3.82zm-4.99 7.39c-2.88 0-5.45-1.16-7.3-3.48l-.24-.39-.52 1.68-1.78.53.55-1.78.4-1.25-.4-.49c-.83-1.13-1.25-2.4-1.25-3.8 0-1.92.7-3.57 2.09-4.96C6.01 2.71 7.66 2 9.38 2c1.72 0 3.24.71 4.55 2.13 1.31 1.42 1.97 3.09 1.97 5.01 0 1.95-.73 3.63-2.18 5.04-1.45 1.41-3.15 2.11-5.09 2.11z" />
  </svg>
);


export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">FolioForge</span>
            </Link>
            <p className="text-muted-foreground">
              Stackless Engineer <br /> Building without boundaries.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/demo"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link
                href="https://linkedin.com/in/demo"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link
                href="mailto:demo@example.com"
                aria-label="Gmail"
              >
                <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
               <Link
                href="https://wa.me/7317594114"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FolioForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
