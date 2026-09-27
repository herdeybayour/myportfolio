import { useState } from "react";
import { contactInfo, personalInfo, isConfigured } from "../data/config.js";
import { MailIcon, GithubIcon, LinkedinIcon, WhatsappIcon, ArrowRightIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // There's no backend wired up yet, so submitting opens the visitor's own
  // email client with the message pre-filled — nothing is silently sent.
  // Swap this handler for a real API call once a form/email service is connected.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const contactLinks = [
    { label: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: MailIcon, show: true },
    { label: "GitHub", href: contactInfo.github, icon: GithubIcon, show: true },
    { label: "LinkedIn", href: contactInfo.linkedin, icon: LinkedinIcon, show: isConfigured(contactInfo.linkedin) },
    {
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}`,
      icon: WhatsappIcon,
      show: isConfigured(contactInfo.whatsapp),
    },
  ];

  return (
    <section id="contact" className="container-px py-20 sm:py-28">
      <SectionHeading
        index="06"
        title="Contact"
        description={`I'm based in ${personalInfo.location} and open to internships, freelance work and full-time roles.`}
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <ul className="space-y-4">
            {contactLinks
              .filter((link) => link.show)
              .map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted transition-colors duration-200 hover:text-ink"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border">
                      <Icon className="h-5 w-5" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-elevated px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-accent-soft"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-elevated px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-accent-soft"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-md border border-border bg-elevated px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-accent-soft"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
              Send Message
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <p className="text-xs text-faint">
              Opens your email app with this message pre-filled — no data is sent from this page.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
