import { skillGroups } from "../data/skills.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="container-px py-20 sm:py-28">
      <SectionHeading index="02" title="Skills" description="Technologies I use to build and ship web applications." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="card h-full border-l-2 border-l-accent p-6">
              <h3 className="font-display text-base font-semibold text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-elevated px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
