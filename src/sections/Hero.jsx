import profileImg from "../assets/profile.jpg";
import { personalInfo, contactInfo, isConfigured } from "../data/config.js";
import { GithubIcon, LinkedinIcon, ArrowRightIcon } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 sm:pt-16">
      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal as="div">
          <p className="mono-label">// hello, world</p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-3 font-display text-xl text-accent-soft sm:text-2xl">{personalInfo.title}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${personalInfo.name} on GitHub`}
              className="text-muted transition-colors duration-200 hover:text-ink"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            {isConfigured(contactInfo.linkedin) && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${personalInfo.name} on LinkedIn`}
                className="text-muted transition-colors duration-200 hover:text-ink"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal as="div" delay={120} className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="group relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/25 to-accent-violet/10 blur-xl" />
            <img
              src={profileImg}
              alt={`Portrait of ${personalInfo.name}`}
              width={480}
              height={560}
              className="relative aspect-[4/5] w-full rounded-2xl border border-border object-cover"
            />
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
