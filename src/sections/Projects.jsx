import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="container-px py-20 sm:py-28">
      <SectionHeading
        index="03"
        title="Projects"
        description="Real applications I've built end to end, from database to interface."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100} className={project.featured ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
