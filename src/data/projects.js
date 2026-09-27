import digitcareHome from "../assets/projects/digitcare-home.png";
import digitcareAbout from "../assets/projects/digitcare-about.png";
import digitcareServices from "../assets/projects/digitcare-services.png";
import digitcareLogin from "../assets/projects/digitcare-login.png";

// Add future projects to this array.
// ProjectCard will display the images as a carousel.
export const projects = [
  {
    id: "digitcare",

    name: "DigitCare Specialist Hospital",

    description:
      "A hospital management web application with role-based workflows for admins, doctors, nurses, receptionists, pharmacists and laboratory staff — covering patient records, appointments, prescriptions and lab results.",

    // Carousel images
    images: [
      digitcareHome,
      digitcareAbout,
      digitcareServices,
      digitcareLogin,
    ],

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "MySQL",
      "JWT Authentication",
    ],

    features: [
      "Role-based access for admin, doctor, nurse, receptionist, pharmacist and lab staff",
      "Patient records, vitals and prescription management",
      "Appointment scheduling and tracking",
      "Laboratory result management",
      "Secure authentication with ASP.NET Identity and JWT",
    ],

    liveUrl: "https://digitcare-hospital-1.vercel.app/",

    githubUrl: null,

    featured: true,
  },
];