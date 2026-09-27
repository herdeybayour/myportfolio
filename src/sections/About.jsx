import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="container-px py-20 sm:py-28">
      <SectionHeading index="01" title="About" />

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <p className="text-lg leading-relaxed text-ink">
            I'm a Computer Science graduate from Kwara State University, Malete, where I finished with a
            Second Class Upper. Along the way I got comfortable working across the stack — building
            interfaces with React and Tailwind CSS, and the APIs and databases behind them with
            ASP.NET Core and MySQL.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            During my NYSC service year at Nupat Technologies in Lagos, I learned and worked on
            full-stack web development, which is where I started turning what I'd studied into real,
            working applications. My biggest project so far, DigitCare Specialist Hospital, grew out of
            that — a hospital management system with separate workflows for admins, doctors, nurses,
            receptionists, pharmacists and lab staff. I like building things that are actually useful to
            the people who have to use them every day.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
