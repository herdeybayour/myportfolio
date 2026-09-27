// ---------------------------------------------------------------------------
// Central place to update your personal details and links.
// Every component reads from here, so you only ever need to edit this file.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Alimi Muhammed Adebayo",
  title: "Full-Stack Developer",
  location: "Ilorin, Kwara State, Nigeria",
  tagline:
    "I build practical web applications using modern frontend and backend technologies, turning ideas and real-world problems into useful digital solutions.",
};

// Fields already known are filled in. Replace ADD_LINKEDIN_URL and
// ADD_WHATSAPP_NUMBER with your own details — until then, those buttons
// stay hidden automatically instead of linking anywhere broken.
export const contactInfo = {
  email: "muhammedalimi182@gmail.com",
  github: "https://github.com/herdeybayour",
  linkedin: "https://www.linkedin.com/in/alimi-muhammed-204ba7395?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  // WhatsApp number in international format, digits only, e.g. "2348012345678"
  whatsapp: "07069486185",
};

// Returns true only once a placeholder value has been replaced with a real one.
export const isConfigured = (value) => Boolean(value) && !value.startsWith("ADD_");

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
