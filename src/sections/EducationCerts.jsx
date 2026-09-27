import { education, certifications } from "../data/experience.js";
import { GraduationCapIcon, AwardIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

export default function EducationCerts() {
  return (
    <section id="education" className="container-px py-20 sm:py-28">
      <SectionHeading index="05" title="Education" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="card flex h-full gap-4 p-6 sm:p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-elevated text-accent-soft">
              <GraduationCapIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{education.school}</h3>
              <p className="mt-1 text-sm text-accent-soft">{education.degree}</p>
              <p className="mt-3 text-sm text-muted">
                {education.grade} &middot; {education.year}
              </p>
            </div>
          </div>
        </Reveal>

        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={(i + 1) * 80}>
            <div className="card flex h-full gap-4 p-6 sm:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-elevated text-accent-soft">
                <AwardIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{cert.name}</h3>
                <p className="mt-1 text-sm text-accent-soft">{cert.institution}</p>
                <p className="mt-3 text-sm text-muted">{cert.year}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
