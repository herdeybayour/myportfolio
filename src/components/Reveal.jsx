import { useScrollReveal } from "../hooks/useScrollReveal.js";

// Wraps children in a div that fades/slides into place on scroll.
// `as` lets you render a semantic element other than a plain div, and
// `delay` (ms) staggers multiple Reveal siblings.
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useScrollReveal();

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
