// A section heading styled like a code comment, e.g. "// 02  Skills" —
// a small nod to the developer subject matter rather than a generic
// all-caps eyebrow label.
export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="mono-label">{`// ${index}  ${title}`}</p>
      <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-xl text-muted">{description}</p> : null}
    </div>
  );
}
