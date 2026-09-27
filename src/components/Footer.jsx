import { navLinks, personalInfo, contactInfo, isConfigured } from "../data/config.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-px flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-muted">{personalInfo.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-200 hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href={`mailto:${contactInfo.email}`} aria-label="Email" className="text-muted transition-colors duration-200 hover:text-ink">
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-200 hover:text-ink"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          {isConfigured(contactInfo.linkedin) && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors duration-200 hover:text-ink"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <p className="container-px pb-8 text-xs text-faint">
        © {year} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
