import { experience } from "../data/experience.js";
import { BriefcaseIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="container-px py-20 sm:py-28">
      <SectionHeading index="04" title="Experience" />

      <ol className="space-y-6">
        {experience.map((role) => (
          <Reveal key={role.company} as="li">
            <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-elevated text-accent-soft">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{role.company}</h3>
                <p className="mt-1 text-sm text-accent-soft">{role.role}</p>
                <p className="mt-1 text-sm text-faint">{role.location}</p>
                <p className="mt-4 text-muted">{role.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
