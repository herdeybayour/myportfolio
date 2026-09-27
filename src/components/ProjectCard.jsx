import { useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  const {
    name,
    description,
    images,
    technologies,
    features,
    liveUrl,
    githubUrl,
  } = project;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="card overflow-hidden">
      {/* IMAGE CAROUSEL */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-elevated">
        <img
          src={images[currentImage]}
          alt={`${name} screenshot ${currentImage + 1}`}
          className="h-full w-full object-cover transition-opacity duration-300"
          loading="lazy"
        />

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
          >
            ‹
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
          >
            ›
          </button>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to screenshot ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  currentImage === index
                    ? "bg-white"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* PROJECT DETAILS */}
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-ink">
          {name}
        </h3>

        <p className="mt-3 text-muted">{description}</p>

        {features?.length ? (
          <ul className="mt-5 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm text-muted"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-3 py-1 font-mono text-xs text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Live Demo
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          ) : null}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}